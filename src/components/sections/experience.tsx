import { Compass, Layers, Sparkles, Wand2 } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const features = [
  {
    icon: Compass,
    title: "Spatial exhibits",
    desc: "Room-scale WebAR that anchors artifacts to your world using WebXR.",
  },
  {
    icon: Layers,
    title: "Layered lessons",
    desc: "Peel back centuries with parallax storytelling and interactive dioramas.",
  },
  {
    icon: Wand2,
    title: "AI curator",
    desc: "A conversational guide that adapts to your grade level in real time.",
  },
  {
    icon: Sparkles,
    title: "Holographic UI",
    desc: "Designed like a museum from the year 2050 — but it runs in Safari.",
  },
];

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".exp-card", {
        y: 60,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: ref.current, start: "top 70%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={ref}
      className="relative mx-auto max-w-7xl px-6 py-32"
    >
      <div className="mb-16 max-w-2xl">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground">
          <span className="h-1 w-1 rounded-full bg-holo" /> The Experience
        </div>
        <h2 className="font-display text-4xl font-semibold sm:text-6xl">
          A museum without <span className="text-holo">walls</span>.
        </h2>
        <p className="mt-4 text-muted-foreground">
          Every surface becomes a stage. Every classroom becomes an era.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div
            key={f.title}
            className="exp-card group relative overflow-hidden rounded-3xl glass p-6 transition hover:-translate-y-1 hover:shadow-holo"
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
