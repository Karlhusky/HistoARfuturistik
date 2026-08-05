export function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-40" />
      <div
        className="absolute -top-1/3 -left-1/4 h-[80vh] w-[80vh] rounded-full blur-3xl animate-aurora"
        style={{
          background:
            "radial-gradient(circle, oklch(0.6 0.22 220 / 0.6), transparent 60%)",
        }}
      />
      <div
        className="absolute top-1/4 -right-1/4 h-[70vh] w-[70vh] rounded-full blur-3xl animate-aurora"
        style={{
          background:
            "radial-gradient(circle, oklch(0.55 0.24 280 / 0.5), transparent 60%)",
          animationDelay: "-8s",
        }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[60vh] w-[60vh] rounded-full blur-3xl animate-aurora"
        style={{
          background:
            "radial-gradient(circle, oklch(0.65 0.22 190 / 0.45), transparent 60%)",
          animationDelay: "-14s",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_20%,var(--color-background)_90%)]" />
    </div>
  );
}
