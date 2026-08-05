import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as useGLTF, i as OrbitControls, l as require_jsx_runtime, n as Environment, o as Canvas, r as useAnimations, s as useFrame, t as ContactShadows } from "../_libs/@react-three/drei+[...].mjs";
import { C as Camera, S as Check, _ as Globe, a as Skull, h as Layers, i as Smartphone, m as LoaderCircle, n as WandSparkles, o as Send, r as Sparkles, s as Scan, t as X, u as RotateCcw, v as Footprints, y as Compass } from "../_libs/lucide-react.mjs";
import { n as Footer, r as Nav, t as AuroraBackground } from "./footer-sutNg0jG.mjs";
import { c as createServerFn, i as TSS_SERVER_FUNCTION } from "./createServerFn-CIHAFgYl.mjs";
import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-_Z58VJBK.mjs";
import { t as Lenis } from "../_libs/lenis.mjs";
import { n as gsapWithCSS, t as ScrollTrigger } from "../_libs/gsap.mjs";
import { t as SkeletonUtils } from "../_libs/three-stdlib.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-f4tObVZ0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useLenis() {
	(0, import_react.useEffect)(() => {
		const lenis = new Lenis({
			duration: 1.2,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			smoothWheel: true
		});
		let rafId;
		function raf(time) {
			lenis.raf(time);
			rafId = requestAnimationFrame(raf);
		}
		rafId = requestAnimationFrame(raf);
		return () => {
			cancelAnimationFrame(rafId);
			lenis.destroy();
		};
	}, []);
}
function Particles({ count = 40 }) {
	const items = (0, import_react.useMemo)(() => Array.from({ length: count }).map((_, i) => ({
		id: i,
		left: Math.random() * 100,
		size: Math.random() * 3 + 1,
		delay: Math.random() * 20,
		duration: 18 + Math.random() * 20,
		drift: (Math.random() - .5) * 200,
		opacity: .3 + Math.random() * .5
	})), [count]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": true,
		className: "pointer-events-none fixed inset-0 -z-10 overflow-hidden",
		children: items.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "absolute bottom-0 rounded-full bg-holo",
			style: {
				left: `${p.left}%`,
				width: p.size,
				height: p.size,
				opacity: p.opacity,
				animation: `particle ${p.duration}s linear ${p.delay}s infinite`,
				"--x-drift": `${p.drift}px`,
				boxShadow: "0 0 8px currentColor",
				color: "oklch(0.78 0.18 210)"
			}
		}, p.id))
	});
}
if (typeof window !== "undefined") gsapWithCSS.registerPlugin(ScrollTrigger);
function Hero() {
	const rootRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.from(".hero-anim", {
				y: 40,
				opacity: 0,
				duration: 1.2,
				ease: "power3.out",
				stagger: .12
			});
			gsapWithCSS.to(".hero-parallax", {
				yPercent: -30,
				ease: "none",
				scrollTrigger: {
					trigger: rootRef.current,
					start: "top top",
					end: "bottom top",
					scrub: true
				}
			});
			gsapWithCSS.to(".hero-fade", {
				opacity: 0,
				y: -60,
				ease: "none",
				scrollTrigger: {
					trigger: rootRef.current,
					start: "top top",
					end: "bottom top",
					scrub: true
				}
			});
		}, rootRef);
		return () => ctx.revert();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref: rootRef,
		className: "relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "hero-parallax pointer-events-none absolute inset-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-1/2 top-1/2 h-[80vmin] w-[80vmin] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-1/2 top-1/2 h-[60vmin] w-[60vmin] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-1/2 top-1/2 h-[40vmin] w-[40vmin] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "hero-fade relative z-10 mx-auto max-w-5xl text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hero-anim mx-auto mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-holo shadow-holo" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground",
						children: "WebAR · Kini hadir melalui HistoAR,"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "hero-anim font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl md:text-8xl",
					children: [
						"Sejarah,",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Hadir Dalam ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-holo",
							children: "Dunia Nyata"
						}),
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "hero-anim mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg",
					children: "HistoAR adalah platform pembelajaran imersif yang menghadirkan masa lalu ke hadapan Anda melalui teknologi Augmented Reality. Jelajahi periodisasi bumi, amati manusia purba dan diorama interaktif, serta biarkan HistoAI memandu perjalanan belajar Anda langsung dari peramban, tanpa perlu menginstal aplikasi.."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hero-anim mt-10 flex flex-wrap items-center justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/materi",
						className: "group relative overflow-hidden rounded-full bg-holo px-6 py-3 text-sm font-semibold text-primary-foreground shadow-holo transition hover:scale-[1.02]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "relative z-10",
							children: "Mulai Pengalaman"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "shimmer absolute inset-0" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#experience",
						className: "rounded-full glass px-6 py-3 text-sm font-medium transition hover:bg-white/10",
						children: "Jelajahi Garis Waktu →"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hero-anim mt-16 grid grid-cols-3 gap-4 sm:gap-8",
					children: [
						{
							k: "12k+",
							v: "Learners"
						},
						{
							k: "48",
							v: "AR Exhibits"
						},
						{
							k: "4.9★",
							v: "Rated"
						}
					].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass rounded-2xl px-4 py-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-2xl font-semibold text-holo sm:text-3xl",
							children: s.k
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 text-xs text-muted-foreground",
							children: s.v
						})]
					}, s.v))
				})
			]
		})]
	});
}
var features = [
	{
		icon: Compass,
		title: "Pameran Interaktif",
		desc: "WebAR berskala ruangan yang menghadirkan model 3D dan diorama ke lingkungan nyata Anda melalui WebXR."
	},
	{
		icon: Layers,
		title: "Pembelajaran Bertahap",
		desc: "Jelajahi periodisasi bumi, kehidupan manusia praaksara, dan manusia purba Indonesia melalui diorama interaktif."
	},
	{
		icon: WandSparkles,
		title: "Pemandu AI",
		desc: "Asisten percakapan yang menyesuaikan penjelasan dengan tingkat pendidikan Anda secara langsung."
	},
	{
		icon: Sparkles,
		title: "Holographic UI",
		desc: "Dirancang dengan tampilan modern layaknya teknologi masa depan, namun tetap berjalan langsung di Browser"
	}
];
function Experience() {
	const ref = (0, import_react.useRef)(null);
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		if (el.getBoundingClientRect().top < window.innerHeight * .9) {
			setVisible(true);
			return;
		}
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				setVisible(true);
				observer.disconnect();
			}
		}, { threshold: .15 });
		observer.observe(el);
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "experience",
		ref,
		className: "relative mx-auto max-w-7xl px-6 py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-16 max-w-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-4 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1 w-1 rounded-full bg-holo" }), " Experience"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-4xl font-semibold sm:text-6xl",
					children: [
						"Belajar Tanpa ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-holo",
							children: "Batas"
						}),
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted-foreground",
					children: "Setiap permukaan menjadi ruang belajar. Setiap ruang kelas menghadirkan perjalanan ke masa praaksara."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
			children: features.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "exp-card group relative overflow-hidden rounded-3xl glass p-6 transition-all duration-700 hover:-translate-y-1 hover:shadow-holo",
				style: {
					opacity: visible ? 1 : 0,
					transform: visible ? "translateY(0)" : "translateY(40px)",
					transitionDelay: visible ? `${i * 100}ms` : "0ms"
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-6 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-holo/10 ring-1 ring-holo/40",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, { className: "h-5 w-5 text-holo" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-lg font-semibold",
						children: f.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: f.desc
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-br from-holo/0 via-transparent to-holo/10 opacity-0 transition group-hover:opacity-100" })
				]
			}, f.title))
		})]
	});
}
var events = [
	{
		year: "± 2.500 juta tahun lalu",
		title: "Arkaekum/Arkaezoikum",
		place: "Zaman Tertua",
		desc: "Bumi masih sangat panas dan kulit buminya belum stabil. Belum ada tanda kehidupan."
	},
	{
		year: "± 340 juta tahun lalu",
		title: "Paleozoikum",
		place: "Zaman Primer",
		desc: "Tanda kehidupan mulai muncul."
	},
	{
		year: "± 140 juta tahun lalu",
		title: "Mesozoikum",
		place: "Zaman Sekunder",
		desc: "Zaman reptil raksasa atau dinosaurus."
	},
	{
		year: "± 60 juta tahun lalu kini",
		title: "Neozoikum",
		place: "Zaman Hidup Baru",
		desc: "Terbagi Menjadi 2: Tersier dan Kuartier."
	},
	{
		year: "± 60 - 2,6 juta tahun lalu kini",
		title: "Tersier",
		place: "Zaman Hidup Baru",
		desc: "Mamalia menyusui dan berkembang pesat."
	},
	{
		year: "± 3 Juta tahun lalu",
		title: "Kuartier",
		place: "Zaman Hidup Baru",
		desc: "tanda-tanda kehidupan manusia muncul."
	}
];
function Timeline() {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.from(".tl-item", {
				opacity: 0,
				x: (i) => i % 2 === 0 ? -60 : 60,
				duration: .9,
				ease: "power3.out",
				stagger: .08,
				scrollTrigger: {
					trigger: ref.current,
					start: "top 70%"
				}
			});
			gsapWithCSS.to(".tl-line-fill", {
				scaleY: 1,
				ease: "none",
				scrollTrigger: {
					trigger: ref.current,
					start: "top 60%",
					end: "bottom 60%",
					scrub: true
				}
			});
		}, ref);
		return () => ctx.revert();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "timeline",
		ref,
		className: "relative mx-auto max-w-6xl px-6 py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-20 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-4 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground",
				children: "Interactive Timeline"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "font-display text-4xl font-semibold sm:text-6xl",
				children: [
					"Menjelajahi ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-holo",
						children: "Masa ke masa"
					}),
					"."
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/10" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "tl-line-fill absolute left-1/2 top-0 h-full w-px origin-top -translate-x-1/2 bg-holo shadow-holo",
					style: { transform: "translateX(-50%) scaleY(0)" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-16",
					children: events.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: `tl-item relative flex ${i % 2 === 0 ? "justify-start" : "justify-end"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute left-1/2 top-6 -translate-x-1/2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "relative block h-3 w-3 rounded-full bg-holo shadow-holo",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 rounded-full animate-pulse-ring" })
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass w-[calc(50%-2rem)] rounded-2xl p-6 transition hover:-translate-y-1 hover:shadow-holo",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs font-mono text-holo",
									children: e.year
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-1 font-display text-xl font-semibold",
									children: e.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-muted-foreground",
									children: e.place
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm text-muted-foreground",
									children: e.desc
								})
							]
						})]
					}, e.year))
				})
			]
		})]
	});
}
var materials = [
	{
		icon: Globe,
		tag: "Periodisasi Geologi",
		title: "Arkaekum",
		meta: "±2.500 juta tahun lalu · Awal mula bumi",
		accent: "from-cyan-400/30 to-blue-500/10"
	},
	{
		icon: Globe,
		tag: "Periodisasi Geologi",
		title: "Paleozoikum",
		meta: "±340 juta tahun · Zaman kehidupan tertua",
		accent: "from-blue-400/30 to-indigo-500/10"
	},
	{
		icon: Globe,
		tag: "Periodisasi Geologi",
		title: "Mesozoikum",
		meta: "±140 juta tahun · Zaman reptil raksasa",
		accent: "from-teal-400/30 to-cyan-500/10"
	},
	{
		icon: Globe,
		tag: "Periodisasi Geologi",
		title: "Neozoikum",
		meta: "±60 juta tahun · Zaman kehidupan baru",
		accent: "from-sky-400/30 to-blue-500/10"
	},
	{
		icon: Footprints,
		tag: "Kehidupan Praaksara",
		title: "Masa Berburu & Meramu Tingkat Sederhana",
		meta: "Food gathering · Hidup nomaden",
		accent: "from-indigo-400/30 to-purple-500/10"
	},
	{
		icon: Footprints,
		tag: "Kehidupan Praaksara",
		title: "Masa Berburu & Meramu Tingkat Lanjut",
		meta: "Semi-nomaden · Mulai menetap sementara",
		accent: "from-cyan-400/30 to-teal-500/10"
	},
	{
		icon: Footprints,
		tag: "Kehidupan Praaksara",
		title: "Masa Bercocok Tanam",
		meta: "Food producing · Hidup menetap",
		accent: "from-blue-400/30 to-cyan-500/10"
	},
	{
		icon: Footprints,
		tag: "Kehidupan Praaksara",
		title: "Masa Perundagian",
		meta: "Pertukangan · Kemahiran logam",
		accent: "from-teal-400/30 to-indigo-500/10"
	},
	{
		icon: Skull,
		tag: "Manusia Purba",
		title: "Meganthropus Paleojavanicus",
		meta: "Sangiran · Manusia purba tertua di Indonesia",
		accent: "from-purple-400/30 to-indigo-500/10"
	},
	{
		icon: Skull,
		tag: "Manusia Purba",
		title: "Pithecanthropus Erectus",
		meta: "Trinil · Manusia kera berjalan tegak",
		accent: "from-indigo-400/30 to-blue-500/10"
	},
	{
		icon: Skull,
		tag: "Manusia Purba",
		title: "Homo Soloensis & Wajakensis",
		meta: "Ngandong & Wajak · Bentuk paling maju",
		accent: "from-cyan-400/30 to-purple-500/10"
	}
];
function Learn() {
	const ref = (0, import_react.useRef)(null);
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		if (el.getBoundingClientRect().top < window.innerHeight * .9) {
			setVisible(true);
			return;
		}
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				setVisible(true);
				observer.disconnect();
			}
		}, { threshold: .1 });
		observer.observe(el);
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "learn",
		ref,
		className: "relative mx-auto max-w-7xl px-6 py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-14 flex flex-wrap items-end justify-between gap-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-4 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground",
					children: "Learning Materials"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-4xl font-semibold sm:text-6xl",
					children: [
						"Jelajahi ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-holo",
							children: "masa praaksara"
						}),
						"."
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#",
				className: "rounded-full glass px-5 py-2 text-sm transition hover:bg-white/10",
				children: "Browse library →"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
			children: materials.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "learn-card group relative overflow-hidden rounded-3xl glass transition-all duration-700 hover:-translate-y-1 hover:shadow-holo",
				style: {
					opacity: visible ? 1 : 0,
					transform: visible ? "translateY(0)" : "translateY(40px)",
					transitionDelay: visible ? `${i * 80}ms` : "0ms"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `relative h-40 overflow-hidden bg-gradient-to-br ${m.accent}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-lines opacity-40" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-0 flex items-center justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "animate-float glass-strong flex h-16 w-16 items-center justify-center rounded-2xl",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(m.icon, { className: "h-7 w-7 text-holo" })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute left-4 top-4 rounded-full bg-black/40 px-2.5 py-1 text-[10px] uppercase tracking-widest text-white/80 backdrop-blur",
							children: m.tag
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg font-semibold",
							children: m.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 text-xs text-muted-foreground",
							children: m.meta
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex items-center justify-between text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: "Free preview"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-holo transition group-hover:translate-x-1",
								children: "Open →"
							})]
						})
					]
				})]
			}, m.title))
		})]
	});
}
function Model() {
	const group = (0, import_react.useRef)(null);
	const { scene, animations } = useGLTF("/models/meganthropus.glb");
	console.log("Animations:", animations);
	console.log("Jumlah animasi:", animations.length);
	const clone = (0, import_react.useMemo)(() => SkeletonUtils.clone(scene), [scene]);
	const { actions } = useAnimations(animations, clone);
	(0, import_react.useEffect)(() => {
		console.log("Animations:", animations);
		console.log("Count:", animations.length);
		console.log("Actions:", actions);
		Object.values(actions).forEach((action) => {
			action?.reset().fadeIn(.5).play();
		});
		return () => {
			Object.values(actions).forEach((action) => {
				action?.stop();
			});
		};
	}, [actions, animations]);
	useFrame(() => {
		if (!group.current) return;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", {
		ref: group,
		position: [
			0,
			-1.05,
			0
		],
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("primitive", { object: clone })
	});
}
function ViewerCanvas() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Canvas, {
		camera: {
			position: [
				0,
				1.3,
				4.5
			],
			fov: 34
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ambientLight", { intensity: 1 }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
				position: [
					5,
					8,
					5
				],
				intensity: 2
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
				position: [
					-5,
					4,
					-3
				],
				intensity: .8
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Suspense, {
				fallback: null,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Model, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Environment, { preset: "studio" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactShadows, {
						position: [
							0,
							-1.05,
							0
						],
						blur: 2,
						opacity: .5,
						scale: 6
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrbitControls, {
						enablePan: false,
						minPolarAngle: Math.PI / 2,
						maxPolarAngle: Math.PI / 2,
						minDistance: 3,
						maxDistance: 5
					})
				]
			})
		]
	});
}
function MeganthropusViewer() {
	const [mounted, setMounted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setMounted(true);
	}, []);
	if (!mounted) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full w-full rounded-3xl bg-white/5 animate-pulse" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative h-full w-full",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ViewerCanvas, {})
	});
}
function ARShowcase() {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.to(".ar-orb", {
				rotate: 360,
				duration: 40,
				ease: "none",
				repeat: -1
			});
			gsapWithCSS.from(".ar-anim", {
				y: 60,
				opacity: 0,
				stagger: .12,
				duration: 1,
				ease: "power3.out",
				scrollTrigger: {
					trigger: ref.current,
					start: "top 70%"
				}
			});
		}, ref);
		return () => ctx.revert();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "ar",
		ref,
		className: "relative mx-auto max-w-7xl px-6 py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass-strong relative overflow-hidden rounded-[2.5rem] p-8 sm:p-14",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 grid-lines opacity-30" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative grid gap-12 lg:grid-cols-2 lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ar-anim mb-4 inline-flex items-center gap-2 rounded-full bg-holo/10 px-3 py-1 text-xs text-holo ring-1 ring-holo/40",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scan, { className: "h-3 w-3" }), " WebAR Ready"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "ar-anim font-display text-4xl font-semibold sm:text-6xl",
						children: [
							"Arahkan.",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-holo",
								children: "jelajahi."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Belajar."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "ar-anim mt-6 max-w-md text-muted-foreground",
						children: "Tanpa instalasi. Tanpa unduhan. Cukup pindai kode, lalu model 3D, diorama, dan materi sejarah muncul dalam skala sebenarnya."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "ar-anim mt-8 space-y-3 text-sm",
						children: [
							{
								icon: Camera,
								t: "Menggunakan kamera perangkat untuk pelacakan secara langsung"
							},
							{
								icon: Smartphone,
								t: "Berjalan di Safari (iOS) dan Browser Favoritmu (Android)"
							},
							{
								icon: Scan,
								t: "Objek virtual tampak lebih nyata dengan oklusi, pencahayaan, dan posisi yang tetap stabil."
							}
						].map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex h-8 w-8 items-center justify-center rounded-xl glass",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(r.icon, { className: "h-4 w-4 text-holo" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: r.t
							})]
						}, r.t))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ar-anim mt-10 flex gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/materi",
							className: "rounded-full bg-holo px-6 py-3 text-sm font-semibold text-primary-foreground shadow-holo transition hover:scale-[1.02] hover:opacity-90",
							children: "Launch AR"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "rounded-full glass px-6 py-3 text-sm transition hover:bg-white/10",
							children: "Watch demo"
						})]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ar-anim relative mx-auto aspect-square w-full max-w-md",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ar-orb absolute inset-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 rounded-full border border-white/10" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-6 rounded-full border border-white/10" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-12 rounded-full border border-white/10" }),
							[
								0,
								60,
								120,
								180,
								240,
								300
							].map((deg) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-holo shadow-holo",
								style: { transform: `rotate(${deg}deg) translateY(-45%)` }
							}, deg))
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 flex items-center justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass-strong relative flex h-48 w-48 items-center justify-center rounded-3xl animate-float",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-0 rounded-3xl opacity-60",
								style: { background: "conic-gradient(from 0deg, transparent, oklch(0.75 0.2 210 / 0.4), transparent 40%)" }
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "glass-strong relative flex h-[420px] w-[420px] items-center justify-center rounded-3xl overflow-hidden",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MeganthropusViewer, {})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-2 font-display text-2xl font-semibold text-holo",
										children: "Meganthropus Paleojavanicus"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-1 text-[10px] text-muted-foreground",
										children: "Manusia Raksasa dari Jawa"
									})
								]
							})]
						})
					})]
				})]
			})]
		})
	});
}
var questions = [
	{
		q: "Periodisasi Geologi Paling tua adalah?",
		options: [
			"Arkaekum",
			"Paleozoikum",
			"Mesozoikum",
			"Neozoikum"
		],
		correct: 0
	},
	{
		q: "Pada masa Mesozoikum, bagaimana kehidupan manusia praaksara",
		options: [
			"Bercocok Tanam",
			"Berburu dan meramu",
			"Berburu dan bercocok tanam",
			"Meramu dan bercocok tanam"
		],
		correct: 1
	},
	{
		q: "Siapa Penemu kerangka manusia purba Pithecanthropus?",
		options: [
			"G.H.R. von Koenigswald",
			"B.D. van Rietschoten",
			"Eugene Dubois",
			"von Koenigswald"
		],
		correct: 2
	}
];
function Quiz() {
	const [index, setIndex] = (0, import_react.useState)(0);
	const [selected, setSelected] = (0, import_react.useState)(null);
	const [score, setScore] = (0, import_react.useState)(0);
	const [done, setDone] = (0, import_react.useState)(false);
	const current = questions[index];
	function choose(i) {
		if (selected !== null) return;
		setSelected(i);
		if (i === current.correct) setScore((s) => s + 1);
		setTimeout(() => {
			if (index + 1 >= questions.length) setDone(true);
			else {
				setIndex(index + 1);
				setSelected(null);
			}
		}, 900);
	}
	function reset() {
		setIndex(0);
		setSelected(null);
		setScore(0);
		setDone(false);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "quiz",
		className: "relative mx-auto max-w-4xl px-6 py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-10 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-4 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground",
				children: "Test yourself"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "font-display text-4xl font-semibold sm:text-6xl",
				children: [
					"Prove you were ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-holo",
						children: "there"
					}),
					"."
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "glass-strong overflow-hidden rounded-3xl p-8 sm:p-10",
			children: !done ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-6 flex items-center justify-between text-xs text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-mono",
						children: [
							"Question ",
							index + 1,
							" / ",
							questions.length
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-mono",
						children: ["Score ", score]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-2 h-1 w-full overflow-hidden rounded-full bg-white/5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-full bg-holo transition-all duration-500",
						style: { width: `${(index + 1) / questions.length * 100}%` }
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-8 font-display text-2xl font-semibold sm:text-3xl",
					children: current.q
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-3 sm:grid-cols-2",
					children: current.options.map((opt, i) => {
						const isCorrect = selected !== null && i === current.correct;
						const isWrong = selected === i && i !== current.correct;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => choose(i),
							disabled: selected !== null,
							className: `group relative flex items-center justify-between rounded-2xl glass px-5 py-4 text-left text-sm transition hover:-translate-y-0.5 hover:bg-white/10 disabled:cursor-not-allowed ${isCorrect ? "ring-2 ring-holo bg-holo/10" : isWrong ? "ring-2 ring-destructive bg-destructive/10" : ""}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: opt }),
								isCorrect && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4 text-holo" }),
								isWrong && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4 text-destructive" })
							]
						}, opt);
					})
				})
			] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "py-8 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-holo/10 ring-1 ring-holo/40",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-display text-3xl font-bold text-holo",
							children: [
								score,
								"/",
								questions.length
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-6 font-display text-3xl font-semibold",
						children: score === questions.length ? "Curator level." : score >= questions.length / 2 ? "Nicely done." : "Back to the exhibit!"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: "Share your score, or dive back into the timeline."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: reset,
						className: "mt-6 inline-flex items-center gap-2 rounded-full bg-holo px-6 py-3 text-sm font-semibold text-primary-foreground shadow-holo",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "h-4 w-4" }), " Try again"]
					})
				]
			})
		})]
	});
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var askHistoAI = createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("bf3044906b458a1018dcfed1b9cfd31bcf6e07ed7c019bdc057b2abb9f369330"));
var seed = [{
	role: "ai",
	text: "Selamat datang. Aku HistoAI, Pemandu kamu. Tanyakan apa saja kepadaku tentang Kehidupan Praaksara Materi Kelas 10."
}];
var prompts = [
	"Jelaskan Periodisasi Bumi untuk siswa kelas 10",
	"Bandingkan Zaman Berburu dan Meramu dengan Zaman Bercocok Tanam",
	"Tunjukkan perbedaan Meganthropus, Pithecanthropus, dan Homo"
];
function AIGuide() {
	const [messages, setMessages] = (0, import_react.useState)(seed);
	const [input, setInput] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	async function send(text) {
		const t = text.trim();
		if (!t || loading) return;
		setInput("");
		const priorHistory = messages.map((m) => ({
			role: m.role === "user" ? "user" : "assistant",
			content: m.text
		}));
		setMessages((m) => [...m, {
			role: "user",
			text: t
		}]);
		setLoading(true);
		try {
			const { text: reply } = await askHistoAI({ data: {
				message: t,
				history: priorHistory
			} });
			setMessages((m) => [...m, {
				role: "ai",
				text: reply
			}]);
		} catch (err) {
			console.error(err);
			setMessages((m) => [...m, {
				role: "ai",
				text: "Sorry, I'm having trouble responding right now. Try again in a moment."
			}]);
		} finally {
			setLoading(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "ai",
		className: "relative mx-auto max-w-6xl px-6 py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-12 lg:grid-cols-2 lg:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-4 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3 text-holo" }), " AI Guide"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-4xl font-semibold sm:text-6xl",
					children: [
						"Meet ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-holo",
							children: "HistoAI"
						}),
						".",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Pemandu AI kamu."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-md text-muted-foreground",
					children: "HistoAI Menarasikan, memberikan kuis, dan mengartikan setiap materi dengan gaya penyampaian yang menyesuaikan usia, rasa ingin tahu, dan kecepatan belajarmu. Ia tidak pernah lelah menjawab pertanyaan, \"Mengapa?\" \"."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 flex flex-wrap gap-2",
					children: prompts.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => send(p),
						disabled: loading,
						className: "rounded-full glass px-4 py-2 text-xs text-muted-foreground transition hover:bg-white/10 hover:text-foreground disabled:opacity-50",
						children: p
					}, p))
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass-strong flex h-[520px] flex-col overflow-hidden rounded-3xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 border-b border-white/10 px-5 py-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex h-9 w-9 items-center justify-center rounded-full bg-holo",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4 text-primary-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -bottom-0 -right-0 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-background" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm font-semibold",
							children: "HistoAI"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] text-muted-foreground",
							children: "Pemandu AI · online"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1 space-y-3 overflow-y-auto px-5 py-4",
						children: [messages.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `flex ${m.role === "user" ? "justify-end" : "justify-start"}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `max-w-[80%] whitespace-pre-wrap rounded-2xl px-4 py-2.5 text-sm ${m.role === "user" ? "bg-holo text-primary-foreground" : "glass text-foreground"}`,
								children: m.text
							})
						}, i)), loading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex justify-start",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "glass flex items-center gap-2 rounded-2xl px-4 py-2.5 text-sm text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-3.5 w-3.5 animate-spin" }), "Berpikir…"]
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: (e) => {
							e.preventDefault();
							send(input);
						},
						className: "flex items-center gap-2 border-t border-white/10 p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: input,
							onChange: (e) => setInput(e.target.value),
							placeholder: "Ask HistoAI anything…",
							disabled: loading,
							className: "flex-1 rounded-full bg-white/5 px-4 py-2.5 text-sm outline-none placeholder:text-muted-foreground focus:bg-white/10 disabled:opacity-50"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							disabled: loading,
							className: "flex h-10 w-10 items-center justify-center rounded-full bg-holo text-primary-foreground shadow-holo transition hover:scale-105 disabled:opacity-50",
							"aria-label": "Send",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" })
						})]
					})
				]
			})]
		})
	});
}
function Index() {
	useLenis();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative min-h-screen overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuroraBackground, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Particles, { count: 36 }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Experience, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timeline, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Learn, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ARShowcase, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quiz, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AIGuide, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Index as component };
