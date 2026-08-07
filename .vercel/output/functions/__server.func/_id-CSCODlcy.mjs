import { i as __toESM } from "./_runtime.mjs";
import { n as require_react } from "./_libs/@radix-ui/react-compose-refs+[...].mjs";
import { g as useNavigate, h as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { l as require_jsx_runtime } from "./_libs/@react-three/drei+[...].mjs";
import { n as materiList, t as Route } from "./_id-D1eYPMTS.mjs";
import { r as isMateriUnlocked } from "./_ssr/progress-DstGS8KL.mjs";
import { D as ArrowDown, E as ArrowLeft, T as ArrowRight, d as Plus, f as Minus, g as Info, l as Ruler, t as X, u as RotateCcw, w as ArrowUp, x as ChevronLeft } from "./_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_id-CSCODlcy.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var loaded = /* @__PURE__ */ new Set();
var pending = /* @__PURE__ */ new Map();
function loadScript(src) {
	if (loaded.has(src)) return Promise.resolve();
	const inFlight = pending.get(src);
	if (inFlight) return inFlight;
	const promise = new Promise((resolve, reject) => {
		const existing = document.querySelector(`script[src="${src}"]`);
		if (existing) {
			existing.addEventListener("load", () => {
				loaded.add(src);
				resolve();
			});
			existing.addEventListener("error", () => reject(/* @__PURE__ */ new Error(`Gagal memuat script: ${src}`)));
			return;
		}
		const script = document.createElement("script");
		script.src = src;
		script.async = true;
		script.onload = () => {
			loaded.add(src);
			resolve();
		};
		script.onerror = () => reject(/* @__PURE__ */ new Error(`Gagal memuat script: ${src}`));
		document.head.appendChild(script);
	}).finally(() => {
		pending.delete(src);
	});
	pending.set(src, promise);
	return promise;
}
var DEFAULT_SCALE = "0.5 0.5 0.5";
var AUDIO_LOCK_TIMEOUT_MS = 12e3;
var ZOOM_STEP = .2;
var MIN_ZOOM = .3;
var DEFAULT_MAX_ZOOM = 8;
var ROTATE_SPEED = .4;
var MOVE_STEP = .02;
function ensureAutoplayComponent() {
	const AFRAME = window.AFRAME;
	if (!AFRAME || AFRAME.components["autoplay-animations"]) return;
	AFRAME.registerComponent("autoplay-animations", {
		init: function() {
			this.mixer = null;
			this.el.addEventListener("model-loaded", (e) => {
				const model = e.detail.model;
				const animations = model.animations;
				if (!animations || !animations.length) return;
				this.mixer = new window.THREE.AnimationMixer(model);
				animations.forEach((clip) => this.mixer.clipAction(clip).play());
			});
		},
		tick: function(_t, dt) {
			if (this.mixer) this.mixer.update(dt / 1e3);
		}
	});
}
var ArEngine = class {
	config;
	callbacks;
	visited = /* @__PURE__ */ new Set();
	currentAudio = null;
	audioBusy = false;
	audioTimeoutHandle = null;
	activeTarget = null;
	openedTargets = /* @__PURE__ */ new Set();
	trackingKey = null;
	maxZoom = DEFAULT_MAX_ZOOM;
	baseScaleVec = {
		x: .3,
		y: .3,
		z: .3
	};
	zoomFactor = 1;
	rotY = 0;
	rotX = 0;
	moveX = 0;
	moveY = 0;
	dragging = false;
	lastX = 0;
	lastY = 0;
	disposed = false;
	onPointerDown = (e) => {
		if (!this.activeTarget) return;
		this.dragging = true;
		this.lastX = e.clientX;
		this.lastY = e.clientY;
	};
	onPointerMove = (e) => {
		if (!this.dragging || !this.activeTarget) return;
		const dx = e.clientX - this.lastX;
		this.lastX = e.clientX;
		this.lastY = e.clientY;
		this.rotY += dx * ROTATE_SPEED;
		this.rotX = 0;
		this.applyWrapperTransform(this.activeTarget.key);
	};
	onPointerUp = () => {
		this.dragging = false;
	};
	constructor(config, callbacks) {
		this.config = config;
		this.callbacks = callbacks;
		this.maxZoom = typeof config.maxZoom === "number" ? config.maxZoom : DEFAULT_MAX_ZOOM;
	}
	q(id) {
		return document.getElementById(id);
	}
	totalHotspotCount() {
		return this.config.targets.reduce((sum, t) => sum + t.hotspots.length, 0);
	}
	updateGateButton() {
		const total = this.totalHotspotCount();
		const done = this.visited.size;
		this.callbacks.onGateUpdate(done, total, done >= total);
	}
	playIntroAudio(src) {
		if (this.currentAudio) {
			this.currentAudio.pause();
			this.currentAudio.currentTime = 0;
		}
		if (!src) return;
		this.currentAudio = new Audio(src);
		this.currentAudio.play().catch(() => {});
	}
	lockHotspots() {
		this.audioBusy = true;
		document.querySelectorAll(".ar-hotspot-pill").forEach((el) => el.setAttribute("disabled", "true"));
	}
	unlockHotspots() {
		this.audioBusy = false;
		document.querySelectorAll(".ar-hotspot-pill").forEach((el) => el.removeAttribute("disabled"));
	}
	playNarrationAudio(src, onEnded) {
		if (this.currentAudio) {
			this.currentAudio.pause();
			this.currentAudio.currentTime = 0;
		}
		if (this.audioTimeoutHandle) clearTimeout(this.audioTimeoutHandle);
		if (!src) {
			this.unlockHotspots();
			onEnded?.();
			return;
		}
		this.lockHotspots();
		this.currentAudio = new Audio(src);
		let finished = false;
		const finish = () => {
			if (finished) return;
			finished = true;
			if (this.audioTimeoutHandle) clearTimeout(this.audioTimeoutHandle);
			this.unlockHotspots();
			onEnded?.();
		};
		this.currentAudio.addEventListener("ended", finish, { once: true });
		this.currentAudio.addEventListener("error", finish, { once: true });
		this.audioTimeoutHandle = setTimeout(finish, AUDIO_LOCK_TIMEOUT_MS);
		this.currentAudio.play().catch(finish);
	}
	parseScale(str) {
		const parts = (str || DEFAULT_SCALE).trim().split(/\s+/).map(Number);
		return {
			x: parts[0] || .3,
			y: parts[1] || .3,
			z: parts[2] || .3
		};
	}
	applyWrapperTransform(targetKey) {
		const wrapper = this.q("arSceneRoot")?.querySelector(`[data-wrapper="${targetKey}"]`);
		if (!wrapper) return;
		const s = this.baseScaleVec;
		wrapper.setAttribute("position", `${this.moveX} 0 ${this.moveY}`);
		wrapper.setAttribute("scale", `${s.x * this.zoomFactor} ${s.y * this.zoomFactor} ${s.z * this.zoomFactor}`);
		wrapper.setAttribute("rotation", `${this.rotX} ${this.rotY} 0`);
	}
	setBaseScale(targetKey, scaleStr) {
		this.baseScaleVec = this.parseScale(scaleStr);
		this.zoomFactor = 1;
		this.rotY = 0;
		this.rotX = 0;
		this.moveX = 0;
		this.moveY = 0;
		this.applyWrapperTransform(targetKey);
	}
	zoomIn = () => {
		if (!this.activeTarget) return;
		this.zoomFactor = Math.min(this.maxZoom, +(this.zoomFactor + ZOOM_STEP).toFixed(2));
		this.applyWrapperTransform(this.activeTarget.key);
	};
	zoomOut = () => {
		if (!this.activeTarget) return;
		this.zoomFactor = Math.max(MIN_ZOOM, +(this.zoomFactor - ZOOM_STEP).toFixed(2));
		this.applyWrapperTransform(this.activeTarget.key);
	};
	resetView = () => {
		if (!this.activeTarget) return;
		this.moveX = 0;
		this.moveY = 0;
		this.applyPresetView(this.activeTarget.defaultView);
	};
	moveLeft = () => {
		if (!this.activeTarget) return;
		this.moveX -= MOVE_STEP;
		this.applyWrapperTransform(this.activeTarget.key);
	};
	moveRight = () => {
		if (!this.activeTarget) return;
		this.moveX += MOVE_STEP;
		this.applyWrapperTransform(this.activeTarget.key);
	};
	moveUp = () => {
		if (!this.activeTarget) return;
		this.moveY += MOVE_STEP;
		this.applyWrapperTransform(this.activeTarget.key);
	};
	moveDown = () => {
		if (!this.activeTarget) return;
		this.moveY -= MOVE_STEP;
		this.applyWrapperTransform(this.activeTarget.key);
	};
	applyPresetView(view) {
		if (!view || !this.activeTarget) return;
		if (typeof view.zoom === "number") this.zoomFactor = Math.min(this.maxZoom, Math.max(MIN_ZOOM, view.zoom));
		if (typeof view.rotY === "number") this.rotY = view.rotY;
		if (typeof view.rotX === "number") this.rotX = view.rotX;
		if (typeof view.moveX === "number") this.moveX = view.moveX;
		if (typeof view.moveY === "number") this.moveY = view.moveY;
		this.applyWrapperTransform(this.activeTarget.key);
	}
	copyCurrentView = () => {
		if (!this.activeTarget) return;
		const snippet = document.querySelector(".ar-hotspot-pill.is-active") !== null ? `"view": {\n    "rotY": ${Math.round(this.rotY)},\n    "zoom": ${this.zoomFactor.toFixed(2)},\n    "moveX": ${this.moveX.toFixed(3)},\n    "moveY": ${this.moveY.toFixed(3)}\n  }` : `"defaultView": {\n    "rotY": ${Math.round(this.rotY)},\n    "zoom": ${this.zoomFactor.toFixed(2)}\n  }`;
		navigator.clipboard?.writeText(snippet).catch(() => {});
		const toast = this.q("arCopyToast");
		if (toast) {
			toast.textContent = `Disalin:\n${snippet}`;
			toast.hidden = false;
			setTimeout(() => {
				toast.hidden = true;
			}, 4e3);
		}
	};
	initDragRotate() {
		this.q("arSceneRoot")?.addEventListener("pointerdown", this.onPointerDown);
		window.addEventListener("pointermove", this.onPointerMove);
		window.addEventListener("pointerup", this.onPointerUp);
		window.addEventListener("pointercancel", this.onPointerUp);
	}
	updateModel(targetKey, modelSrc, scale, resetZoomRotation) {
		if (!modelSrc) return;
		const modelEl = this.q("arSceneRoot")?.querySelector(`[data-target-key="${targetKey}"] a-gltf-model`);
		if (!modelEl) return;
		if (modelEl.getAttribute("src") !== modelSrc) modelEl.setAttribute("src", modelSrc);
		if (resetZoomRotation) this.setBaseScale(targetKey, scale);
		else {
			this.baseScaleVec = this.parseScale(scale);
			this.applyWrapperTransform(targetKey);
		}
	}
	setDescText(text) {
		const desc = this.q("arPanelDesc");
		const toggle = this.q("arDescToggle");
		if (!desc) return;
		desc.textContent = text;
		desc.classList.remove("is-expanded");
		if (toggle) toggle.textContent = "Baca selengkapnya ▾";
		requestAnimationFrame(() => {
			const isTruncated = desc.scrollHeight > desc.clientHeight + 2;
			if (toggle) toggle.hidden = !isTruncated;
		});
	}
	openPanel(target, isFirstOpen) {
		const panel = this.q("arPanel");
		const titleEl = this.q("arPanelTitle");
		const hotspotRow = this.q("arHotspotRow");
		const dots = this.q("arProgressDots");
		const reopenBtn = this.q("arReopenBtn");
		if (!panel || !titleEl || !hotspotRow || !dots) return;
		panel.hidden = false;
		if (reopenBtn) reopenBtn.hidden = true;
		titleEl.textContent = target.label;
		hotspotRow.innerHTML = "";
		target.hotspots.forEach((h, idx) => {
			const btn = document.createElement("button");
			btn.type = "button";
			btn.className = "ar-hotspot-pill";
			if (this.visited.has(`${target.key}:${h.id}`)) btn.classList.add("is-visited-pill");
			btn.textContent = `${idx + 1}. ${h.label}`;
			btn.dataset.hotspotId = h.id;
			btn.addEventListener("click", () => this.selectHotspot(target, h, btn));
			hotspotRow.appendChild(btn);
		});
		dots.innerHTML = target.hotspots.map((h) => `<span class="ar-dot${this.visited.has(`${target.key}:${h.id}`) ? " is-visited" : ""}" data-hotspot-id="${h.id}"></span>`).join("");
		if (isFirstOpen) {
			this.updateModel(target.key, target.model, target.scale, true);
			this.applyPresetView(target.defaultView);
			this.setDescText("Pilih salah satu bagian di atas untuk mendengar & membaca penjelasannya.");
			this.playIntroAudio(target.introAudio);
		} else this.setDescText("Pilih salah satu bagian di atas untuk mendengar & membaca penjelasannya.");
	}
	selectHotspot(target, hotspot, btnEl) {
		if (this.audioBusy) return;
		const hotspotRow = this.q("arHotspotRow");
		const dots = this.q("arProgressDots");
		hotspotRow?.querySelectorAll(".ar-hotspot-pill").forEach((el) => el.classList.remove("is-active"));
		if (btnEl) {
			btnEl.classList.add("is-active");
			btnEl.classList.add("is-visited-pill");
		}
		this.updateModel(target.key, hotspot.model || target.model, hotspot.scale || target.scale, false);
		this.applyPresetView(hotspot.view);
		this.setDescText(hotspot.teks);
		this.playNarrationAudio(hotspot.audio, null);
		const key = `${target.key}:${hotspot.id}`;
		this.visited.add(key);
		(dots?.querySelector(`[data-hotspot-id="${hotspot.id}"]`))?.classList.add("is-visited");
		this.updateGateButton();
	}
	closePanel = () => {
		const panel = this.q("arPanel");
		const reopenBtn = this.q("arReopenBtn");
		if (panel) panel.hidden = true;
		this.currentAudio?.pause();
		this.unlockHotspots();
		if (this.activeTarget && reopenBtn) reopenBtn.hidden = false;
	};
	reopenPanel = () => {
		if (this.activeTarget) this.openPanel(this.activeTarget, false);
	};
	toggleDesc = () => {
		const desc = this.q("arPanelDesc");
		const toggle = this.q("arDescToggle");
		if (!desc || !toggle) return;
		toggle.textContent = desc.classList.toggle("is-expanded") ? "Sembunyikan ▴" : "Baca selengkapnya ▾";
	};
	buildScene() {
		const sceneRoot = this.q("arSceneRoot");
		if (!sceneRoot) return;
		const targetsHtml = this.config.targets.map((t) => `
      <a-entity mindar-image-target="targetIndex: ${t.targetIndex}" data-target-key="${t.key}">
        <a-entity class="ar-model-wrapper" data-wrapper="${t.key}" scale="${t.scale || DEFAULT_SCALE}" rotation="0 0 0">
          <a-gltf-model src="${t.model}" position="0 0 0" autoplay-animations></a-gltf-model>
        </a-entity>
      </a-entity>`).join("");
		sceneRoot.innerHTML = `
    <a-scene mindar-image="imageTargetSrc: ${this.config.targetMind}; autoStart: true; filterMinCF: 0.00001; filterBeta: 5; warmupTolerance: 5; missTolerance: 5;"
      color-space="sRGB" renderer="colorManagement: true, physicallyCorrectLights"
      vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
      <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>
      ${targetsHtml}
    </a-scene>
  `;
		this.config.targets.forEach((t) => {
			const el = sceneRoot.querySelector(`[data-target-key="${t.key}"]`);
			if (!el) return;
			const modelEl = el.querySelector("a-gltf-model");
			modelEl?.addEventListener("model-error", (e) => {
				const src = modelEl.getAttribute("src") || t.model;
				console.error(`[ArEngine] Gagal load model "${t.key}":`, src, e?.detail ?? e);
				this.callbacks.onModelError?.(t.key, src, e?.detail ?? e);
			});
			this.watchTarget(el, t);
		});
	}
	/**
	* MindAR nge-gate event targetFound/targetLost lewat `object3D.visible`, dan
	* pas target hilang dia nimpa matrix anchor-nya dengan MATRIKS NOL:
	*
	*   if (n === null) { this.el.object3D.matrix = this.invisibleMatrix; return; }
	*
	* Versi lama nge-hack `object3D.visible = true` lagi di targetLost biar model
	* nggak ilang pas target keluar frame. Efeknya justru kebalikannya: entity-nya
	* "visible" tapi transform-nya kolaps ke satu titik, jadi modelnya nggak
	* kelihatan sama sekali. Plus, karena .visible kadung true, cek MindAR
	* `!visible && n !== null` nggak pernah kepenuhi lagi -> targetFound mati
	* permanen, panel & defaultView nggak pernah jalan lagi.
	*
	* Gantinya kita intercept updateWorldMatrix: update valid diterusin apa
	* adanya, update null (target hilang) sengaja nggak diterusin sama sekali.
	* Matrix terakhir yang valid tetap kepakai, jadi model diam di posisi terakhir
	* tanpa perlu ngerusak state internal MindAR.
	*/
	watchTarget(el, t) {
		const anchorEl = el;
		const patch = () => {
			const comp = anchorEl.components?.["mindar-image-target"];
			if (!comp) return false;
			if (comp.__histoarPatched) return true;
			comp.__histoarPatched = true;
			const forward = comp.updateWorldMatrix.bind(comp);
			comp.updateWorldMatrix = (worldMatrix) => {
				if (this.disposed) return;
				if (!worldMatrix) return;
				forward(worldMatrix);
				this.onTargetTracked(anchorEl, t);
			};
			return true;
		};
		if (!patch()) anchorEl.addEventListener("componentinitialized", (e) => {
			if (e.detail?.name === "mindar-image-target") patch();
		});
	}
	/** Dipanggil tiap frame selama target ke-track; isinya cuma jalan pas transisi. */
	onTargetTracked(anchorEl, t) {
		if (this.trackingKey === t.key) return;
		if (this.trackingKey) {
			const prev = this.q("arSceneRoot")?.querySelector(`[data-target-key="${this.trackingKey}"]`);
			if (prev?.object3D) prev.object3D.visible = false;
		}
		this.trackingKey = t.key;
		this.activeTarget = t;
		if (anchorEl.object3D) anchorEl.object3D.visible = true;
		document.body.classList.add("ar-locked-in");
		const hint = this.q("arScanHint");
		if (hint) hint.hidden = true;
		const viewControls = this.q("arViewControls");
		if (viewControls) viewControls.hidden = false;
		const moveControls = this.q("arMoveControls");
		if (moveControls) moveControls.hidden = false;
		const isFirstTime = !this.openedTargets.has(t.key);
		this.openedTargets.add(t.key);
		if (isFirstTime) this.openPanel(t, true);
	}
	start() {
		ensureAutoplayComponent();
		this.buildScene();
		this.updateGateButton();
		this.initDragRotate();
	}
	/** Bersihin listener, audio, dan A-Frame scene pas komponen React unmount. */
	dispose() {
		if (this.disposed) return;
		this.disposed = true;
		this.currentAudio?.pause();
		if (this.audioTimeoutHandle) clearTimeout(this.audioTimeoutHandle);
		document.body.classList.remove("ar-locked-in");
		document.documentElement.classList.remove("a-fullscreen");
		window.removeEventListener("pointermove", this.onPointerMove);
		window.removeEventListener("pointerup", this.onPointerUp);
		window.removeEventListener("pointercancel", this.onPointerUp);
		const sceneRoot = this.q("arSceneRoot");
		const arSystem = (sceneRoot?.querySelector("a-scene"))?.systems?.["mindar-image-system"];
		try {
			arSystem?.stop?.();
		} catch {
			try {
				arSystem?.controller?.dispose?.();
			} catch {}
		}
		document.querySelectorAll("video").forEach((video) => {
			video.srcObject?.getTracks().forEach((track) => track.stop());
			video.remove();
		});
		document.querySelectorAll(".mindar-ui-overlay, .mindar-ui-scanning, .mindar-ui-loading, .mindar-ui-compatibility").forEach((el) => el.remove());
		if (sceneRoot) sceneRoot.innerHTML = "";
	}
};
function ArScan({ materiId, materiJudul, arConfig, onAllExplored }) {
	const navigate = useNavigate();
	const engineRef = (0, import_react.useRef)(null);
	const [ready, setReady] = (0, import_react.useState)(false);
	const [scanHintVisible, setScanHintVisible] = (0, import_react.useState)(true);
	const [showViewControls, setShowViewControls] = (0, import_react.useState)(false);
	const [showMoveControls, setShowMoveControls] = (0, import_react.useState)(false);
	const [panelHidden, setPanelHidden] = (0, import_react.useState)(true);
	const [reopenVisible, setReopenVisible] = (0, import_react.useState)(false);
	const [gate, setGate] = (0, import_react.useState)({
		done: 0,
		total: 0,
		unlocked: false
	});
	const [modelError, setModelError] = (0, import_react.useState)(null);
	const [restartToken, setRestartToken] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		async function boot() {
			await loadScript("/vendor/aframe-1.5.0.min.js");
			await loadScript("/vendor/mindar-image-aframe-1.2.5.prod.js");
			if (cancelled) return;
			setModelError(null);
			const engine = new ArEngine(arConfig, {
				onGateUpdate: (done, total, unlockedNow) => setGate({
					done,
					total,
					unlocked: unlockedNow
				}),
				onQuizReady: onAllExplored,
				onModelError: (targetKey, src) => setModelError(`Model "${targetKey}" gagal dimuat (${src}).`)
			});
			engineRef.current = engine;
			engine.start();
			setReady(true);
			const panelEl = document.getElementById("arPanel");
			const scanHintEl = document.getElementById("arScanHint");
			const reopenEl = document.getElementById("arReopenBtn");
			const viewControlsEl = document.getElementById("arViewControls");
			const moveControlsEl = document.getElementById("arMoveControls");
			const observer = new MutationObserver(() => {
				if (panelEl) setPanelHidden(panelEl.hidden);
				if (scanHintEl) setScanHintVisible(!scanHintEl.hidden);
				if (reopenEl) setReopenVisible(!reopenEl.hidden);
				if (viewControlsEl) setShowViewControls(!viewControlsEl.hidden);
				if (moveControlsEl) setShowMoveControls(!moveControlsEl.hidden);
			});
			[
				panelEl,
				scanHintEl,
				reopenEl,
				viewControlsEl,
				moveControlsEl
			].forEach((el) => {
				if (el) observer.observe(el, {
					attributes: true,
					attributeFilter: ["hidden"]
				});
			});
			return () => observer.disconnect();
		}
		const cleanupPromise = boot();
		return () => {
			cancelled = true;
			cleanupPromise.then((cleanup) => cleanup?.());
			engineRef.current?.dispose();
			engineRef.current = null;
			document.documentElement.classList.remove("a-fullscreen");
		};
	}, [materiId, restartToken]);
	const restartCamera = () => {
		setReady(false);
		setModelError(null);
		setRestartToken((n) => n + 1);
	};
	const gateReady = gate.total > 0 && gate.done >= gate.total;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen overflow-hidden bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "glass fixed inset-x-0 top-0 z-30 flex items-center gap-4 px-4 py-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => navigate({ to: "/materi" }),
						className: "flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-4 w-4" }), " Kembali"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-sm font-semibold",
						children: materiJudul
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: restartCamera,
						className: "ml-auto flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "h-4 w-4" }), " Kamera bermasalah?"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				id: "arSceneRoot",
				className: "ar-scene-root fixed inset-0"
			}),
			modelError && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass-strong fixed left-1/2 top-20 z-30 -translate-x-1/2 rounded-2xl px-4 py-2 text-center font-mono text-xs text-destructive",
				children: [
					modelError,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"Cek console browser untuk detail error, atau tap \"Kamera bermasalah?\" buat coba lagi."
				]
			}),
			!ready && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-10 flex items-center justify-center bg-background",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center gap-3 text-sm text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" }), "Memuat mode AR…"]
				})
			}),
			scanHintVisible && ready && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				id: "arScanHint",
				className: "glass fixed left-1/2 top-20 z-20 -translate-x-1/2 rounded-full px-4 py-2 font-mono text-xs text-muted-foreground",
				children: "Arahkan kamera ke gambar target di buku/kartu"
			}),
			!scanHintVisible && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				id: "arScanHint",
				hidden: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				id: "arReopenBtn",
				hidden: !reopenVisible,
				onClick: () => engineRef.current?.reopenPanel(),
				"aria-label": "Buka info lagi",
				className: "glass fixed bottom-24 right-4 z-20 flex h-11 w-11 items-center justify-center rounded-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "h-5 w-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				id: "arViewControls",
				hidden: !showViewControls,
				className: "glass fixed right-4 top-24 z-20 flex flex-col gap-2 rounded-2xl p-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						id: "btnZoomIn",
						onClick: () => engineRef.current?.zoomIn(),
						"aria-label": "Perbesar model",
						className: "flex h-9 w-9 items-center justify-center rounded-xl hover:bg-white/10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						id: "btnZoomOut",
						onClick: () => engineRef.current?.zoomOut(),
						"aria-label": "Perkecil model",
						className: "flex h-9 w-9 items-center justify-center rounded-xl hover:bg-white/10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-4 w-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						id: "btnResetView",
						onClick: () => engineRef.current?.resetView(),
						"aria-label": "Reset tampilan",
						className: "flex h-9 w-9 items-center justify-center rounded-xl hover:bg-white/10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "h-4 w-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						id: "btnCopyView",
						onClick: () => engineRef.current?.copyCurrentView(),
						"aria-label": "Salin posisi kamera",
						title: "Salin posisi buat ditempel ke ar.json",
						className: "flex h-9 w-9 items-center justify-center rounded-xl hover:bg-white/10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ruler, { className: "h-4 w-4" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				id: "arMoveControls",
				hidden: !showMoveControls,
				className: "glass fixed bottom-24 left-4 z-20 grid grid-cols-3 gap-1 rounded-2xl p-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						id: "btnMoveUp",
						onClick: () => engineRef.current?.moveUp(),
						className: "flex h-9 w-9 items-center justify-center rounded-xl hover:bg-white/10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "h-4 w-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						id: "btnMoveLeft",
						onClick: () => engineRef.current?.moveLeft(),
						className: "flex h-9 w-9 items-center justify-center rounded-xl hover:bg-white/10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						id: "btnMoveRight",
						onClick: () => engineRef.current?.moveRight(),
						className: "flex h-9 w-9 items-center justify-center rounded-xl hover:bg-white/10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						id: "btnMoveDown",
						onClick: () => engineRef.current?.moveDown(),
						className: "flex h-9 w-9 items-center justify-center rounded-xl hover:bg-white/10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { className: "h-4 w-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				id: "arCopyToast",
				hidden: true,
				className: "glass fixed bottom-4 left-1/2 z-30 -translate-x-1/2 whitespace-pre rounded-xl px-4 py-2 font-mono text-xs"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				id: "arPanel",
				hidden: panelHidden,
				className: "glass-strong fixed inset-x-0 bottom-0 z-20 max-h-[55vh] overflow-y-auto rounded-t-3xl p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "arPanelTitle",
							className: "font-display text-lg font-semibold",
							children: "—"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							id: "arPanelClose",
							onClick: () => engineRef.current?.closePanel(),
							"aria-label": "Tutup panel",
							className: "flex h-8 w-8 items-center justify-center rounded-full hover:bg-white/10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						id: "arHotspotRow",
						className: "mt-3 flex flex-wrap gap-2 empty:hidden [&_.ar-hotspot-pill]:rounded-full [&_.ar-hotspot-pill]:border [&_.ar-hotspot-pill]:border-white/10 [&_.ar-hotspot-pill]:bg-white/[0.03] [&_.ar-hotspot-pill]:px-3 [&_.ar-hotspot-pill]:py-1.5 [&_.ar-hotspot-pill]:text-xs [&_.ar-hotspot-pill.is-active]:bg-holo [&_.ar-hotspot-pill.is-active]:text-primary-foreground [&_.ar-hotspot-pill.is-visited-pill]:border-holo/50 [&_.ar-hotspot-pill:disabled]:opacity-40"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						id: "arPanelDesc",
						className: "mt-3 text-sm leading-relaxed text-muted-foreground [&:not(.is-expanded)]:line-clamp-3",
						children: "—"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						id: "arDescToggle",
						hidden: true,
						onClick: () => engineRef.current?.toggleDesc(),
						className: "mt-1 text-xs font-medium text-primary",
						children: "Baca selengkapnya ▾"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						id: "arProgressDots",
						className: "mt-4 flex gap-1.5 [&_.ar-dot]:h-1.5 [&_.ar-dot]:w-1.5 [&_.ar-dot]:rounded-full [&_.ar-dot]:bg-white/15 [&_.ar-dot.is-visited]:bg-holo"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						id: "btnKeQuiz",
						disabled: !gateReady,
						onClick: () => gateReady && navigate({
							to: "/quiz/$id",
							params: { id: materiId }
						}),
						className: "mt-5 w-full rounded-full bg-holo px-4 py-3 text-sm font-semibold text-primary-foreground shadow-holo transition disabled:cursor-not-allowed disabled:opacity-40",
						children: gateReady ? "Lanjut ke Quiz →" : `🔒 Jelajahi semua bagian dulu (${gate.done}/${gate.total || "…"})`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						id: "arGateNote",
						className: "mt-2 text-center text-xs text-muted-foreground",
						children: gateReady ? "Semua bagian sudah dijelajahi. Mantap!" : gate.total ? `Sisa ${gate.total - gate.done} bagian lagi yang belum di-tap.` : ""
					})
				]
			})
		]
	});
}
function MateriArPage() {
	const { materi, arConfig } = Route.useLoaderData();
	const [unlocked, setUnlocked] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		setUnlocked(isMateriUnlocked(materiList, materi.id));
	}, [materi.id]);
	if (unlocked === null) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background text-sm text-muted-foreground",
		children: "Memuat…"
	});
	if (!unlocked) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlockedState, { message: "Materi ini masih terkunci. Selesaikan materi sebelumnya dulu ya." });
	if (!arConfig) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlockedState, { message: "Belum ada konfigurasi AR untuk materi ini." });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArScan, {
		materiId: materi.id,
		materiJudul: materi.judul,
		arConfig,
		onAllExplored: () => {}
	});
}
function BlockedState({ message }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col items-center justify-center gap-4 bg-background px-6 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "max-w-md text-muted-foreground",
			children: message
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/materi",
			className: "rounded-full bg-holo px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-holo",
			children: "Kembali ke daftar materi"
		})]
	});
}
//#endregion
export { MateriArPage as component };
