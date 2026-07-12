import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const events = [
  {
    year: "± 2.500 juta tahun lalu",
    title: "Arkaekum/Arkaezoikum",
    place: "Zaman Tertua",
    desc: "Bumi masih sangat panas dan kulit buminya belum stabil. Belum ada tanda kehidupan.",
  },
  {
    year: "± 340 juta tahun lalu",
    title: "Paleozoikum",
    place: "Zaman Primer",
    desc: "Tanda kehidupan mulai muncul.",
  },
  {
    year: "± 140 juta tahun lalu",
    title: "Mesozoikum",
    place: "Zaman Sekunder",
    desc: "Zaman reptil raksasa atau dinosaurus.",
  },
  {
    year: "± 60 juta tahun lalu kini",
    title: "Neozoikum",
    place: "Zaman Hidup Baru",
    desc: "Terbagi Menjadi 2: Tersier dan Kuartier.",
  },
  {
    year: "± 60 - 2,6 juta tahun lalu kini",
    title: "Tersier",
    place: "Zaman Hidup Baru",
    desc: "Mamalia menyusui dan berkembang pesat.",
  },
  {
    year: "± 3 Juta tahun lalu",
    title: "Kuartier",
    place: "Zaman Hidup Baru",
    desc: "tanda-tanda kehidupan manusia muncul.",
  },
];

export function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".tl-item", {
        opacity: 0,
        x: (i) => (i % 2 === 0 ? -60 : 60),
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: { trigger: ref.current, start: "top 70%" },
      });
      gsap.to(".tl-line-fill", {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 60%",
          end: "bottom 60%",
          scrub: true,
        },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="timeline"
      ref={ref}
      className="relative mx-auto max-w-6xl px-6 py-32"
    >
      <div className="mb-20 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground">
          Interactive Timeline
        </div>
        <h2 className="font-display text-4xl font-semibold sm:text-6xl">
          Scroll through <span className="text-holo">5,000 years</span>.
        </h2>
      </div>

      <div className="relative">
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/10" />
        <div
          className="tl-line-fill absolute left-1/2 top-0 h-full w-px origin-top -translate-x-1/2 bg-holo shadow-holo"
          style={{ transform: "translateX(-50%) scaleY(0)" }}
        />

        <ul className="space-y-16">
          {events.map((e, i) => (
            <li
              key={e.year}
              className={`tl-item relative flex ${
                i % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <div className="absolute left-1/2 top-6 -translate-x-1/2">
                <span className="relative block h-3 w-3 rounded-full bg-holo shadow-holo">
                  <span className="absolute inset-0 rounded-full animate-pulse-ring" />
                </span>
              </div>
              <div className="glass w-[calc(50%-2rem)] rounded-2xl p-6 transition hover:-translate-y-1 hover:shadow-holo">
                <div className="text-xs font-mono text-holo">{e.year}</div>
                <h3 className="mt-1 font-display text-xl font-semibold">
                  {e.title}
                </h3>
                <div className="text-xs text-muted-foreground">{e.place}</div>
                <p className="mt-3 text-sm text-muted-foreground">{e.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
