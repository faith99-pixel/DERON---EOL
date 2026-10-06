"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useSite } from "@/lib/site-store";
import { FIRM, PRACTICE_AREAS } from "@/lib/content";
import { Reveal } from "@/components/site/Reveal";
import { ArrowRight } from "lucide-react";

export function TeamPage() {
  const setPage = useSite((s) => s.setPage);

  return (
    <div>
      {/* ===================== HERO ===================== */}
      <section className="relative bg-[#eff1dc] pt-40 pb-20 md:pt-52 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#f5f6e8] to-[#eff1dc]" />
          <div className="paper-grain absolute inset-0 opacity-50" />
          <div
            className="absolute -top-32 right-0 w-[520px] h-[520px] rounded-full opacity-20 blur-3xl"
            style={{ background: "radial-gradient(circle, #b8a05a 0%, transparent 65%)" }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-10">
          <Reveal>
            <div className="flex items-center gap-4 mb-8">
              <span className="h-px w-12 bg-[#9a8141]" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-[#0d0d15]/60">
                Our Team
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display font-light text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] text-[#0d0d15] max-w-4xl">
              Counsel led by
              <br />
              <span className="italic text-[#9a8141]">considered experience.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      {/* ===================== FOUNDER PROFILE ===================== */}
      <section className="bg-[#0d0d15] text-[#eff1dc] py-24 md:py-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Portrait */}
            <div className="lg:col-span-5">
              <Reveal>
                <div className="relative">
                  <motion.div
                    className="absolute -inset-4 border border-[#9a8141]/40 hidden md:block"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  />
                  <div className="relative overflow-hidden aspect-[4/5] bg-[#1a1b1c]">
                    <Image
                      src="/assets/Ikeoluwa_image2.jpeg"
                      alt="Ikeoluwa Adare — Founder and Principal Counsel"
                      fill
                      sizes="(min-width: 1024px) 460px, 100vw"
                      className="object-cover"
                      quality={95}
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d15]/55 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-[9px] tracking-[0.4em] uppercase text-[#b8a05a]">
                        Founder · Principal Counsel
                      </p>
                      <p className="font-display text-2xl mt-2">{FIRM.founder}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Bio */}
            <div className="lg:col-span-7">
              <Reveal delay={0.15}>
                <span className="text-[10px] tracking-[0.4em] uppercase text-[#b8a05a]">
                  — Principal Counsel
                </span>
              </Reveal>
              <Reveal delay={0.2}>
                <h2 className="mt-6 font-display font-light text-4xl md:text-5xl lg:text-6xl leading-[1.08]">
                  {FIRM.founder}
                </h2>
              </Reveal>
              <Reveal delay={0.3}>
                <p className="mt-3 text-sm tracking-[0.2em] uppercase text-[#9a8141]">
                  Founder · {FIRM.yearsExperience} Years at the Bar
                </p>
              </Reveal>
              <Reveal delay={0.4}>
                <div className="gold-rule my-8" />
              </Reveal>

              <Reveal delay={0.45}>
                <p className="text-lg leading-relaxed text-[#eff1dc]/85">
                  Ikeoluwa Adare is the founder and principal counsel of Deron
                  &amp; Eol Law Practice. Called to the Nigerian Bar in{" "}
                  {FIRM.establishedPractising}, she has, over the course of{" "}
                  {FIRM.yearsExperience} years, built a practice defined by its
                  breadth — advising clients across corporate and commercial
                  transactions, real estate, governance and litigation.
                </p>
              </Reveal>
              <Reveal delay={0.55}>
                <p className="mt-5 text-base leading-relaxed text-[#eff1dc]/65">
                  Her counsel is shaped by a conviction that law is a discipline
                  of judgment — one that must be exercised with rigour,
                  commercial awareness and discretion. From the founding of
                  enterprises to the perfection of title and the resolution of
                  disputes, clients value her ability to bring clarity to
                  complexity and steadiness to consequence.
                </p>
              </Reveal>
              <Reveal delay={0.65}>
                <p className="mt-5 text-base leading-relaxed text-[#eff1dc]/65">
                  In {FIRM.registered}, she formally constituted Deron &amp; Eol
                  Law Practice — drawing together a disciplined body of expertise
                  under one standard, to serve a growing roster of individuals,
                  enterprises and institutions.
                </p>
              </Reveal>

              {/* Quick facts */}
              <Reveal delay={0.75}>
                <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-6">
                  <div>
                    <p className="font-display text-4xl text-[#b8a05a]">
                      {FIRM.yearsExperience}
                    </p>
                    <p className="mt-1 text-[10px] tracking-[0.28em] uppercase text-[#eff1dc]/55">
                      Years at the Bar
                    </p>
                  </div>
                  <div>
                    <p className="font-display text-4xl text-[#b8a05a]">
                      {FIRM.registered}
                    </p>
                    <p className="mt-1 text-[10px] tracking-[0.28em] uppercase text-[#eff1dc]/55">
                      Firm Founded
                    </p>
                  </div>
                  <div>
                    <p className="font-display text-4xl text-[#b8a05a]">
                      {PRACTICE_AREAS.length}
                    </p>
                    <p className="mt-1 text-[10px] tracking-[0.28em] uppercase text-[#eff1dc]/55">
                      Disciplines
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== PRACTICE FOCUS ===================== */}
      <section className="bg-[#eff1dc] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="max-w-3xl mb-16">
            <Reveal>
              <span className="text-[10px] tracking-[0.4em] uppercase text-[#9a8141]">
                — Areas of Focus
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-display font-light text-4xl md:text-5xl text-[#0d0d15] leading-[1.1]">
                Disciplines the founder leads
                <span className="italic"> personally.</span>
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-[#0d0d15]/10">
            {PRACTICE_AREAS.map((pa, i) => (
              <Reveal key={pa.id} delay={i * 0.06}>
                <button
                  onClick={() => setPage("practice")}
                  className="group w-full h-full text-left bg-[#f5f6e8] hover:bg-[#0d0d15] p-7 transition-colors duration-500"
                >
                  <span className="font-display text-xl text-[#9a8141]">
                    {pa.index}
                  </span>
                  <h3 className="mt-3 font-display text-lg text-[#0d0d15] group-hover:text-[#eff1dc] transition-colors leading-tight">
                    {pa.title}
                  </h3>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== JOIN / EXPANSION NOTE ===================== */}
      <section className="bg-[#0d0d15] text-[#eff1dc] py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-5 md:px-10 text-center">
          <Reveal>
            <span className="text-[10px] tracking-[0.4em] uppercase text-[#b8a05a]">
              — The Team
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display font-light text-4xl md:text-5xl lg:text-6xl leading-[1.08]">
              A practice built to grow
              <span className="italic"> in discipline.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-lg text-[#eff1dc]/70 max-w-2xl mx-auto leading-relaxed">
              The firm is led by its founder, with a counsel team assembled
              around its five core disciplines. We continue to grow our team
              carefully — adding expertise where it strengthens the standard
              our clients expect.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
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
