import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as require_jsx_runtime } from "../_libs/@react-three/drei+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/footer-sutNg0jG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AuroraBackground() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pointer-events-none fixed inset-0 -z-10 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-lines opacity-40" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute -top-1/3 -left-1/4 h-[80vh] w-[80vh] rounded-full blur-3xl animate-aurora",
				style: { background: "radial-gradient(circle, oklch(0.6 0.22 220 / 0.6), transparent 60%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-1/4 -right-1/4 h-[70vh] w-[70vh] rounded-full blur-3xl animate-aurora",
				style: {
					background: "radial-gradient(circle, oklch(0.55 0.24 280 / 0.5), transparent 60%)",
					animationDelay: "-8s"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute bottom-0 left-1/3 h-[60vh] w-[60vh] rounded-full blur-3xl animate-aurora",
				style: {
					background: "radial-gradient(circle, oklch(0.65 0.22 190 / 0.45), transparent 60%)",
					animationDelay: "-14s"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_20%,var(--color-background)_90%)]" })
		]
	});
}
var links = [
	{
		href: "/#experience",
		label: "Experience"
	},
	{
		href: "/#timeline",
		label: "Timeline"
	},
	{
		href: "/#learn",
		label: "Learn"
	},
	{
		href: "/#ar",
		label: "WebAR"
	},
	{
		href: "/#quiz",
		label: "Quiz"
	},
	{
		href: "/#ai",
		label: "AI Guide"
	}
];
function Nav() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: `glass flex w-full max-w-6xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 ${scrolled ? "shadow-holo" : ""}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-2 pl-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "relative flex h-8 w-8 items-center justify-center rounded-full bg-holo",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 rounded-full animate-pulse-ring" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-bold text-primary-foreground",
							children: "H"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-display text-sm font-semibold tracking-tight",
						children: ["Histo", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-holo",
							children: "AR"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "hidden items-center gap-1 md:flex",
					children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						className: "rounded-full px-3 py-1.5 text-xs font-medium text-muted-foreground transition hover:bg-white/5 hover:text-foreground",
						children: l.label
					}) }, l.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/materi",
					className: "rounded-full bg-holo px-4 py-1.5 text-xs font-semibold text-primary-foreground shadow-holo transition hover:opacity-90",
					children: "Launch AR"
				})
			]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "relative mx-auto max-w-7xl px-6 pb-16 pt-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass-strong rounded-3xl p-8 sm:p-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 sm:grid-cols-2 lg:grid-cols-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex h-8 w-8 items-center justify-center rounded-full bg-holo",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-bold text-primary-foreground",
							children: "H"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-display text-sm font-semibold",
						children: ["Histo", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-holo",
							children: "AR"
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-xs text-xs text-muted-foreground",
					children: "Membawa Pembelajaran Sejarah ke Masa Depan. Dibangun untuk web, ditenagai oleh WebXR."
				})] }), [
					{
						h: "Product",
						l: [
							"WebAR",
							"Timeline",
							"AI Guide"
						]
					},
					{
						h: "Company",
						l: [
							"About",
							"Educators",
							"Press",
							"Careers"
						]
					},
					{
						h: "Legal",
						l: [
							"Privacy",
							"Terms",
							"Accessibility"
						]
					}
				].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs font-semibold uppercase tracking-widest text-holo",
					children: c.h
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2 text-sm text-muted-foreground",
					children: c.l.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#",
						className: "transition hover:text-foreground",
						children: x
					}) }, x))
				})] }, c.h))]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" HistoAR. All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono",
					children: "v1.0 · Edisi Pembelajaran Masa Depan"
				})]
			})]
		})
	});
}
//#endregion
export { Footer as n, Nav as r, AuroraBackground as t };
