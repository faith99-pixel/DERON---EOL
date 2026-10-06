"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useSite } from "@/lib/site-store";
import { FIRM } from "@/lib/content";

/**
 * Preloader — the DEO logo loads and animates first; only after the
 * reveal completes does the main website become interactive, mirroring
 * the elthonpartners.com entrance.
 */
export function Preloader() {
  const setReady = useSite((s) => s.setReady);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Ensure the logo image is loaded, then hold briefly for the animation.
    const t = setTimeout(() => {
      setDone(true);
      // allow the exit animation to play, then signal ready
      setTimeout(() => setReady(true), 1100);
    }, 2400);
    return () => clearTimeout(t);
  }, [setReady]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#eff1dc] overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Cream backdrop with subtle grain */}
          <div className="paper-grain absolute inset-0" />

          {/* Expanding gold ring behind logo */}
          <motion.div
            className="absolute rounded-full border border-[#9a8141]/40"
            initial={{ width: 0, height: 0, opacity: 0 }}
            animate={{
              width: [0, 320, 460],
              height: [0, 320, 460],
              opacity: [0, 0.5, 0],
            }}
            transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
          />

          <div className="relative flex flex-col items-center">
            {/* Logo mark */}
            <motion.div
              initial={{ opacity: 0, scale: 0.82, filter: "blur(8px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <Image
                src="/assets/deo-logo.jpg"
                alt="Deron & Eol Law Practice logo"
                width={132}
                height={132}
                priority
                className="h-[110px] w-[110px] md:h-[132px] md:w-[132px] rounded-full object-cover"
              />
            </motion.div>

            {/* Monogram + name */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 flex flex-col items-center"
            >
              <span className="font-display text-3xl md:text-4xl tracking-[0.18em] text-[#0d0d15]">
                DERON &amp; EOL
              </span>
              <span className="mt-2 text-[10px] md:text-xs tracking-[0.42em] uppercase text-[#9a8141]">
                Law Practice
              </span>
            </motion.div>

            {/* Loading line */}
            <motion.div
              className="mt-8 h-px bg-[#0d0d15]/15 overflow-hidden"
              initial={{ width: 0 }}
              animate={{ width: 220 }}
              transition={{ duration: 1.4, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                className="h-full bg-[#9a8141]"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 1.4,
                  delay: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </motion.div>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="mt-4 text-[10px] tracking-[0.3em] uppercase text-[#0d0d15]/45"
            >
              {FIRM.tagline}
            </motion.span>
          </div>

          {/* Wipe panels — cream sheets that lift away to reveal the site */}
          <motion.div
            className="absolute inset-0 bg-[#0d0d15] origin-bottom z-[-1]"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            transition={{ duration: 1, delay: 1.3, ease: [0.76, 0, 0.24, 1] }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
