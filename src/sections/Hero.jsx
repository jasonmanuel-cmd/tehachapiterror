import { motion } from "framer-motion";
import { hero, brand } from "../data/siteContent";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-24 text-center">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(138,15,31,0.22),transparent_60%)]" />

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative font-heading text-xs uppercase tracking-[0.4em] text-ember"
      >
        {hero.eyebrow}
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.15 }}
        className="relative mt-4 max-w-4xl font-heading text-5xl font-bold uppercase leading-[1.05] text-bone sm:text-7xl"
      >
        {hero.headline}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative mt-6 max-w-xl text-base text-mist sm:text-lg"
      >
        {hero.subheadline}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.45 }}
        className="relative mt-10 flex flex-col gap-4 sm:flex-row"
      >
        <a
          href="#tickets"
          className="rounded-sm bg-blood px-8 py-3 font-heading text-sm uppercase tracking-[0.3em] text-bone shadow-[0_0_30px_rgba(138,15,31,0.5)] transition-transform hover:scale-105"
        >
          {hero.ctaPrimary}
        </a>
        <a
          href="#house"
          className="rounded-sm border border-mist/30 px-8 py-3 font-heading text-sm uppercase tracking-[0.3em] text-mist transition-colors hover:border-ember hover:text-ember"
        >
          {hero.ctaSecondary}
        </a>
      </motion.div>

      <p className="relative mt-14 font-body text-[11px] uppercase tracking-[0.3em] text-mist/60">
        {brand.name} &middot; Tehachapi, CA &middot; Since {brand.since}
      </p>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 text-mist/50"
        aria-hidden="true"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 4v16M6 14l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
    </section>
  );
}
