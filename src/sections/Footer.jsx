import { brand, location } from "../data/siteContent";

export default function Footer() {
  return (
    <footer className="relative border-t border-charcoal px-6 py-10 text-center">
      <p className="font-display text-xl text-ember">{brand.shortName}</p>
      <p className="mt-2 text-xs text-mist/60">
        {location.address} &middot; {location.phone}
      </p>
      <p className="mt-4 text-[11px] uppercase tracking-widest text-mist/40">
        &copy; {new Date().getFullYear()} {brand.name}. All rights reserved.
      </p>
    </footer>
  );
}
