import { useEffect, useState } from "react";
import { brand } from "../data/siteContent";

const LINKS = [
  { href: "#house", label: "The House" },
  { href: "#tickets", label: "Tickets" },
  { href: "#gallery", label: "Gallery" },
  { href: "#faq", label: "FAQ" },
  { href: "#visit", label: "Visit" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled ? "bg-void/90 backdrop-blur-md shadow-lg shadow-black/40" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="font-display text-2xl text-ember">
          {brand.shortName}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-heading text-xs uppercase tracking-[0.25em] text-mist transition-colors hover:text-ember"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#tickets"
          className="hidden rounded-sm border border-ember/60 px-5 py-2 font-heading text-xs uppercase tracking-[0.25em] text-bone transition-colors hover:bg-blood/30 md:inline-block"
        >
          Buy Tickets
        </a>

        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          className="text-bone md:hidden"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-charcoal bg-void/95 px-5 pb-5 md:hidden">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 font-heading text-sm uppercase tracking-[0.25em] text-mist"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#tickets"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-sm border border-ember/60 px-4 py-3 text-center font-heading text-xs uppercase tracking-[0.25em] text-bone"
            >
              Buy Tickets
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
