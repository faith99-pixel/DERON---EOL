"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useSite } from "@/lib/site-store";
import { FIRM, PRACTICE_AREAS, STATS } from "@/lib/content";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/Reveal";
import { HeroCarousel } from "@/components/site/HeroCarousel";
import { ArrowRight, ArrowUpRight, Scale } from "lucide-react";

export function HomePage() {
  const setPage = useSite((s) => s.setPage);

  return (
    <div>
      {/* ===================== HERO CAROUSEL ===================== */}
      <HeroCarousel onExplore={() => setPage("practice")} />

      {/* ===================== INTRO / PHILOSOPHY ===================== */}
      <section className="relative bg-[#0d0d15] text-[#eff1dc] py-24 md:py-36 overflow-hidden">
        {/* Faint scales-of-justice backdrop in upper-right */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.06] pointer-events-none">
          <Image
            src="/assets/scales-justice.jpg"
            alt=""
            aria-hidden
            fill
            sizes="50vw"
            className="object-cover object-center"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Fountain pen signing a legal document */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <Reveal delay={0.15}>
                <div className="relative">
                  <div className="absolute -inset-3 border border-[#9a8141]/40 hidden md:block" />
                  <div className="relative overflow-hidden aspect-[4/3] bg-[#1a1b1c]">
                    <Image
                      src="/assets/philosophy-signing.jpg"
                      alt="Fountain pen signing a legal document — diligence in every detail"
                      fill
                      sizes="(min-width: 1024px) 460px, 100vw"
                      className="object-cover"
                      quality={90}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d15]/55 to-transparent" />
                    <div className="absolute bottom-5 left-5 text-[#eff1dc]">
                      <p className="text-[9px] tracking-[0.4em] uppercase text-[#b8a05a]">
                        — Foundation
                      </p>
                      <p className="font-display text-lg mt-1">
                        Diligence in every detail
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6 lg:col-start-7 order-1 lg:order-2 flex flex-col gap-8 pt-2">
              <Reveal>
                <span className="text-[10px] tracking-[0.4em] uppercase text-[#b8a05a]">
                  — Our Philosophy
                </span>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="font-display font-light text-4xl md:text-5xl lg:text-6xl leading-[1.08]">
                  Law practiced as a
                  <span className="italic text-[#b8a05a]"> discipline</span>,
                  not merely a service.
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-lg leading-relaxed text-[#eff1dc]/80">
                  We approach every instruction with the same conviction —
                  that sound counsel is the product of diligence, judgment and
                  an unwavering commitment to the client&apos;s interest. Our work
                  spans the breadth of commercial life, yet it is unified by a
                  single standard of excellence.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <p className="text-base leading-relaxed text-[#eff1dc]/65">
                  From the founding of enterprises to the resolution of
                  disputes, from the perfection of title to the shaping of
                  public policy, Deron &amp; Eol brings clarity to complexity —
                  advising clients whose decisions carry weight, consequence
                  and lasting impact.
                </p>
              </Reveal>
              <Reveal delay={0.4}>
                <div className="gold-rule my-2" />
                <p className="text-sm tracking-[0.18em] uppercase text-[#9a8141]">
                  Since {FIRM.establishedPractising} · Registered {FIRM.registered}
                </p>
              </Reveal>
            </div>
          </div>

          {/* Stats row */}
          <RevealGroup className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-[#eff1dc]/12">
            {STATS.map((s) => (
              <RevealItem
                key={s.label}
                className="bg-[#0d0d15] p-8 md:p-10"
              >
                <p className="font-display text-5xl md:text-6xl font-light text-[#eff1dc]">
                  {s.value}
                </p>
                <p className="mt-3 text-[10px] tracking-[0.34em] uppercase text-[#b8a05a]">
                  {s.label}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ===================== PRACTICE AREAS OVERVIEW ===================== */}
      <section className="bg-[#eff1dc] py-24 md:py-36">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <Reveal>
                <span className="text-[10px] tracking-[0.4em] uppercase text-[#9a8141]">
                  — Practice Areas
                </span>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="mt-6 font-display font-light text-4xl md:text-5xl lg:text-6xl text-[#0d0d15] leading-[1.08] max-w-2xl">
                  A full-service firm,
                  <span className="italic"> five disciplines</span>.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.2}>
              <button
                onClick={() => setPage("practice")}
                className="group inline-flex items-center gap-3 text-[11px] tracking-[0.26em] uppercase text-[#0d0d15] border-b border-[#0d0d15]/30 pb-2 hover:border-[#9a8141] hover:text-[#9a8141] transition-colors"
              >
                View all practices
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Reveal>
          </div>

          <RevealGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#0d0d15]/10">
            {PRACTICE_AREAS.map((pa) => (
              <RevealItem key={pa.id}>
                <button
                  onClick={() => setPage("practice")}
                  className="group h-full w-full text-left bg-[#f5f6e8] hover:bg-[#0d0d15] p-8 md:p-10 transition-colors duration-500"
                >
                  <div className="flex items-start justify-between mb-6">
                    <span className="font-display text-2xl text-[#9a8141] group-hover:text-[#b8a05a] transition-colors">
                      {pa.index}
                    </span>
                    <ArrowUpRight
                      size={18}
                      className="text-[#0d0d15]/40 group-hover:text-[#eff1dc] group-hover:rotate-45 transition-all duration-500"
                    />
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl text-[#0d0d15] group-hover:text-[#eff1dc] transition-colors leading-tight">
                    {pa.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#0d0d15]/60 group-hover:text-[#eff1dc]/70 transition-colors leading-relaxed">
                    {pa.tagline}
                  </p>
                  <div className="mt-6 h-px w-10 bg-[#9a8141] group-hover:w-full group-hover:bg-[#9a8141] transition-all duration-500" />
                </button>
              </RevealItem>
            ))}
            {/* CTA cell */}
            <RevealItem>
              <button
                onClick={() => setPage("contact")}
                className="group h-full w-full text-left bg-[#9a8141] hover:bg-[#0d0d15] p-8 md:p-10 transition-colors duration-500 flex flex-col justify-between"
              >
                <span className="text-[10px] tracking-[0.4em] uppercase text-[#0d0d15] group-hover:text-[#b8a05a] transition-colors">
                  — Engage Us
                </span>
                <div className="mt-12">
                  <h3 className="font-display text-2xl md:text-3xl text-[#0d0d15] group-hover:text-[#eff1dc] transition-colors leading-tight">
                    Discuss your instruction with our team.
                  </h3>
                  <div className="mt-6 inline-flex items-center gap-3 text-[11px] tracking-[0.24em] uppercase text-[#0d0d15] group-hover:text-[#eff1dc] transition-colors">
                    Begin
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </button>
            </RevealItem>
          </RevealGroup>
        </div>
      </section>

      {/* ===================== FOUNDER SPOTLIGHT ===================== */}
      <section className="bg-[#0d0d15] text-[#eff1dc] py-24 md:py-36 overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <Reveal>
                <span className="text-[10px] tracking-[0.4em] uppercase text-[#b8a05a]">
                  — The Founder
                </span>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="mt-6 font-display font-light text-4xl md:text-5xl lg:text-6xl leading-[1.08]">
                  {FIRM.founder}
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-3 text-sm tracking-[0.2em] uppercase text-[#9a8141]">
                  Principal Counsel · Founder
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="gold-rule my-7" />
              </Reveal>
              <Reveal delay={0.35}>
                <p className="text-lg leading-relaxed text-[#eff1dc]/80">
                  With {FIRM.yearsExperience} years at the Bar, Ikeoluwa Adare
                  founded Deron &amp; Eol Law Practice to bring together a
                  disciplined breadth of expertise under one standard of
                  excellence — advising clients across corporate, real estate,
                  governance and litigation matters with care, rigour and
                  discretion.
                </p>
              </Reveal>
              <Reveal delay={0.45}>
                <p className="mt-5 text-base leading-relaxed text-[#eff1dc]/65">
                  The firm draws on a practice established in {FIRM.establishedPractising},
                  formally constituted in {FIRM.registered} to serve a growing
                  roster of individuals, enterprises and institutions who value
                  counsel grounded in experience and delivered with conviction.
                </p>
              </Reveal>
              <Reveal delay={0.55}>
                <button
                  onClick={() => setPage("team")}
                  className="mt-8 group inline-flex items-center gap-3 text-[11px] tracking-[0.26em] uppercase text-[#eff1dc] border-b border-[#eff1dc]/30 pb-2 hover:border-[#b8a05a] hover:text-[#b8a05a] transition-colors"
                >
                  Meet the team
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Reveal>
            </div>

            <div className="lg:col-span-6 lg:col-start-7 order-1 lg:order-2">
              <Reveal delay={0.2}>
                <div className="relative">
                  <div className="absolute -inset-4 border border-[#9a8141]/40 hidden md:block" />
                  <motion.div
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="relative overflow-hidden aspect-[4/5] bg-[#1a1b1c]"
                  >
                    <Image
                      src="/assets/founder-ikeoluwa-adare.jpg"
                      alt="Ikeoluwa Adare, Founder of Deron & Eol Law Practice"
                      fill
                      sizes="(min-width: 1024px) 560px, 100vw"
                      className="object-cover"
                      quality={95}
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d15]/45 to-transparent" />
                  </motion.div>
                  {/* Floating quote */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: 0.5 }}
                    className="absolute -bottom-6 -left-6 md:-left-12 max-w-[260px] bg-[#eff1dc] text-[#0d0d15] p-6 shadow-2xl"
                  >
                    <p className="font-display italic text-lg leading-snug">
                      “Counsel is the architecture of confidence.”
                    </p>
                    <p className="mt-3 text-[10px] tracking-[0.3em] uppercase text-[#9a8141]">
                      — {FIRM.founder}
                    </p>
                  </motion.div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CTA BAND ===================== */}
      <section className="relative bg-[#0d0d15] text-[#eff1dc] py-28 md:py-40 overflow-hidden">
        {/* Corporate building background */}
        <div className="absolute inset-0">
          <Image
            src="/assets/building.jpg"
            alt=""
            aria-hidden
            fill
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d15]/85 via-[#0d0d15]/80 to-[#0d0d15]" />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-20 blur-3xl"
            style={{ background: "radial-gradient(circle, #9a8141 0%, transparent 65%)" }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-5 md:px-10 text-center">
          <Reveal>
            <span className="text-[10px] tracking-[0.4em] uppercase text-[#b8a05a]">
              — Engage the Firm
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display font-light text-4xl md:text-6xl lg:text-7xl leading-[1.05]">
              Have a matter that
              <br />
              <span className="italic text-[#b8a05a]">deserves considered counsel?</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-lg text-[#eff1dc]/75 max-w-2xl mx-auto leading-relaxed">
              We welcome instructions from individuals, enterprises and
              institutions. Reach out to begin a conversation in confidence.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <button
              onClick={() => setPage("contact")}
              className="mt-10 group inline-flex items-center gap-3 bg-[#eff1dc] text-[#0d0d15] px-8 py-4 text-[11px] tracking-[0.26em] uppercase hover:bg-[#9a8141] transition-colors duration-300"
            >
              Contact the Firm
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
