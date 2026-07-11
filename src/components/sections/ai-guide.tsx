import { Send, Sparkles, Loader2 } from "lucide-react";
import { useState } from "react";

import { askHistoAI } from "../../lib/histo-ai";

type Message = { role: "ai" | "user"; text: string };

const seed: Message[] = [
  { role: "ai", text: "Welcome. I'm HistoAI, your guide. Ask about any era, artifact, or figure." },
];

const prompts = [
  "Explain the Pyramids like I'm 10",
  "Compare Rome and Han dynasty",
  "Show me Renaissance inventions",
];

export function AIGuide() {
  const [messages, setMessages] = useState<Message[]>(seed);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function send(text: string) {
    const t = text.trim();
    if (!t || loading) return;

    setInput("");
    const priorHistory = messages.map((m) => ({
      role: (m.role === "user" ? "user" : "assistant") as "user" | "assistant",
      content: m.text,
    }));
    setMessages((m) => [...m, { role: "user", text: t }]);
    setLoading(true);

    try {
      const { text: reply } = await askHistoAI({
        data: { message: t, history: priorHistory },
      });
      setMessages((m) => [...m, { role: "ai", text: reply }]);
    } catch (err) {
      console.error(err);
      setMessages((m) => [
        ...m,
        { role: "ai", text: "Sorry, I'm having trouble responding right now. Try again in a moment." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="ai" className="relative mx-auto max-w-6xl px-6 py-32">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground">
            <Sparkles className="h-3 w-3 text-holo" /> AI Guide
          </div>
          <h2 className="font-display text-4xl font-semibold sm:text-6xl">
            Meet <span className="text-holo">HistoAI</span>.
            <br />Your museum concierge.
          </h2>
          <p className="mt-6 max-w-md text-muted-foreground">
            HistoAI narrates, quizzes and translates every exhibit — adapting
            tone to your age, curiosity and pace. She never gets tired of "why?".
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {prompts.map((p) => (
              <button
                key={p}
                onClick={() => send(p)}
                disabled={loading}
                className="rounded-full glass px-4 py-2 text-xs text-muted-foreground transition hover:bg-white/10 hover:text-foreground disabled:opacity-50"
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        <div className="glass-strong flex h-[520px] flex-col overflow-hidden rounded-3xl">
          <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-holo">
              <Sparkles className="h-4 w-4 text-primary-foreground" />
              <span className="absolute -bottom-0 -right-0 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-background" />
            </div>
            <div>
              <div className="text-sm font-semibold">HistoAI</div>
              <div className="text-[10px] text-muted-foreground">
                AI Museum Guide · online
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto px-5 py-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] whitespace-pre-wrap rounded-2xl px-4 py-2.5 text-sm ${
                    m.role === "user"
                      ? "bg-holo text-primary-foreground"
                      : "glass text-foreground"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="glass flex items-center gap-2 rounded-2xl px-4 py-2.5 text-sm text-muted-foreground">
                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                  Thinking…
                </div>
              </div>
            )}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-center gap-2 border-t border-white/10 p-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask HistoAI anything…"
              disabled={loading}
              className="flex-1 rounded-full bg-white/5 px-4 py-2.5 text-sm outline-none placeholder:text-muted-foreground focus:bg-white/10 disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={loading}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-holo text-primary-foreground shadow-holo transition hover:scale-105 disabled:opacity-50"
              aria-label="Send"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
