import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { brand, hero } from "../data/siteContent";

const SESSION_KEY = "tt-entered";

function alreadyEntered() {
  try {
    return sessionStorage.getItem(SESSION_KEY) === "1";
  } catch {
    return false;
  }
}

// Full-screen spooky gate shown once per browser session before the main
// site. Sets the tone immediately and gives the smoke/sprite layers a
// dramatic first moment instead of dumping visitors straight on the hero.
export default function SplashGate({ children }) {
  const [entered, setEntered] = useState(alreadyEntered);

  function enter() {
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      /* sessionStorage unavailable, fine to skip */
    }
    setEntered(true);
  }

  return (
    <>
      <AnimatePresence>
        {!entered && (
          <motion.div
            key="gate"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-void px-6 text-center"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(138,15,31,0.18),transparent_65%)]" />

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative mb-4 font-heading text-xs tracking-[0.4em] text-mist uppercase"
            >
              Enter at your own risk
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-flicker-glow relative font-display text-6xl leading-none text-ember sm:text-8xl"
            >
              {brand.shortName}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="relative mt-6 max-w-md font-body text-sm text-mist sm:text-base"
            >
              {hero.subheadline}
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.7 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={enter}
              className="relative mt-10 rounded-sm border border-ember/60 bg-blood/20 px-8 py-3 font-heading text-sm uppercase tracking-[0.3em] text-bone shadow-[0_0_25px_rgba(255,90,31,0.25)] transition-colors hover:bg-blood/40"
            >
              Enter If You Dare
            </motion.button>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 1.9, duration: 1 }}
              className="relative mt-6 font-body text-[11px] tracking-widest text-mist/70 uppercase"
            >
              Tehachapi, CA &middot; Since {brand.since}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={false}
        animate={{ opacity: entered ? 1 : 0 }}
        transition={{ duration: 0.9, delay: entered ? 0.1 : 0 }}
      >
        {children}
      </motion.div>
    </>
  );
}
