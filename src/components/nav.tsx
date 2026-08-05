import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const links = [
  { href: "/#experience", label: "Experience" },
  { href: "/#timeline", label: "Timeline" },
  { href: "/#learn", label: "Learn" },
  { href: "/#ar", label: "WebAR" },
  { href: "/#quiz", label: "Quiz" },
  { href: "/#ai", label: "AI Guide" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`glass flex w-full max-w-6xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 ${
          scrolled ? "shadow-holo" : ""
        }`}
      >
        <Link to="/" className="flex items-center gap-2 pl-2">
          <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-holo">
            <span className="absolute inset-0 rounded-full animate-pulse-ring" />
            <span className="text-xs font-bold text-primary-foreground">H</span>
          </span>
          <span className="font-display text-sm font-semibold tracking-tight">
            Histo<span className="text-holo">AR</span>
          </span>
        </Link>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3 py-1.5 text-xs font-medium text-muted-foreground transition hover:bg-white/5 hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <Link
          to="/materi"
          className="rounded-full bg-holo px-4 py-1.5 text-xs font-semibold text-primary-foreground shadow-holo transition hover:opacity-90"
        >
          Launch AR
        </Link>
      </nav>
    </header>
  );
}
