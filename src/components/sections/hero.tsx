import { Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-anim", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.12,
      });
      gsap.to(".hero-parallax", {
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(".hero-fade", {
        opacity: 0,
        y: -60,
        ease: "none",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-32"
    >
      <div className="hero-parallax pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[80vmin] w-[80vmin] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
        <div className="absolute left-1/2 top-1/2 h-[60vmin] w-[60vmin] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
        <div className="absolute left-1/2 top-1/2 h-[40vmin] w-[40vmin] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
      </div>

      <div className="hero-fade relative z-10 mx-auto max-w-5xl text-center">
        <div className="hero-anim mx-auto mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs">
          <span className="h-1.5 w-1.5 rounded-full bg-holo shadow-holo" />
          <span className="text-muted-foreground">
            WebAR · Now streaming from the Future Museum
          </span>
        </div>
        <h1 className="hero-anim font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl md:text-8xl">
          History,
          <br />
          rendered in <span className="text-holo">light</span>.
        </h1>
        <p className="hero-anim mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
          HistoAR is an immersive learning platform that projects the past into
          your room. Walk through civilizations, hold artifacts, and let an AI
          guide narrate the story — right from your browser.
        </p>
        <div className="hero-anim mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/materi"
            className="group relative overflow-hidden rounded-full bg-holo px-6 py-3 text-sm font-semibold text-primary-foreground shadow-holo transition hover:scale-[1.02]"
          >
            <span className="relative z-10">Enter the exhibit</span>
            <span className="shimmer absolute inset-0" />
          </Link>
          <a
            href="#experience"
            className="rounded-full glass px-6 py-3 text-sm font-medium transition hover:bg-white/10"
          >
            Explore the timeline →
          </a>
        </div>

        <div className="hero-anim mt-16 grid grid-cols-3 gap-4 sm:gap-8">
          {[
            { k: "12k+", v: "Learners" },
            { k: "48", v: "AR Exhibits" },
            { k: "4.9★", v: "Rated" },
          ].map((s) => (
            <div key={s.v} className="glass rounded-2xl px-4 py-4">
              <div className="font-display text-2xl font-semibold text-holo sm:text-3xl">
                {s.k}
              </div>
              <div className="mt-1 text-xs text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
