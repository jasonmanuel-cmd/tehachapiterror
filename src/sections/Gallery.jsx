import { motion } from "framer-motion";
import { gallery } from "../data/siteContent";
import { GhostIcon } from "../components/spookySprites";

// Placeholder tiles until real photography is dropped in. Each tile keeps
// its alt text so swapping in <img src=... alt={g.alt} /> later is a
// one-line change per tile.
export default function Gallery() {
  return (
    <section id="gallery" className="relative mx-auto max-w-6xl px-6 py-24">
      <h2 className="text-center font-heading text-3xl uppercase tracking-widest text-bone sm:text-4xl">
        A Glimpse Inside
      </h2>
      <p className="mx-auto mt-3 max-w-md text-center text-sm text-mist">
        Real photos coming soon — this grid is placeholder art until the crew sends over this season's set.
      </p>

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {gallery.map((g, i) => (
          <motion.div
            key={g.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (i % 6) * 0.06 }}
            className="group relative flex aspect-square items-center justify-center overflow-hidden rounded-sm border border-charcoal bg-gradient-to-br from-charcoal to-abyss"
            title={g.alt}
          >
            <GhostIcon className="h-10 w-10 text-mist/25 transition-transform duration-500 group-hover:scale-110" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,90,31,0.15),transparent_60%)]" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
