// Port dari assets/js/ar-controller.js jadi class TS yang bisa di-mount/unmount
// dengan aman dari React (state jadi instance property, bukan module-level).
//
// A-Frame & MindAR pada dasarnya library imperatif berbasis custom element,
// jadi bagian ini sengaja tetap manipulasi DOM langsung (lewat id yang sama
// dengan markup di ArScan.tsx) alih-alih dipaksa jadi "React murni".

import type { ArMateriConfig, ArTarget } from "@/lib/histoar-types";

declare global {
  interface Window {
    AFRAME: any;
    THREE: any;
  }
}

const DEFAULT_SCALE = "0.5 0.5 0.5";
const AUDIO_LOCK_TIMEOUT_MS = 12000;
// Zoom pakai langkah PERKALIAN, bukan penjumlahan, biar tetap terasa di skala
// besar (model kecil sering butuh zoomFactor 20-40; +0.2 di situ tak kelihatan).
const ZOOM_MULT = 1.18;
const TARGET_LOST_GRACE_MS = 600;
const MIN_ZOOM = 0.3;
const DEFAULT_MAX_ZOOM = 8;
const ROTATE_SPEED = 0.4;
const MOVE_STEP = 0.02;

function ensureAutoplayComponent() {
  const AFRAME = window.AFRAME;
  if (!AFRAME || AFRAME.components["autoplay-animations"]) return;
  AFRAME.registerComponent("autoplay-animations", {
    init: function (this: any) {
      this.mixer = null;
      this.el.addEventListener("model-loaded", (e: any) => {
        const model = e.detail.model;
        const animations = model.animations;
        if (!animations || !animations.length) return;
        this.mixer = new window.THREE.AnimationMixer(model);
        animations.forEach((clip: any) => this.mixer.clipAction(clip).play());
      });
    },
    tick: function (this: any, _t: number, dt: number) {
      if (this.mixer) this.mixer.update(dt / 1000);
    },
  });
}

export interface ArEngineCallbacks {
  onGateUpdate: (done: number, total: number, ready: boolean) => void;
  onQuizReady: () => void;
  onModelError?: (targetKey: string, src: string, detail: unknown) => void;
}

export class ArEngine {
  private config: ArMateriConfig;
  private callbacks: ArEngineCallbacks;
  private visited = new Set<string>();
  private currentAudio: HTMLAudioElement | null = null;
  private audioBusy = false;
  private audioTimeoutHandle: ReturnType<typeof setTimeout> | null = null;
  private activeTarget: ArTarget | null = null;
  // State "target ini udah pernah ketemu" WAJIB per-instance. Dulu disimpen
  // sebagai t._locked di object config-nya langsung, padahal config itu berasal
  // dari import ar.json = objek module-level yang hidup terus selama tab kebuka.
  // Efeknya: masuk AR untuk kedua kalinya (tanpa reload) targetFound dianggap
  // "bukan pertama kali", openPanel() nggak pernah jalan, jadi defaultView
  // (zoom) nggak keterapin dan panel + audio intro nggak muncul.
  private openedTargets = new Set<string>();
  private trackingKey: string | null = null;
  private lostTimer: ReturnType<typeof setTimeout> | null = null;
  private maxZoom = DEFAULT_MAX_ZOOM;
  private baseScaleVec = { x: 0.3, y: 0.3, z: 0.3 };
  private zoomFactor = 1;
  private rotY = 0;
  private rotX = 0;
  private moveX = 0;
  private moveY = 0;
  private dragging = false;
  private lastX = 0;
  private lastY = 0;
  private disposed = false;

  // bound handlers supaya bisa di-removeEventListener saat dispose()
  private onPointerDown = (e: PointerEvent) => {
    if (!this.activeTarget) return;
    this.dragging = true;
    this.lastX = e.clientX;
    this.lastY = e.clientY;
  };
  private onPointerMove = (e: PointerEvent) => {
    if (!this.dragging || !this.activeTarget) return;
    const dx = e.clientX - this.lastX;
    this.lastX = e.clientX;
    this.lastY = e.clientY;
    this.rotY += dx * ROTATE_SPEED;
    this.rotX = 0;
    this.applyWrapperTransform(this.activeTarget.key);
  };
  private onPointerUp = () => {
    this.dragging = false;
  };

