import { i as __toESM } from "../_runtime.mjs";
import { t as materi_default } from "./materi-DH-DsZFY.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { l as require_jsx_runtime } from "../_libs/@react-three/drei+[...].mjs";
import { t as getProgress } from "./progress-DstGS8KL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/CoreSample-BmzsK89X.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var { materi } = materi_default;
function CoreSample({ currentMateriId }) {
	const [completed, setCompleted] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		setCompleted(getProgress().completed);
	}, [currentMateriId]);
	const list = [...materi].sort((a, b) => a.urutan - b.urutan);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex items-center gap-1",
		"aria-label": "Progres belajar",
		children: list.map((m) => {
			const isDone = completed.includes(m.id);
			const isCurrent = m.id === currentMateriId;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				title: `${m.kode} — ${m.judul}`,
				className: `h-2 w-6 rounded-full transition-all duration-300 ${isDone ? "shadow-holo" : isCurrent ? "animate-pulse-ring" : "opacity-30"}`,
				style: {
					backgroundColor: isDone || isCurrent ? m.layerColor : void 0,
					background: isDone || isCurrent ? m.layerColor : "oklch(1 0 0 / 0.1)"
				}
			}, m.id);
		})
	});
}
//#endregion
export { CoreSample as t };
