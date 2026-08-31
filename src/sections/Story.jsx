import { motion } from "framer-motion";
import { story } from "../data/siteContent";

export default function Story() {
  return (
    <section id="house" className="relative mx-auto max-w-5xl px-6 py-28">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center font-heading text-3xl uppercase tracking-widest text-bone sm:text-4xl"
      >
        {story.heading}
      </motion.h2>

      <div className="mx-auto mt-10 max-w-2xl space-y-5">
        {story.paragraphs.map((p, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="text-center text-mist"
          >
            {p}
          </motion.p>
        ))}
      </div>

      <div className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4">
        {story.stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="rounded-sm border border-charcoal bg-abyss/60 px-4 py-6 text-center"
          >
            <div className="font-display text-3xl text-ember">{s.value}</div>
            <div className="mt-1 font-heading text-[11px] uppercase tracking-[0.2em] text-mist">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
