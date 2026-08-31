import { motion } from "framer-motion";
import { location, brand } from "../data/siteContent";

export default function LocationContact() {
  return (
    <section id="visit" className="relative mx-auto max-w-4xl px-6 py-24 text-center">
      <h2 className="font-heading text-3xl uppercase tracking-widest text-bone sm:text-4xl">
        Find Us, If You Dare
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mx-auto mt-10 flex aspect-video max-w-2xl items-center justify-center rounded-sm border border-charcoal bg-gradient-to-br from-charcoal to-abyss"
      >
        <div className="text-center">
          <p className="font-heading text-sm uppercase tracking-widest text-mist">Map coming soon</p>
          <p className="mt-1 text-xs text-mist/60">{location.mapNote}</p>
        </div>
      </motion.div>

      <div className="mt-10 grid gap-6 text-sm text-mist sm:grid-cols-3">
        <div>
          <p className="font-heading uppercase tracking-widest text-ember">Address</p>
          <p className="mt-1">{location.address}</p>
        </div>
        <div>
          <p className="font-heading uppercase tracking-widest text-ember">Phone</p>
          <p className="mt-1">{location.phone}</p>
        </div>
        <div>
          <p className="font-heading uppercase tracking-widest text-ember">Email</p>
          <p className="mt-1">{location.email}</p>
        </div>
      </div>

      <div className="mt-10 flex justify-center gap-6">
        {Object.entries(location.social).map(([platform, url]) => (
          <a
            key={platform}
            href={url}
            target="_blank"
            rel="noreferrer"
            className="font-heading text-xs uppercase tracking-[0.25em] text-mist transition-colors hover:text-ember"
          >
            {platform}
          </a>
        ))}
      </div>

      <p className="mt-14 font-body text-xs text-mist/50">
        {brand.name} is a fictional-for-now content placeholder — replace with real hours, address, and
        pricing before this goes live.
      </p>
    </section>
  );
}
