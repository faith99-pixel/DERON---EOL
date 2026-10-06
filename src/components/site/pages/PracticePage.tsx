"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useSite } from "@/lib/site-store";
import { PRACTICE_AREAS } from "@/lib/content";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/Reveal";
import { ArrowRight, Plus, Minus } from "lucide-react";

export function PracticePage() {
  const setPage = useSite((s) => s.setPage);
  const [active, setActive] = useState(0);
  const pa = PRACTICE_AREAS[active];

  return (
    <div>
      {/* ===================== HERO ===================== */}
      <section className="relative bg-[#eff1dc] pt-40 pb-20 md:pt-52 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#f5f6e8] to-[#eff1dc]" />
          <div className="paper-grain absolute inset-0 opacity-50" />
          <div
            className="absolute -top-40 -left-40 w-[560px] h-[560px] rounded-full opacity-20 blur-3xl"
            style={{ background: "radial-gradient(circle, #9a8141 0%, transparent 65%)" }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-10">
          <Reveal>
            <div className="flex items-center gap-4 mb-8">
              <span className="h-px w-12 bg-[#9a8141]" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-[#0d0d15]/60">
                Practice Areas
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display font-light text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] text-[#0d0d15] max-w-4xl">
              Five disciplines,
              <br />
              <span className="italic text-[#9a8141]">one standard.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-lg text-[#0d0d15]/70 max-w-2xl leading-relaxed">
              Our practice spans the breadth of commercial, transactional and
              contentious law — advising with depth across corporate, real
              estate, governance, public policy and litigation.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===================== INTERACTIVE PRACTICE INDEX ===================== */}
      <section className="bg-[#0d0d15] text-[#eff1dc] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* List */}
            <div className="lg:col-span-5">
              <Reveal>
                <span className="text-[10px] tracking-[0.4em] uppercase text-[#b8a05a]">
                  — Index
                </span>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="mt-6 font-display font-light text-3xl md:text-4xl leading-[1.12] mb-10">
                  Select a discipline
                </h2>
              </Reveal>

              <div className="divide-y divide-[#eff1dc]/12 border-y border-[#eff1dc]/12">
                {PRACTICE_AREAS.map((p, i) => (
                  <button
                    key={p.id}
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    className="group w-full text-left py-6 flex items-center justify-between gap-6 transition-colors"
                  >
                    <div className="flex items-baseline gap-5">
                      <span
                        className={`font-display text-xl transition-colors ${
                          active === i ? "text-[#b8a05a]" : "text-[#9a8141]/60"
                        }`}
                      >
                        {p.index}
                      </span>
                      <span
                        className={`font-display text-2xl md:text-3xl transition-colors ${
                          active === i
                            ? "text-[#eff1dc]"
                            : "text-[#eff1dc]/55 group-hover:text-[#eff1dc]/85"
                        }`}
                      >
                        {p.title}
                      </span>
                    </div>
                    <ArrowRight
                      size={18}
                      className={`shrink-0 transition-all duration-300 ${
                        active === i
                          ? "text-[#b8a05a] translate-x-0 opacity-100"
                          : "text-[#eff1dc]/30 -translate-x-2 opacity-0 group-hover:opacity-60 group-hover:translate-x-0"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Detail */}
            <div className="lg:col-span-6 lg:col-start-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={pa.id}
                  initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -20, filter: "blur(6px)" }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex items-baseline gap-5 mb-6">
                    <span className="font-display text-6xl md:text-7xl text-[#9a8141]">
                      {pa.index}
                    </span>
                    <span className="text-[10px] tracking-[0.34em] uppercase text-[#eff1dc]/45">
                      Practice
                    </span>
                  </div>
                  <h3 className="font-display font-light text-4xl md:text-5xl leading-[1.08]">
                    {pa.title}
                  </h3>
                  <p className="mt-4 font-display italic text-xl text-[#b8a05a]">
                    {pa.tagline}
                  </p>
                  <p className="mt-6 text-base md:text-lg leading-relaxed text-[#eff1dc]/75">
                    {pa.overview}
                  </p>

                  <div className="mt-10">
                    <p className="text-[10px] tracking-[0.34em] uppercase text-[#9a8141] mb-5">
                      Services within this practice
                    </p>
                    <ul className="space-y-3">
                      {pa.services.map((s, i) => (
                        <motion.li
                          key={s}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + i * 0.05, duration: 0.5 }}
                          className="flex items-start gap-4 py-2 border-b border-[#eff1dc]/10"
                        >
                          <span className="text-[#9a8141] text-xs mt-1.5">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="text-sm md:text-base text-[#eff1dc]/85">
                            {s}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== ALL PRACTICES (ACCORDION) ===================== */}
      <section className="bg-[#eff1dc] py-24 md:py-36">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <span className="text-[10px] tracking-[0.4em] uppercase text-[#9a8141]">
                — Full Capability
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-display font-light text-4xl md:text-5xl lg:text-6xl text-[#0d0d15] leading-[1.08]">
                Every discipline,
                <span className="italic"> in detail.</span>
              </h2>
            </Reveal>
          </div>

          <div className="border-y border-[#0d0d15]/15">
            {PRACTICE_AREAS.map((p, i) => (
              <PracticeRow key={p.id} pa={p} defaultOpen={i === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section className="bg-[#0d0d15] text-[#eff1dc] py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-5 md:px-10 text-center">
          <Reveal>
            <h2 className="font-display font-light text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              Identify the practice
              <br />
              <span className="italic text-[#b8a05a]">that fits your matter.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <button
              onClick={() => setPage("contact")}
              className="mt-10 group inline-flex items-center gap-3 bg-[#9a8141] text-[#0d0d15] px-8 py-4 text-[11px] tracking-[0.26em] uppercase hover:bg-[#eff1dc] transition-colors duration-300"
            >
              Engage the Firm
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

function PracticeRow({
  pa,
  defaultOpen = false,
}: {
  pa: (typeof PRACTICE_AREAS)[number];
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-[#0d0d15]/15 last:border-b-0">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full text-left py-8 md:py-10 flex items-center justify-between gap-6 group"
      >
        <div className="flex items-baseline gap-6 md:gap-8">
          <span className="font-display text-xl md:text-2xl text-[#9a8141]">
            {pa.index}
          </span>
          <h3 className="font-display text-3xl md:text-5xl font-light text-[#0d0d15] leading-tight">
            {pa.title}
          </h3>
        </div>
        <span className="shrink-0 h-10 w-10 rounded-full border border-[#0d0d15]/30 flex items-center justify-center text-[#0d0d15] group-hover:bg-[#0d0d15] group-hover:text-[#eff1dc] transition-colors">
          {open ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-10 grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-5 md:col-start-7">
                <p className="text-base leading-relaxed text-[#0d0d15]/70">
                  {pa.overview}
                </p>
                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                  {pa.services.map((s) => (
                    <li
                      key={s}
                      className="flex items-start gap-3 text-sm text-[#0d0d15]/80 border-b border-[#0d0d15]/10 pb-3"
                    >
                      <span className="text-[#9a8141] mt-1 text-xs">◆</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
