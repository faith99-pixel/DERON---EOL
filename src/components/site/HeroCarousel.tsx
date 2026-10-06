"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { HERO_SLIDES } from "@/lib/content";
import { ArrowRight } from "lucide-react";

const SLIDE_DURATION = 6500; // ms per slide

/**
 * HeroCarousel — full-bleed animated carousel that cycles through the firm's
 * practice areas. Each slide layers a background image, a dark wash and an
 * animated text block. Auto-advances; supports manual nav via dots/arrows.
 */
export function HeroCarousel({ onExplore }: { onExplore: () => void }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isManual = useRef(false);

  const go = useCallback(
    (next: number, dir = 1) => {
      const total = HERO_SLIDES.length;
      setIndex((prev) => {
        const target = (next + total) % total;
        if (target === prev) return prev;
        setDirection(dir);
        return target;
      });
    },
    []
  );

  const goNext = useCallback(() => go(index + 1, 1), [go, index]);
  const goPrev = useCallback(() => go(index - 1, -1), [go, index]);

  // Auto-advance loop. Pauses briefly after manual interaction.
  useEffect(() => {
    const tick = () => {
      if (!isManual.current) {
        setDirection(1);
        setIndex((i) => (i + 1) % HERO_SLIDES.length);
      }
    };
    timerRef.current = setTimeout(tick, SLIDE_DURATION);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [index]);

  const handleManual = (cb: () => void) => () => {
    isManual.current = true;
    cb();
    // resume auto-advance after one cycle
    setTimeout(() => {
      isManual.current = false;
    }, SLIDE_DURATION);
  };

  const slide = HERO_SLIDES[index];

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-[#0d0d15]">
      {/* ===== Animated background images ===== */}
      <div className="absolute inset-0">
        <AnimatePresence mode="sync" custom={direction}>
          <motion.div
            key={slide.id}
            custom={direction}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
              scale: { duration: 6.5, ease: "linear" },
            }}
            className="absolute inset-0"
          >
            <Image
              src={slide.image}
              alt={slide.eyebrow}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Persistent dark overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d15]/88 via-[#0d0d15]/72 to-[#0d0d15]/92" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d15] via-transparent to-[#0d0d15]/45" />
        {/* Gold radial glows */}
        <div
          className="absolute -top-40 -right-40 w-[640px] h-[640px] rounded-full opacity-25 blur-3xl pointer-events-none"
          style={{
            background: "radial-gradient(circle, #b8a05a 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute -bottom-60 -left-40 w-[700px] h-[700px] rounded-full opacity-15 blur-3xl pointer-events-none"
          style={{
            background: "radial-gradient(circle, #9a8141 0%, transparent 65%)",
          }}
        />
      </div>

      {/* Decorative thin gold rule top */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-24 left-0 right-0 h-px bg-[#b8a05a]/30 origin-left mx-auto max-w-7xl"
      />

      {/* ===== Slide content ===== */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-10 w-full pt-36 pb-28 md:pb-24">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={slide.id}
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 40 : -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -40 : 40 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-4 mb-8">
              <span className="h-px w-12 bg-[#b8a05a]" />
              <span className="text-[10px] md:text-xs tracking-[0.4em] uppercase text-[#b8a05a]">
                {slide.eyebrow}
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display font-light text-[2.5rem] leading-[1.08] sm:text-5xl md:text-6xl lg:text-[5rem] tracking-[-0.01em] text-[#eff1dc]">
              {slide.title[0]}
              <br />
              <span className="italic font-normal text-[#b8a05a]">
                {slide.title[1]}
              </span>
            </h1>

            {/* Body */}
            <p className="mt-8 text-base md:text-lg text-[#eff1dc]/75 leading-relaxed max-w-xl">
              {slide.body}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* CTAs (persistent) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <button
            onClick={onExplore}
            className="group inline-flex items-center gap-3 bg-[#eff1dc] text-[#0d0d15] px-7 py-4 text-[11px] tracking-[0.26em] uppercase hover:bg-[#9a8141] hover:text-[#eff1dc] transition-colors duration-300"
          >
            Explore Practice
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </button>
          {/* Slide count indicator — commented out per request
          <span className="text-[11px] tracking-[0.26em] uppercase text-[#eff1dc]/55">
            {String(index + 1).padStart(2, "0")} / {String(HERO_SLIDES.length).padStart(2, "0")}
          </span>
          */}
        </motion.div>
      </div>

      {/* ===== Carousel controls (right side) ===== */}
      <div className="absolute right-5 md:right-10 bottom-28 md:bottom-32 z-20 flex flex-col items-center gap-4">
        <button
          onClick={handleManual(goPrev)}
          aria-label="Previous slide"
          className="h-10 w-10 rounded-full border border-[#eff1dc]/30 text-[#eff1dc] hover:bg-[#eff1dc] hover:text-[#0d0d15] transition-colors flex items-center justify-center"
        >
          <ArrowRight size={15} className="rotate-180" />
        </button>

        {/* Dots */}
        <div className="flex flex-col gap-2">
          {HERO_SLIDES.map((s, i) => (
            <button
              key={s.id}
              onClick={handleManual(() => go(i, i > index ? 1 : -1))}
              aria-label={`Go to slide ${i + 1}`}
              className="group relative py-1"
            >
              <span
                className={`block w-px transition-all duration-500 ${
                  i === index
                    ? "h-8 bg-[#b8a05a]"
                    : "h-4 bg-[#eff1dc]/30 group-hover:bg-[#eff1dc]/60"
                }`}
              />
            </button>
          ))}
        </div>

        <button
          onClick={handleManual(goNext)}
          aria-label="Next slide"
          className="h-10 w-10 rounded-full border border-[#eff1dc]/30 text-[#eff1dc] hover:bg-[#eff1dc] hover:text-[#0d0d15] transition-colors flex items-center justify-center"
        >
          <ArrowRight size={15} />
        </button>
      </div>

      {/* Progress bar at bottom of hero */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-[#eff1dc]/10 z-20">
        <motion.div
          key={index}
          className="h-full bg-[#b8a05a] origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
        />
      </div>
    </section>
  );
}
