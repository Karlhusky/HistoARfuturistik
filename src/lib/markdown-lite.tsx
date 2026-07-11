// Port dari renderMarkdownLite() di assets/js/chatbot.js.
// Alih-alih membangun innerHTML string, versi ini mengembalikan React node
// supaya tidak perlu dangerouslySetInnerHTML.

import type { ReactNode } from "react";

type Token =
  | { type: "text"; value: string }
  | { type: "bold"; value: string }
  | { type: "italic"; value: string }
  | { type: "br" };

function tokenize(raw: string): Token[] {
  const tokens: Token[] = [];
  // Urutan: bold (** atau __) dulu, baru italic (* atau _), baru newline.
  const pattern = /(\*\*([^*]+)\*\*)|(__([^_]+)__)|(\*([^*]+)\*)|(_([^_]+)_)|(\n)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(raw)) !== null) {
    if (match.index > lastIndex) {
      tokens.push({ type: "text", value: raw.slice(lastIndex, match.index) });
    }
    if (match[1]) tokens.push({ type: "bold", value: match[2] });
    else if (match[3]) tokens.push({ type: "bold", value: match[4] });
    else if (match[5]) tokens.push({ type: "italic", value: match[6] });
    else if (match[7]) tokens.push({ type: "italic", value: match[8] });
    else if (match[9]) tokens.push({ type: "br" });
    lastIndex = pattern.lastIndex;
  }
  if (lastIndex < raw.length) {
    tokens.push({ type: "text", value: raw.slice(lastIndex) });
  }
  return tokens;
}

export function renderMarkdownLite(text: string): ReactNode[] {
  return tokenize(text).map((t, i) => {
    switch (t.type) {
      case "bold":
        return <strong key={i}>{t.value}</strong>;
      case "italic":
        return <em key={i}>{t.value}</em>;
      case "br":
        return <br key={i} />;
      default:
        return <span key={i}>{t.value}</span>;
    }
  });
}
