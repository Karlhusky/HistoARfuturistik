import { useEffect, useState } from "react";

export function Particles({ count = 40 }: { count?: number }) {
  const [items, setItems] = useState<
    Array<{
      id: number;
      left: number;
      size: number;
      delay: number;
      duration: number;
      drift: number;
      opacity: number;
    }>
  >([]);

  useEffect(() => {
    setItems(
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 20,
        duration: 18 + Math.random() * 20,
        drift: (Math.random() - 0.5) * 200,
        opacity: 0.3 + Math.random() * 0.5,
      })),
    );
  }, [count]);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {items.map((p) => (
        <span
          key={p.id}
          className="absolute bottom-0 rounded-full bg-holo"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animation: `particle ${p.duration}s linear ${p.delay}s infinite`,
            // @ts-expect-error css var
            "--x-drift": `${p.drift}px`,
            boxShadow: "0 0 8px currentColor",
            color: "oklch(0.78 0.18 210)",
          }}
        />
      ))}
    </div>
  );
}
