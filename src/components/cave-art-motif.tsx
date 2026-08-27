/**
 * Motif lukisan gua: siluet garis ala cap tangan & hewan buruan (Leang-Leang,
 * Sulawesi), digambar tangan sebagai SVG, bukan foto stok (gak ada aset foto
 * situs beneran yang boleh dipakai). Warnanya bone-white pudar (bukan
 * oker-oranye) biar tetap masuk disiplin "satu aksen": ini tekstur, bukan
 * pernyataan warna.
 */

function HandStencil({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 90 110" className={className} fill="none" aria-hidden>
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <ellipse cx="45" cy="72" rx="20" ry="26" />
        <ellipse cx="18" cy="30" rx="6" ry="22" transform="rotate(-18 18 30)" />
        <ellipse cx="32" cy="18" rx="6" ry="26" transform="rotate(-7 32 18)" />
        <ellipse cx="48" cy="14" rx="6" ry="27" />
        <ellipse cx="64" cy="18" rx="6" ry="26" transform="rotate(9 64 18)" />
        <ellipse cx="76" cy="32" rx="6" ry="21" transform="rotate(24 76 32)" />
      </g>
    </svg>
  );
}

function HuntedBull({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 110" className={className} fill="none" aria-hidden>
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M45 65 Q90 30 150 45 Q175 52 170 65 Q165 78 140 75 Q95 90 55 82 Q35 78 45 65 Z" />
        <path d="M45 65 Q28 55 18 40" />
        <path d="M18 40 Q10 28 14 16" />
        <path d="M18 40 Q28 32 34 20" />
        <path d="M60 82 L55 104" />
        <path d="M80 85 L78 106" />
        <path d="M130 78 L136 100" />
        <path d="M150 68 L160 88" />
        <path d="M170 65 Q180 62 188 68" />
      </g>
    </svg>
  );
}

function HunterFigure({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 70 100" className={className} fill="none" aria-hidden>
      <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
        <circle cx="35" cy="12" r="6" />
        <path d="M35 18 L30 55" />
        <path d="M30 55 L16 90" />
        <path d="M30 55 L48 88" />
        <path d="M32 28 L58 14" />
        <path d="M58 14 L70 2" />
        <path d="M32 34 L14 40" />
      </g>
    </svg>
  );
}

export function CaveArtMotif() {
  return (
    <div className="absolute inset-0 overflow-hidden text-foreground/[0.14]">
      <HandStencil className="absolute -left-6 top-[8%] h-40 w-40 -rotate-6 sm:h-56 sm:w-56" />
      <HuntedBull className="absolute right-[-4%] top-[38%] h-32 w-64 rotate-2 sm:h-44 sm:w-96" />
      <HunterFigure className="absolute left-[6%] top-[62%] h-28 w-28 rotate-3 sm:h-40 sm:w-40" />
      <HandStencil className="absolute right-[8%] bottom-[4%] h-32 w-32 rotate-12 sm:h-48 sm:w-48" />
    </div>
  );
}
