import { Compass, Layers, Sparkles, Wand2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const features = [
  {
    icon: Compass,
    title: "Pameran Interaktif",
    desc: "WebAR berskala ruangan yang menghadirkan model 3D dan diorama ke lingkungan nyata Anda melalui WebXR.",
  },
  {
    icon: Layers,
    title: "Pembelajaran Bertahap",
    desc: "Jelajahi periodisasi bumi, kehidupan manusia praaksara, dan manusia purba Indonesia melalui diorama interaktif.",
  },
  {
    icon: Wand2,
    title: "Pemandu AI",
    desc: "Asisten percakapan yang menyesuaikan penjelasan dengan tingkat pendidikan Anda secara langsung.",
  },
  {
    icon: Sparkles,
    title: "Holographic UI",
    desc: "Dirancang dengan tampilan modern layaknya teknologi masa depan, namun tetap berjalan langsung di Browser",
  },
];

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Kalau section sudah ada di viewport saat mount (misalnya
    // karena deep-link ke #experience), langsung tampilkan tanpa
    // nunggu event scroll yang mungkin tidak pernah terjadi lagi.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.9) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      ref={ref}
      className="relative mx-auto max-w-7xl px-6 py-32"
    >
      <div className="mb-16 max-w-2xl">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground">
          <span className="h-1 w-1 rounded-full bg-holo" /> Experience
        </div>
        <h2 className="font-display text-4xl font-semibold sm:text-6xl">
          Belajar Tanpa <span className="text-holo">Batas</span>.
        </h2>
        <p className="mt-4 text-muted-foreground">
          Setiap permukaan menjadi ruang belajar. Setiap ruang kelas menghadirkan perjalanan ke masa praaksara.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <div
            key={f.title}
            className="exp-card group relative overflow-hidden rounded-3xl glass p-6 transition-all duration-700 hover:-translate-y-1 hover:shadow-holo"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(40px)",
              transitionDelay: visible ? `${i * 100}ms` : "0ms",
            }}
          >
            <div className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-holo/10 ring-1 ring-holo/40">
              <f.icon className="h-5 w-5 text-holo" />
            </div>
            <h3 className="font-display text-lg font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-holo/0 via-transparent to-holo/10 opacity-0 transition group-hover:opacity-100" />
          </div>
        ))}
      </div>
    </section>
  );
}
