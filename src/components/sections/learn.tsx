import { Globe, Footprints, Skull } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const materials = [
  // Periodisasi Geologi
  {
    icon: Globe,
    tag: "Periodisasi Geologi",
    title: "Arkaekum",
    meta: "±2.500 juta tahun lalu · Awal mula bumi",
    accent: "from-cyan-400/30 to-blue-500/10",
  },
  {
    icon: Globe,
    tag: "Periodisasi Geologi",
    title: "Paleozoikum",
    meta: "±340 juta tahun · Zaman kehidupan tertua",
    accent: "from-blue-400/30 to-indigo-500/10",
  },
  {
    icon: Globe,
    tag: "Periodisasi Geologi",
    title: "Mesozoikum",
    meta: "±140 juta tahun · Zaman reptil raksasa",
    accent: "from-teal-400/30 to-cyan-500/10",
  },
  {
    icon: Globe,
    tag: "Periodisasi Geologi",
    title: "Neozoikum",
    meta: "±60 juta tahun · Zaman kehidupan baru",
    accent: "from-sky-400/30 to-blue-500/10",
  },
  // Kehidupan Manusia Praaksara
  {
    icon: Footprints,
    tag: "Kehidupan Praaksara",
    title: "Masa Berburu & Meramu Tingkat Sederhana",
    meta: "Food gathering · Hidup nomaden",
    accent: "from-indigo-400/30 to-purple-500/10",
  },
  {
    icon: Footprints,
    tag: "Kehidupan Praaksara",
    title: "Masa Berburu & Meramu Tingkat Lanjut",
    meta: "Semi-nomaden · Mulai menetap sementara",
    accent: "from-cyan-400/30 to-teal-500/10",
  },
  {
    icon: Footprints,
    tag: "Kehidupan Praaksara",
    title: "Masa Bercocok Tanam",
    meta: "Food producing · Hidup menetap",
    accent: "from-blue-400/30 to-cyan-500/10",
  },
  {
    icon: Footprints,
    tag: "Kehidupan Praaksara",
    title: "Masa Perundagian",
    meta: "Pertukangan · Kemahiran logam",
    accent: "from-teal-400/30 to-indigo-500/10",
  },
  // Manusia Purba Indonesia
  {
    icon: Skull,
    tag: "Manusia Purba",
    title: "Meganthropus Paleojavanicus",
    meta: "Sangiran · Manusia purba tertua di Indonesia",
    accent: "from-purple-400/30 to-indigo-500/10",
  },
  {
    icon: Skull,
    tag: "Manusia Purba",
    title: "Pithecanthropus Erectus",
    meta: "Trinil · Manusia kera berjalan tegak",
    accent: "from-indigo-400/30 to-blue-500/10",
  },
  {
    icon: Skull,
    tag: "Manusia Purba",
    title: "Homo Soloensis & Wajakensis",
    meta: "Ngandong & Wajak · Bentuk paling maju",
    accent: "from-cyan-400/30 to-purple-500/10",
  },
];

export function Learn() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Kalau section sudah kelihatan di viewport saat mount
    // (misalnya deep-link ke #learn), langsung tampilkan tanpa
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
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="learn"
      ref={ref}
      className="relative mx-auto max-w-7xl px-6 py-32"
    >
      <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground">
            Learning Materials
          </div>
          <h2 className="font-display text-4xl font-semibold sm:text-6xl">
            Jelajahi <span className="text-holo">masa praaksara</span>.
          </h2>
        </div>
        <a
          href="#"
          className="rounded-full glass px-5 py-2 text-sm transition hover:bg-white/10"
        >
          Browse library →
        </a>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {materials.map((m, i) => (
          <article
            key={m.title}
            className="learn-card group relative overflow-hidden rounded-3xl glass transition-all duration-700 hover:-translate-y-1 hover:shadow-holo"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(40px)",
              transitionDelay: visible ? `${i * 80}ms` : "0ms",
            }}
          >
            <div
              className={`relative h-40 overflow-hidden bg-gradient-to-br ${m.accent}`}
            >
              <div className="absolute inset-0 grid-lines opacity-40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="animate-float glass-strong flex h-16 w-16 items-center justify-center rounded-2xl">
                  <m.icon className="h-7 w-7 text-holo" />
                </div>
              </div>
              <div className="absolute left-4 top-4 rounded-full bg-black/40 px-2.5 py-1 text-[10px] uppercase tracking-widest text-white/80 backdrop-blur">
                {m.tag}
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-display text-lg font-semibold">{m.title}</h3>
              <div className="mt-1 text-xs text-muted-foreground">{m.meta}</div>
              <div className="mt-4 flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Free preview</span>
                <span className="text-holo transition group-hover:translate-x-1">
                  Open →
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
