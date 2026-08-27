// Port dari Chatbot class (assets/js/chatbot.js) jadi komponen React.

import { useEffect, useRef, useState } from "react";
import { renderMarkdownLite } from "@/lib/markdown-lite";
import type { ChatMessage } from "@/lib/histoar-types";
import { Send, Sparkles } from "lucide-react";

const SUGGESTIONS = ["Jelasin lebih simpel", "Kasih contoh lain", "Kenapa jawabanku salah?"];

export function Chatbot({
  materiId,
  materiJudul,
  score,
  total,
  onFirstInteraction,
}: {
  materiId: string;
  materiJudul: string;
  score: number;
  total: number;
  onFirstInteraction: () => void;
}) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const logRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    const pembuka =
      score === total
        ? `Mantap, nilai kamu sempurna (${score}/${total}) di materi "${materiJudul}"! Ada yang mau didiskusikan lebih lanjut?`
        : `Kamu dapat skor ${score}/${total} di materi "${materiJudul}". Mau bahas soal yang masih kurang pas, atau nanya hal lain soal materi ini?`;
    setMessages([{ role: "bot", text: pembuka }]);
  }, [materiJudul, score, total]);

  useEffect(() => {
    if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight;
  }, [messages]);

  async function handleSend(overrideText?: string) {
    const text = (overrideText ?? input).trim();
    if (!text || sending) return;

    setMessages((m) => [...m, { role: "user", text }]);
    setInput("");

    if (!hasInteracted) {
      setHasInteracted(true);
      onFirstInteraction();
    }

    setSending(true);
    setMessages((m) => [...m, { role: "bot", text: "..." }]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ materi_id: materiId, pertanyaan: text }),
      });
      const json = await res.json();

      const replyText = !res.ok
        ? json.error?.message || json.error || "Terjadi kesalahan."
        : json.reply;

      setMessages((m) => {
        const copy = [...m];
        copy[copy.length - 1] = { role: "bot", text: replyText };
        return copy;
      });
    } catch (err) {
      console.error(err);
      setMessages((m) => {
        const copy = [...m];
        copy[copy.length - 1] = { role: "bot", text: "Tidak dapat menghubungi server." };
        return copy;
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="mt-6 flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-[0_20px_60px_-30px_oklch(0_0_0/0.25)]">
      <div className="flex items-center gap-3 border-b border-border px-5 py-4">
        <span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-primary/40">
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full border border-background bg-success" />
        </span>
        <div>
          <div className="font-display text-sm font-medium">HistoAI</div>
          <div className="catalog-label">Pemandu Belajar · Online</div>
        </div>
      </div>

      <div ref={logRef} className="flex max-h-80 flex-col gap-2.5 overflow-y-auto px-5 py-4">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
              m.role === "user"
                ? "self-end bg-primary text-primary-foreground"
                : "self-start border border-border bg-background/40 text-foreground"
            }`}
          >
            {renderMarkdownLite(m.text)}
          </div>
        ))}
      </div>

      {!hasInteracted && (
        <div className="flex flex-wrap gap-2 px-5 pb-3">
          {SUGGESTIONS.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => handleSend(s)}
              className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground transition hover:border-primary/50 hover:text-foreground"
            >
              {s}
            </button>
          ))}
        </div>
      )}

      <div className="flex items-center gap-2 border-t border-border px-4 py-3">
        <input
          type="text"
          value={input}
          disabled={sending}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Tanya HistoAI soal materi ini..."
          className="flex-1 rounded-full border border-border bg-background/40 px-4 py-2 text-sm outline-none placeholder:text-muted-foreground focus:border-primary/50"
        />
        <button
          type="button"
          onClick={() => handleSend()}
          disabled={sending}
          aria-label="Kirim"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition hover:bg-primary/90 disabled:opacity-50"
        >
          <Send className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}
