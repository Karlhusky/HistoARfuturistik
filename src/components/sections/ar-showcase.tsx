import { Camera, Scan, Smartphone } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function ARShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".ar-orb", {
        rotate: 360,
        duration: 40,
        ease: "none",
        repeat: -1,
      });
      gsap.from(".ar-anim", {
        y: 60,
        opacity: 0,
        stagger: 0.12,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 70%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="ar"
      ref={ref}
      className="relative mx-auto max-w-7xl px-6 py-32"
    >
      <div className="glass-strong relative overflow-hidden rounded-[2.5rem] p-8 sm:p-14">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-30" />
        <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="ar-anim mb-4 inline-flex items-center gap-2 rounded-full bg-holo/10 px-3 py-1 text-xs text-holo ring-1 ring-holo/40">
              <Scan className="h-3 w-3" /> WebAR Ready
            </div>
            <h2 className="ar-anim font-display text-4xl font-semibold sm:text-6xl">
              Arahkan.{" "}
              <span className="text-holo">jelajahi.</span>
              <br />
              Belajar.
            </h2>
            <p className="ar-anim mt-6 max-w-md text-muted-foreground">
             Tanpa instalasi. Tanpa unduhan. 
              Cukup pindai kode, lalu model 3D, diorama, dan materi sejarah muncul dalam skala sebenarnya.
            </p>

            <ul className="ar-anim mt-8 space-y-3 text-sm">
              {[
                { icon: Camera, t: "Menggunakan kamera perangkat untuk pelacakan secara langsung" },
                { icon: Smartphone, t: "Berjalan di Safari (iOS) dan Browser Favoritmu (Android)" },
                { icon: Scan, t: "Objek virtual tampak lebih nyata dengan oklusi, pencahayaan, dan posisi yang tetap stabil." },
              ].map((r) => (
                <li key={r.t} className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl glass">
                    <r.icon className="h-4 w-4 text-holo" />
                  </span>
                  <span className="text-muted-foreground">{r.t}</span>
                </li>
              ))}
            </ul>

            <div className="ar-anim mt-10 flex gap-3">
              <Link
                to="/materi"
                className="rounded-full bg-holo px-6 py-3 text-sm font-semibold text-primary-foreground shadow-holo transition hover:scale-[1.02]"
              >
                Launch WebAR
              </Link>
              <button className="rounded-full glass px-6 py-3 text-sm transition hover:bg-white/10">
                Watch demo
              </button>
            </div>
          </div>

          <div className="ar-anim relative mx-auto aspect-square w-full max-w-md">
            <div className="ar-orb absolute inset-0">
              <div className="absolute inset-0 rounded-full border border-white/10" />
              <div className="absolute inset-6 rounded-full border border-white/10" />
              <div className="absolute inset-12 rounded-full border border-white/10" />
              {[0, 60, 120, 180, 240, 300].map((deg) => (
                <span
                  key={deg}
                  className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-holo shadow-holo"
                  style={{
                    transform: `rotate(${deg}deg) translateY(-45%)`,
                  }}
                />
              ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="glass-strong relative flex h-48 w-48 items-center justify-center rounded-3xl animate-float">
                <div
                  className="absolute inset-0 rounded-3xl opacity-60"
                  style={{
                    background:
                      "conic-gradient(from 0deg, transparent, oklch(0.75 0.2 210 / 0.4), transparent 40%)",
                  }}
                />
                <div className="relative text-center">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Artifact_0417
                  </div>
                  <div className="mt-2 font-display text-2xl font-semibold text-holo">
                    Periodisasi Geologi
                  </div>
                  <div className="mt-1 text-[10px] text-muted-foreground">
                    340 Juta tahun lalu · Paleozoikum
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