  constructor(config: ArMateriConfig, callbacks: ArEngineCallbacks) {
    this.config = config;
    this.callbacks = callbacks;
    this.maxZoom = typeof config.maxZoom === "number" ? config.maxZoom : DEFAULT_MAX_ZOOM;
  }

  private q<T extends HTMLElement = HTMLElement>(id: string): T | null {
    return document.getElementById(id) as T | null;
  }

  private totalHotspotCount() {
    return this.config.targets.reduce((sum, t) => sum + t.hotspots.length, 0);
  }

  private updateGateButton() {
    const total = this.totalHotspotCount();
    const done = this.visited.size;
    this.callbacks.onGateUpdate(done, total, done >= total);
  }

  private playIntroAudio(src?: string) {
    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio.currentTime = 0;
    }
    if (!src) return;
    this.currentAudio = new Audio(src);
    this.currentAudio.play().catch(() => {});
  }

  private lockHotspots() {
    this.audioBusy = true;
    document
      .querySelectorAll(".ar-hotspot-pill")
      .forEach((el) => el.setAttribute("disabled", "true"));
  }

  private unlockHotspots() {
    this.audioBusy = false;
    document.querySelectorAll(".ar-hotspot-pill").forEach((el) => el.removeAttribute("disabled"));
  }

  private playNarrationAudio(src: string | undefined, onEnded: (() => void) | null) {
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

  private parseScale(str?: string) {
    const parts = (str || DEFAULT_SCALE).trim().split(/\s+/).map(Number);
    return { x: parts[0] || 0.3, y: parts[1] || 0.3, z: parts[2] || 0.3 };
  }

  private applyWrapperTransform(targetKey: string) {
    const sceneRoot = this.q("arSceneRoot");
    const wrapper = sceneRoot?.querySelector(`[data-wrapper="${targetKey}"]`);
    if (!wrapper) return;
    const s = this.baseScaleVec;
    wrapper.setAttribute("position", `${this.moveX} 0 ${this.moveY}`);
    wrapper.setAttribute(
      "scale",
      `${s.x * this.zoomFactor} ${s.y * this.zoomFactor} ${s.z * this.zoomFactor}`,
    );
    wrapper.setAttribute("rotation", `${this.rotX} ${this.rotY} 0`);
  }

  private setBaseScale(targetKey: string, scaleStr?: string) {
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
    this.zoomFactor = Math.min(this.maxZoom, +(this.zoomFactor * ZOOM_MULT).toFixed(2));
    this.applyWrapperTransform(this.activeTarget.key);
  };

  zoomOut = () => {
    if (!this.activeTarget) return;
    this.zoomFactor = Math.max(MIN_ZOOM, +(this.zoomFactor / ZOOM_MULT).toFixed(2));
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

  private applyPresetView(view?: { rotY?: number; rotX?: number; zoom?: number; moveX?: number; moveY?: number }) {
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
    const isHotspot = document.querySelector(".ar-hotspot-pill.is-active") !== null;
    const snippet = isHotspot
      ? `"view": {\n    "rotY": ${Math.round(this.rotY)},\n    "zoom": ${this.zoomFactor.toFixed(2)},\n    "moveX": ${this.moveX.toFixed(3)},\n    "moveY": ${this.moveY.toFixed(3)}\n  }`
      : `"defaultView": {\n    "rotY": ${Math.round(this.rotY)},\n    "zoom": ${this.zoomFactor.toFixed(2)}\n  }`;

    navigator.clipboard?.writeText(snippet).catch(() => {});

    const toast = this.q("arCopyToast");
    if (toast) {
      toast.textContent = `Disalin:\n${snippet}`;
      toast.hidden = false;
      setTimeout(() => {
        toast.hidden = true;
      }, 4000);
    }
  };

  private initDragRotate() {
    const root = this.q("arSceneRoot");
    root?.addEventListener("pointerdown", this.onPointerDown);
    window.addEventListener("pointermove", this.onPointerMove);
    window.addEventListener("pointerup", this.onPointerUp);
    window.addEventListener("pointercancel", this.onPointerUp);
  }

  private updateModel(targetKey: string, modelSrc: string | undefined, scale: string | undefined, resetZoomRotation: boolean) {
    if (!modelSrc) return;
    const sceneRoot = this.q("arSceneRoot");
    const modelEl = sceneRoot?.querySelector(`[data-target-key="${targetKey}"] a-gltf-model`);
    if (!modelEl) return;

    const currentSrc = modelEl.getAttribute("src");
    if (currentSrc !== modelSrc) modelEl.setAttribute("src", modelSrc);

    if (resetZoomRotation) {
      this.setBaseScale(targetKey, scale);
    } else {
      this.baseScaleVec = this.parseScale(scale);
      this.applyWrapperTransform(targetKey);
    }
  }

  private setDescText(text: string) {
    const desc = this.q("arPanelDesc");
    const toggle = this.q<HTMLButtonElement>("arDescToggle");
    if (!desc) return;
    desc.textContent = text;
    desc.classList.remove("is-expanded");
    if (toggle) toggle.textContent = "Baca selengkapnya \u25be";

    requestAnimationFrame(() => {
      const isTruncated = desc.scrollHeight > desc.clientHeight + 2;
      if (toggle) toggle.hidden = !isTruncated;
    });
  }

  private openPanel(target: ArTarget, isFirstOpen: boolean) {
    const panel = this.q("arPanel");
    const titleEl = this.q("arPanelTitle");
    const hotspotRow = this.q("arHotspotRow");
    const dots = this.q("arProgressDots");
    const reopenBtn = this.q<HTMLButtonElement>("arReopenBtn");
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

    dots.innerHTML = target.hotspots
      .map(
        (h) =>
          `<span class="ar-dot${this.visited.has(`${target.key}:${h.id}`) ? " is-visited" : ""}" data-hotspot-id="${h.id}"></span>`,
      )
      .join("");

    if (isFirstOpen) {
      this.updateModel(target.key, target.model, target.scale, true);
      this.applyPresetView(target.defaultView);
      this.setDescText("Pilih salah satu bagian di atas untuk mendengar & membaca penjelasannya.");
      this.playIntroAudio(target.introAudio);
    } else {
      this.setDescText("Pilih salah satu bagian di atas untuk mendengar & membaca penjelasannya.");
    }
  }

  private selectHotspot(target: ArTarget, hotspot: ArTarget["hotspots"][number], btnEl?: HTMLButtonElement) {
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

    const dot = dots?.querySelector(`[data-hotspot-id="${hotspot.id}"]`);
    dot?.classList.add("is-visited");

    this.updateGateButton();
  }

  closePanel = () => {
    const panel = this.q("arPanel");
    const reopenBtn = this.q<HTMLButtonElement>("arReopenBtn");
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
    const toggle = this.q<HTMLButtonElement>("arDescToggle");
    if (!desc || !toggle) return;
    const expanded = desc.classList.toggle("is-expanded");
    toggle.textContent = expanded ? "Sembunyikan \u25b4" : "Baca selengkapnya \u25be";
  };

  private buildScene() {
    const sceneRoot = this.q("arSceneRoot");
    if (!sceneRoot) return;

    const targetsHtml = this.config.targets
      .map(
        (t) => `
      <a-entity mindar-image-target="targetIndex: ${t.targetIndex}" data-target-key="${t.key}">
        <a-entity class="ar-model-wrapper" data-wrapper="${t.key}" scale="${t.scale || DEFAULT_SCALE}" rotation="0 0 0">
          <a-gltf-model src="${t.model}" position="0 0 0" autoplay-animations></a-gltf-model>
        </a-entity>
      </a-entity>`,
      )
      .join("");

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

      // Library-nya diam total kalau GLTFLoader gagal (network/parse/GPU) - tanpa
      // listener ini, model yang gagal muat kelihatan sama persis kayak "nggak muncul".
      const modelEl = el.querySelector("a-gltf-model");
      modelEl?.addEventListener("model-error", (e: any) => {
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
  private watchTarget(el: Element, t: ArTarget) {
    const anchorEl = el as any;

    const patch = () => {
      const comp = anchorEl.components?.["mindar-image-target"];
      if (!comp) return false;
      if (comp.__histoarPatched) return true;
      comp.__histoarPatched = true;

      const forward = comp.updateWorldMatrix.bind(comp);
      comp.updateWorldMatrix = (worldMatrix: number[] | null) => {
        if (this.disposed) return;
        if (!worldMatrix) {
          // Target hilang dari frame -> sembunyikan model (UX AR normal).
          // Kita TIDAK meneruskan matriks null ke MindAR (menghindari kolaps
          // transform), cukup sembunyikan entity + reset state via grace period
          // supaya kedipan tracking sesaat tidak bikin model kelap-kelip.
          this.scheduleTargetLost(anchorEl, t);
          return;
        }
        forward(worldMatrix);
        this.onTargetTracked(anchorEl, t);
      };
      return true;
    };

    // Komponen MindAR baru ke-init setelah <a-scene> selesai attach, jadi kalau
    // belum ada kita tunggu event init-nya.
    if (!patch()) {
      anchorEl.addEventListener("componentinitialized", (e: any) => {
        if (e.detail?.name === "mindar-image-target") patch();
      });
    }
  }

  /**
   * Target hilang: jadwalkan sembunyi setelah grace period. Kalau target
   * ketemu lagi sebelum timer habis, onTargetTracked membatalkannya.
   */
  private scheduleTargetLost(anchorEl: any, t: ArTarget) {
    if (this.trackingKey !== t.key) return; // bukan target aktif
    if (this.lostTimer) return; // sudah dijadwalkan
    this.lostTimer = setTimeout(() => {
      this.lostTimer = null;
      if (this.disposed) return;
      if (anchorEl.object3D) anchorEl.object3D.visible = false;
      this.trackingKey = null;
      document.body.classList.remove("ar-locked-in");
      const hint = this.q("arScanHint");
      if (hint) hint.hidden = false;
      const viewControls = this.q("arViewControls");
      if (viewControls) viewControls.hidden = true;
      const moveControls = this.q("arMoveControls");
      if (moveControls) moveControls.hidden = true;
    }, TARGET_LOST_GRACE_MS);
  }

  /** Dipanggil tiap frame selama target ke-track; isinya cuma jalan pas transisi. */
  private onTargetTracked(anchorEl: any, t: ArTarget) {
    if (this.lostTimer) {
      clearTimeout(this.lostTimer); // target balik sebelum grace habis
      this.lostTimer = null;
    }
    if (this.trackingKey === t.key) return;

    // Materi multi-target: sembunyiin model target sebelumnya biar nggak numpuk.
    if (this.trackingKey) {
      const prev = this.q("arSceneRoot")?.querySelector(`[data-target-key="${this.trackingKey}"]`) as any;
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
    if (this.lostTimer) clearTimeout(this.lostTimer);
    document.body.classList.remove("ar-locked-in");

    // A-Frame nempelin class "a-fullscreen" ke <html> pas <a-scene> connect
    // (html jadi position:fixed + body overflow:hidden) dan cuma ngelepasnya
    // kalau scene-nya punya atribut "embedded" - disconnectedCallback-nya nggak
    // bersih-bersih. Tanpa baris ini, halaman lain nggak bisa discroll setelah
    // user balik dari mode AR.
    document.documentElement.classList.remove("a-fullscreen");

    window.removeEventListener("pointermove", this.onPointerMove);
    window.removeEventListener("pointerup", this.onPointerUp);
    window.removeEventListener("pointercancel", this.onPointerUp);

    const sceneRoot = this.q("arSceneRoot");
    const sceneEl = sceneRoot?.querySelector("a-scene") as any;

    // Matiin sistem MindAR dulu (megang webcam loop) sebelum DOM dihapus,
    // kalau cuma innerHTML = "" doang, stream kamera bisa tetap nyala di background.
    const arSystem = sceneEl?.systems?.["mindar-image-system"];
    try {
      arSystem?.stop?.();
    } catch {
      // stop() nyentuh this.video yang bisa aja belum ada kalau user keluar pas
      // kamera masih nyala-in. Kalau throw di situ, controller.dispose() di baris
      // terakhirnya nggak kejalan -> worker MindAR bocor tiap masuk-keluar AR.
      try {
        arSystem?.controller?.dispose?.();
      } catch {
        // controller belum ke-init, aman diabaikan
      }
    }

    // Jaga-jaga: matiin manual semua video track yang aktif di halaman ini.
    document.querySelectorAll("video").forEach((video) => {
      const stream = video.srcObject as MediaStream | null;
      stream?.getTracks().forEach((track) => track.stop());
      video.remove();
    });

    document
  .querySelectorAll(
    ".mindar-ui-overlay, .mindar-ui-scanning, .mindar-ui-loading, .mindar-ui-compatibility",
  )
  .forEach((el) => el.remove());

    if (sceneRoot) sceneRoot.innerHTML = "";
}
}
