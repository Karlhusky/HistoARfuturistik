import { i as __toESM } from "./_runtime.mjs";
import { n as require_react } from "./_libs/@radix-ui/react-compose-refs+[...].mjs";
import { h as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { l as require_jsx_runtime } from "./_libs/@react-three/drei+[...].mjs";
import { i as markMateriComplete } from "./_ssr/progress-DstGS8KL.mjs";
import { o as Send, r as Sparkles } from "./_libs/lucide-react.mjs";
import { n as materiList, t as Route } from "./_id-Cxl2AXDK.mjs";
import { n as Footer, r as Nav, t as AuroraBackground } from "./_ssr/footer-sutNg0jG.mjs";
import { t as CoreSample } from "./_ssr/CoreSample-D04HdX_Q.mjs";
import { t as Slot } from "./_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "./_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "./_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_id-o1ULbuJL.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
function QuizPanel({ questions, onFinish }) {
	const [index, setIndex] = (0, import_react.useState)(0);
	const [score, setScore] = (0, import_react.useState)(0);
	const [selected, setSelected] = (0, import_react.useState)(null);
	const q = questions[index];
	const answered = selected !== null;
	const isLast = index === questions.length - 1;
	function selectAnswer(idx) {
		if (answered) return;
		setSelected(idx);
		if (idx === q.jawaban) setScore((s) => s + 1);
	}
	function next() {
		if (!answered) return;
		if (!isLast) {
			setIndex((i) => i + 1);
			setSelected(null);
		} else onFinish(selected === q.jawaban ? score : score, questions.length);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "glass mx-auto w-full max-w-2xl rounded-2xl p-6 sm:p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "font-mono text-xs text-muted-foreground",
				children: [
					"Soal ",
					index + 1,
					" / ",
					questions.length
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-3 font-display text-xl font-semibold leading-snug",
				children: q.pertanyaan
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 flex flex-col gap-2.5",
				children: q.opsi.map((opsiText, idx) => {
					const isCorrect = idx === q.jawaban;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						disabled: answered,
						onClick: () => selectAnswer(idx),
						className: cn("rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-left text-sm transition-all", !answered && "hover:border-primary/50 hover:bg-white/[0.06]", answered && isCorrect && "border-emerald-400/60 bg-emerald-400/10 text-emerald-300", answered && idx === selected && !isCorrect && "border-destructive/60 bg-destructive/10 text-destructive"),
						children: opsiText
					}, idx);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 flex justify-end",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: next,
					disabled: !answered,
					className: "bg-holo text-primary-foreground shadow-holo hover:opacity-90",
					children: isLast ? "Lihat Hasil" : "Lanjut"
				})
			})
		]
	});
}
function tokenize(raw) {
	const tokens = [];
	const pattern = /(\*\*([^*]+)\*\*)|(__([^_]+)__)|(\*([^*]+)\*)|(_([^_]+)_)|(\n)/g;
	let lastIndex = 0;
	let match;
	while ((match = pattern.exec(raw)) !== null) {
		if (match.index > lastIndex) tokens.push({
			type: "text",
			value: raw.slice(lastIndex, match.index)
		});
		if (match[1]) tokens.push({
			type: "bold",
			value: match[2]
		});
		else if (match[3]) tokens.push({
			type: "bold",
			value: match[4]
		});
		else if (match[5]) tokens.push({
			type: "italic",
			value: match[6]
		});
		else if (match[7]) tokens.push({
			type: "italic",
			value: match[8]
		});
		else if (match[9]) tokens.push({ type: "br" });
		lastIndex = pattern.lastIndex;
	}
	if (lastIndex < raw.length) tokens.push({
		type: "text",
		value: raw.slice(lastIndex)
	});
	return tokens;
}
function renderMarkdownLite(text) {
	return tokenize(text).map((t, i) => {
		switch (t.type) {
			case "bold": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: t.value }, i);
			case "italic": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: t.value }, i);
			case "br": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}, i);
			default: return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.value }, i);
		}
	});
}
var SUGGESTIONS = [
	"Jelasin lebih simpel",
	"Kasih contoh lain",
	"Kenapa jawabanku salah?"
];
function Chatbot({ materiId, materiJudul, score, total, onFirstInteraction }) {
	const [messages, setMessages] = (0, import_react.useState)([]);
	const [input, setInput] = (0, import_react.useState)("");
	const [sending, setSending] = (0, import_react.useState)(false);
	const [hasInteracted, setHasInteracted] = (0, import_react.useState)(false);
	const logRef = (0, import_react.useRef)(null);
	const initialized = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		if (initialized.current) return;
		initialized.current = true;
		const pembuka = score === total ? `Mantap, nilai kamu sempurna (${score}/${total}) di materi "${materiJudul}"! Ada yang mau didiskusikan lebih lanjut?` : `Kamu dapat skor ${score}/${total} di materi "${materiJudul}". Mau bahas soal yang masih kurang pas, atau nanya hal lain soal materi ini?`;
		setMessages([{
			role: "bot",
			text: pembuka
		}]);
	}, [
		materiJudul,
		score,
		total
	]);
	(0, import_react.useEffect)(() => {
		if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight;
	}, [messages]);
	async function handleSend(overrideText) {
		const text = (overrideText ?? input).trim();
		if (!text || sending) return;
		setMessages((m) => [...m, {
			role: "user",
			text
		}]);
		setInput("");
		if (!hasInteracted) {
			setHasInteracted(true);
			onFirstInteraction();
		}
		setSending(true);
		setMessages((m) => [...m, {
			role: "bot",
			text: "..."
		}]);
		try {
			const res = await fetch("/api/chat", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					materi_id: materiId,
					pertanyaan: text
				})
			});
			const json = await res.json();
			const replyText = !res.ok ? json.error?.message || json.error || "Terjadi kesalahan." : json.reply;
			setMessages((m) => {
				const copy = [...m];
				copy[copy.length - 1] = {
					role: "bot",
					text: replyText
				};
				return copy;
			});
		} catch (err) {
			console.error(err);
			setMessages((m) => {
				const copy = [...m];
				copy[copy.length - 1] = {
					role: "bot",
					text: "Tidak dapat menghubungi server."
				};
				return copy;
			});
		} finally {
			setSending(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "glass mt-6 flex flex-col overflow-hidden rounded-2xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3 border-b border-white/10 px-5 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "relative flex h-9 w-9 items-center justify-center rounded-full bg-holo",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4 text-primary-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-background bg-emerald-400" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-display text-sm font-semibold",
					children: "HistoAI"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs text-muted-foreground",
					children: "Pemandu belajar · online"
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: logRef,
				className: "flex max-h-80 flex-col gap-2.5 overflow-y-auto px-5 py-4",
				children: messages.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${m.role === "user" ? "self-end bg-holo text-primary-foreground" : "self-start bg-white/[0.06] text-foreground"}`,
					children: renderMarkdownLite(m.text)
				}, i))
			}),
			!hasInteracted && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2 px-5 pb-3",
				children: SUGGESTIONS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => handleSend(s),
					className: "rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-muted-foreground transition hover:bg-white/[0.08] hover:text-foreground",
					children: s
				}, s))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 border-t border-white/10 px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "text",
					value: input,
					disabled: sending,
					onChange: (e) => setInput(e.target.value),
					onKeyDown: (e) => e.key === "Enter" && handleSend(),
					placeholder: "Tanya HistoAI soal materi ini...",
					className: "flex-1 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm outline-none placeholder:text-muted-foreground focus:border-primary/50"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => handleSend(),
					disabled: sending,
					"aria-label": "Kirim",
					className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-holo text-primary-foreground shadow-holo transition hover:opacity-90 disabled:opacity-50",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" })
				})]
			})
		]
	});
}
function QuizPage() {
	const { materi, questions } = Route.useLoaderData();
	const [result, setResult] = (0, import_react.useState)(null);
	const [unlocked, setUnlocked] = (0, import_react.useState)(false);
	const nextMateri = [...materiList].sort((a, b) => a.urutan - b.urutan).find((m) => m.urutan === materi.urutan + 1);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative min-h-screen overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuroraBackground, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto max-w-3xl px-6 pt-32 pb-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoreSample, { currentMateriId: materi.id })
					}),
					!result && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuizPanel, {
						questions,
						onFinish: (score, total) => setResult({
							score,
							total
						})
					}),
					result && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass mx-auto w-full max-w-2xl rounded-2xl p-6 sm:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground",
								children: "Hasil Quiz"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm text-muted-foreground",
								children: "Skor Kamu"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "font-display text-5xl font-semibold text-holo",
								children: [
									result.score,
									"/",
									result.total
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chatbot, {
								materiId: materi.id,
								materiJudul: materi.judul,
								score: result.score,
								total: result.total,
								onFirstInteraction: () => {
									markMateriComplete(materi.id, result.score);
									setUnlocked(true);
								}
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6",
								children: unlocked ? nextMateri ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/materi/$id",
									params: { id: nextMateri.id },
									className: "inline-block rounded-full bg-holo px-5 py-3 text-sm font-semibold text-primary-foreground shadow-holo transition hover:opacity-90",
									children: [
										"Lanjut ke ",
										nextMateri.judul,
										" →"
									]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/materi",
									className: "inline-block rounded-full bg-holo px-5 py-3 text-sm font-semibold text-primary-foreground shadow-holo transition hover:opacity-90",
									children: "Semua materi selesai — Kembali ke daftar"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-block cursor-not-allowed rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-muted-foreground",
									children: "Lanjut ke Materi Berikutnya →"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-xs text-muted-foreground",
									children: "Chat dulu dengan HistoAI minimal satu kali untuk membuka materi berikutnya."
								})] })
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { QuizPage as component };
