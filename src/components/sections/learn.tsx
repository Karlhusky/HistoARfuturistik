import { BookOpen, Video, FileText, Headphones } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const materials = [
  {
    icon: BookOpen,
    tag: "Reading",
    title: "The Silk Road, illustrated",
    meta: "12 chapters · 45 min",
    accent: "from-cyan-400/30 to-blue-500/10",
  },
  {
    icon: Video,
    tag: "Film",
    title: "Rome in 8K volumetric",
    meta: "Documentary · 22 min",
    accent: "from-blue-400/30 to-indigo-500/10",
  },
  {
    icon: Headphones,
    tag: "Audio",
    title: "Voices of the Renaissance",
    meta: "Podcast · 6 episodes",
    accent: "from-teal-400/30 to-cyan-500/10",
  },
  {
    icon: FileText,
    tag: "Lesson plan",
    title: "Teaching Ancient Egypt",
    meta: "For grades 6–8",
    accent: "from-sky-400/30 to-blue-500/10",
  },
  {
    icon: Video,
    tag: "Film",
    title: "The Industrial Age",
    meta: "Series · 4 parts",
    accent: "from-indigo-400/30 to-purple-500/10",
  },
  {
    icon: BookOpen,
    tag: "Reading",
    title: "Empires of the Americas",
    meta: "Long-read · 30 min",
    accent: "from-cyan-400/30 to-teal-500/10",
  },
];

export function Learn() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".learn-card", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
      });
    }, ref);
    return () => ctx.revert();
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
            Curated for <span className="text-holo">curious minds</span>.
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
        {materials.map((m) => (
          <article
            key={m.title}
            className="learn-card group relative overflow-hidden rounded-3xl glass transition hover:-translate-y-1 hover:shadow-holo"
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
