import { Globe, Footprints, Mountain, Sparkles, Skull } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import materiData from "@/data/materi.json";
import type { MateriData } from "@/lib/histoar-types";

const { materi } = materiData as MateriData;

// Kartu di section ini DULU daftar hand-typed terpisah dari data/materi.json,
// jadi ikut basi tiap materi.json berubah (mis. "Homo Soloensis & Wajakensis"
// yang sudah tidak ada — materi m3-3 aslinya berjudul "Homo Sapiens") dan malah
// memecah m1 jadi 4 kartu semu (Arkaekum dkk. cuma hotspot DI DALAM m1, bukan
// materi sendiri). Turunkan langsung dari materi.json biar selalu sinkron.
function categoryFor(id: string) {
  if (id === "m1") {
    return {
      tag: "Periodisasi Geologi",
      icon: Globe,
      accent: "from-cyan-400/30 to-blue-500/10",
    };
  }
  if (id.startsWith("m2-4")) {
    return {
      tag: "Situs Megalitik",
      icon: Mountain,
      accent: "from-teal-400/30 to-cyan-500/10",
    };
  }
  if (id === "m2-5") {
    return {
      tag: "Sistem Kepercayaan",
      icon: Sparkles,
      accent: "from-purple-400/30 to-fuchsia-500/10",
    };
  }
  if (id.startsWith("m2")) {
    return {
      tag: "Kehidupan Praaksara",
      icon: Footprints,
      accent: "from-indigo-400/30 to-purple-500/10",
    };
  }
  return {
    tag: "Manusia Purba",
    icon: Skull,
    accent: "from-cyan-400/30 to-purple-500/10",
  };
}

const materials = [...materi]
  .sort((a, b) => a.urutan - b.urutan)
  .map((m) => ({
    id: m.id,
    title: m.judul,
    meta: m.ringkasan,
    ...categoryFor(m.id),
  }));

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
      { threshold: 0.1 },
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
        <Link
          to="/materi"
          className="rounded-full glass px-5 py-2 text-sm transition hover:bg-white/10"
        >
          Browse library →
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {materials.map((m, i) => (
          <Link
            key={m.id}
            to="/materi/$id"
            params={{ id: m.id }}
            className="learn-card group relative block overflow-hidden rounded-3xl glass transition-all duration-700 hover:-translate-y-1 hover:shadow-holo"
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
              <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">
                {m.meta}
              </p>
              <div className="mt-4 flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Free preview</span>
                <span className="text-holo transition group-hover:translate-x-1">
                  Open →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
