import { i as __toESM } from "../_runtime.mjs";
import { t as materi_default } from "./materi-DeSXLGNl.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as require_jsx_runtime } from "../_libs/@react-three/drei+[...].mjs";
import { n as isMateriComplete, r as isMateriUnlocked } from "./progress-DstGS8KL.mjs";
import { b as CircleCheck, c as ScanLine, p as Lock } from "../_libs/lucide-react.mjs";
import { n as Footer, r as Nav, t as AuroraBackground } from "./footer-sutNg0jG.mjs";
import { t as CoreSample } from "./CoreSample-D04HdX_Q.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/materi-pjxAeMwH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var { materi } = materi_default;
function MateriGrid() {
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setReady(true), []);
	const list = [...materi].sort((a, b) => a.urutan - b.urutan);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
		children: list.map((m) => {
			const unlocked = !ready || isMateriUnlocked(list, m.id);
			const done = ready && isMateriComplete(m.id);
			const cardInner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-xs tracking-wider text-muted-foreground",
						children: m.kode
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "h-2 w-2 rounded-full",
						style: { background: m.layerColor },
						"aria-hidden": true
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-3 font-display text-lg font-semibold leading-snug",
					children: m.judul
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground line-clamp-3",
					children: m.ringkasan
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 flex items-center gap-1.5 text-xs font-medium",
					children: done ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3.5 w-3.5 text-holo" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-holo",
						children: "Selesai"
					})] }) : unlocked ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScanLine, { className: "h-3.5 w-3.5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Scan AR" })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-3.5 w-3.5 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground",
						children: "Terkunci"
					})] })
				})
			] });
			const cardClass = "glass group relative overflow-hidden rounded-2xl p-5 transition-all duration-300" + (unlocked ? " hover:-translate-y-1 hover:shadow-holo cursor-pointer" : " opacity-50 cursor-not-allowed");
			if (unlocked) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/materi/$id",
				params: { id: m.id },
				className: cardClass,
				children: cardInner
			}, m.id);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cardClass,
				"aria-disabled": true,
				children: cardInner
			}, m.id);
		})
	});
}
function MateriPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative min-h-screen overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuroraBackground, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto max-w-6xl px-6 pt-32 pb-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoreSample, { currentMateriId: null })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-holo shadow-holo" }), " Peta Lapisan"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl",
						children: "Pilih Materi"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl text-muted-foreground",
						children: "Materi tersusun berurutan seperti lapisan tanah, selesaikan satu materi (scan AR + quiz + diskusi HistoAI) untuk membuka materi berikutnya."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MateriGrid, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "mt-10 inline-block text-sm text-muted-foreground hover:text-foreground",
						children: "← Kembali ke beranda"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { MateriPage as component };
