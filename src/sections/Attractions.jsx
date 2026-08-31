import { motion } from "framer-motion";
import { attractions } from "../data/siteContent";

function SkullMeter({ intensity }) {
  return (
    <div className="mt-3 flex items-center justify-center gap-1" aria-label={`Intensity ${intensity} of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={i < intensity ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.5"
          className={i < intensity ? "text-ember" : "text-charcoal"}
        >
          <path d="M12 2a8 8 0 0 0-8 8c0 3 1.5 5 3 6.5V19a1 1 0 0 0 1 1h1v1.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V20h2v1.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V20h1a1 1 0 0 0 1-1v-2.5c1.5-1.5 3-3.5 3-6.5a8 8 0 0 0-8-8Z" />
          <circle cx="9" cy="10" r="1.3" fill="#0d0810" />
          <circle cx="15" cy="10" r="1.3" fill="#0d0810" />
        </svg>
      ))}
    </div>
  );
}

export default function Attractions() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-center font-heading text-3xl uppercase tracking-widest text-bone sm:text-4xl">
        Three Attractions. One Bad Idea.
      </h2>

      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {attractions.map((a, i) => (
          <motion.div
            key={a.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group rounded-sm border border-charcoal bg-abyss/60 p-7 text-center transition-colors hover:border-ember/50"
          >
            <h3 className="font-heading text-xl uppercase tracking-wide text-ember">{a.name}</h3>
            <p className="mt-3 text-sm text-mist">{a.description}</p>
            <SkullMeter intensity={a.intensity} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
