import { motion } from "framer-motion";
import { hours, tickets } from "../data/siteContent";

export default function HoursTickets() {
  return (
    <section id="tickets" className="relative mx-auto max-w-6xl px-6 py-24">
      <h2 className="text-center font-heading text-3xl uppercase tracking-widest text-bone sm:text-4xl">
        Hours &amp; Tickets
      </h2>

      <div className="mt-14 grid gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="font-heading text-lg uppercase tracking-widest text-ember">Open Season</h3>
          <p className="mt-2 text-sm text-mist">{hours.season}</p>
          <ul className="mt-6 divide-y divide-charcoal border-y border-charcoal">
            {hours.schedule.map((h) => (
              <li key={h.days} className="flex items-center justify-between py-3 text-sm">
                <span className="text-bone">{h.days}</span>
                <span className="text-mist">{h.time}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-mist/70">{hours.note}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid gap-4"
        >
          {tickets.map((t) => (
            <div
              key={t.id}
              className={`rounded-sm border p-5 ${
                t.featured
                  ? "border-ember bg-blood/15 shadow-[0_0_25px_rgba(255,90,31,0.15)]"
                  : "border-charcoal bg-abyss/60"
              }`}
            >
              <div className="flex items-baseline justify-between">
                <h4 className="font-heading text-sm uppercase tracking-widest text-bone">
                  {t.name}
                  {t.featured && (
                    <span className="ml-2 rounded-sm bg-ember px-2 py-0.5 text-[10px] text-void">
                      Best Value
                    </span>
                  )}
                </h4>
                <span className="font-display text-2xl text-ember">{t.price}</span>
              </div>
              <p className="mt-2 text-sm text-mist">{t.description}</p>
            </div>
          ))}
          <a
            href="#visit"
            className="mt-2 rounded-sm bg-blood px-6 py-3 text-center font-heading text-sm uppercase tracking-[0.3em] text-bone transition-transform hover:scale-[1.02]"
          >
            Get Tickets
          </a>
        </motion.div>
      </div>
    </section>
  );
}
