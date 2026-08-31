import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "../data/siteContent";

function FaqItem({ q, open, onToggle }) {
  return (
    <div className="border-b border-charcoal">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-heading text-sm uppercase tracking-wide text-bone sm:text-base">
          {q.question}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0 text-xl text-ember"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-mist">{q.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="relative mx-auto max-w-3xl px-6 py-24">
      <h2 className="text-center font-heading text-3xl uppercase tracking-widest text-bone sm:text-4xl">
        Frequently Screamed Questions
      </h2>

      <div className="mt-12">
        {faqs.map((q, i) => (
          <FaqItem
            key={q.question}
            q={q}
            open={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
          />
        ))}
      </div>
    </section>
  );
}
