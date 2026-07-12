import { Compass, Layers, Sparkles, Wand2 } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// PENTING: plugin harus di-register sekali sebelum dipakai,
// kalau tidak, config `scrollTrigger` di gsap.from() diabaikan
// dan elemen bisa "macet" di state awal (opacity: 0).
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

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

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".exp-card", {
        y: 60,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 70%",
          // kalau section ini sudah kelihatan saat halaman
          // pertama load (misalnya lewat deep-link #learn),
          // langsung mainkan animasinya alih-alih nunggu event
          // scroll yang mungkin tidak pernah terjadi lagi
          once: true,
        },
      });

      // pastikan ScrollTrigger menghitung ulang posisi elemen
      // setelah layout & font selesai render (penting kalau ada
      // scroll-jump ke anchor seperti #learn saat first load)
      requestAnimationFrame(() => ScrollTrigger.refresh());
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
