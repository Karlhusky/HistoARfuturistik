export function Footer() {
  return (
    <footer className="relative mx-auto max-w-7xl px-6 pb-16 pt-8">
      <div className="glass-strong rounded-3xl p-8 sm:p-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-holo">
                <span className="text-xs font-bold text-primary-foreground">H</span>
              </span>
              <span className="font-display text-sm font-semibold">
                Histo<span className="text-holo">AR</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-xs text-muted-foreground">
              Membawa Pembelajaran Sejarah ke Masa Depan. 
              Dibangun untuk web, ditenagai oleh WebXR.
            </p>
          </div>
          {[
            {
              h: "Product",
              l: ["WebAR", "Timeline", "AI Guide"],
            },
            { h: "Company", l: ["About", "Educators", "Press", "Careers"] },
            { h: "Legal", l: ["Privacy", "Terms", "Accessibility"] },
          ].map((c) => (
            <div key={c.h}>
              <div className="text-xs font-semibold uppercase tracking-widest text-holo">
                {c.h}
              </div>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {c.l.map((x) => (
                  <li key={x}>
                    <a href="#" className="transition hover:text-foreground">
                      {x}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} HistoAR. All rights reserved.</span>
          <span className="font-mono">v1.0 · Edisi Pembelajaran Masa Depan</span>
        </div>
      </div>
    </footer>
  );
}
