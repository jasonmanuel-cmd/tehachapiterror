import { motion } from "framer-motion";
import { testimonials } from "../data/siteContent";

export default function Testimonials() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-6 sm:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.blockquote
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="rounded-sm border border-charcoal bg-abyss/60 p-6"
          >
            <p className="font-heading text-sm italic leading-relaxed text-mist">&ldquo;{t.quote}&rdquo;</p>
            <footer className="mt-4 text-xs uppercase tracking-widest text-ember">{t.author}</footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}
