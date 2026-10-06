"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useSite } from "@/lib/site-store";
import { FIRM, VALUES } from "@/lib/content";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/Reveal";
import { ArrowRight } from "lucide-react";

export function AboutPage() {
  const setPage = useSite((s) => s.setPage);

  return (
    <div>
      {/* ===================== HERO ===================== */}
      <section className="relative bg-[#0d0d15] text-[#eff1dc] pt-40 pb-24 md:pt-52 md:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/interior-2.jpg"
            alt="Refined law office interior"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d15]/90 via-[#0d0d15]/80 to-[#0d0d15]" />
          <div
            className="absolute -top-40 right-0 w-[560px] h-[560px] rounded-full opacity-25 blur-3xl"
            style={{ background: "radial-gradient(circle, #b8a05a 0%, transparent 65%)" }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-10">
          <Reveal>
            <div className="flex items-center gap-4 mb-8">
              <span className="h-px w-12 bg-[#b8a05a]" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-[#eff1dc]/70">
                About the Firm
              </span>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <Reveal delay={0.1}>
                <h1 className="font-display font-light text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] text-[#eff1dc]">
                  A firm built on
                  <span className="italic text-[#b8a05a]"> discipline,</span>
                  <br />
                  <span className="italic">depth</span> and discretion.
                </h1>
              </Reveal>
            </div>
            <div className="lg:col-span-4">
              <Reveal delay={0.25}>
                <p className="text-base md:text-lg leading-relaxed text-[#eff1dc]/75">
                  Deron &amp; Eol Law Practice is a full-service Nigerian law
                  firm, formally constituted in {FIRM.registered} and grounded
                  in {FIRM.yearsExperience} years of practice at the Bar.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== STORY ===================== */}
      <section className="bg-[#0d0d15] text-[#eff1dc] py-24 md:py-36">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <span className="text-[10px] tracking-[0.4em] uppercase text-[#b8a05a]">
                  — Our Story
                </span>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="mt-6 font-display font-light text-4xl md:text-5xl leading-[1.1]">
                  From a sustained practice to a constituted firm.
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-10 space-y-6">
                  <div className="flex gap-6">
                    <span className="font-display text-3xl text-[#9a8141] shrink-0 w-16">
                      {FIRM.establishedPracticing}
                    </span>
                    <div>
                      <p className="text-sm tracking-[0.2em] uppercase text-[#b8a05a]">
                        Practice Established
                      </p>
                      <p className="mt-1 text-sm text-[#eff1dc]/70 leading-relaxed">
                        Sixteen years of continuous practice at the Bar —
                        advising clients across corporate, real estate and
                        litigation matters.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <span className="font-display text-3xl text-[#9a8141] shrink-0 w-16">
                      {FIRM.registered}
                    </span>
                    <div>
                      <p className="text-sm tracking-[0.2em] uppercase text-[#b8a05a]">
                        Firm Constituted
                      </p>
                      <p className="mt-1 text-sm text-[#eff1dc]/70 leading-relaxed">
                        Deron &amp; Eol Law Practice formally registered, drawing
                        a growing body of expertise under one standard.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <span className="font-display text-3xl text-[#9a8141] shrink-0 w-16">
                      5
                    </span>
                    <div>
                      <p className="text-sm tracking-[0.2em] uppercase text-[#b8a05a]">
                        Practice Disciplines
                      </p>
                      <p className="mt-1 text-sm text-[#eff1dc]/70 leading-relaxed">
                        Corporate &amp; Commercial, Real Estate, Governance, Risk
                        &amp; Compliance, Public Policy and Litigation.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal delay={0.15}>
                <p className="text-lg md:text-xl leading-relaxed text-[#eff1dc]/85">
                  Deron &amp; Eol Law Practice was founded to consolidate a
                  disciplined breadth of legal expertise under a single
                  standard — advising individuals, enterprises and institutions
                  across the full spectrum of commercial life.
                </p>
              </Reveal>
              <Reveal delay={0.25}>
                <p className="mt-6 text-base leading-relaxed text-[#eff1dc]/65">
                  Our work is grounded in the conviction that sound counsel is
                  the product of diligence, judgment and an unwavering
                  commitment to the client&apos;s interest. From the founding of
                  enterprises to the resolution of disputes, from the
                  perfection of title to the shaping of public policy, we
                  bring clarity to complexity — and discretion to consequence.
                </p>
              </Reveal>
              <Reveal delay={0.35}>
                <p className="mt-6 text-base leading-relaxed text-[#eff1dc]/65">
                  The firm serves a growing roster of clients who value
                  considered, commercially aware counsel: founders and boards,
                  investors and institutions, public bodies and private
                  individuals — each represented with the same standard of
                  rigour and care.
                </p>
              </Reveal>
              <Reveal delay={0.45}>
                <div className="mt-10 flex items-center gap-4">
                  <div className="gold-rule" />
                  <p className="text-[10px] tracking-[0.34em] uppercase text-[#9a8141]">
                    {FIRM.tagline}
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== VALUES ===================== */}
      <section className="bg-[#eff1dc] py-24 md:py-36">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <span className="text-[10px] tracking-[0.4em] uppercase text-[#9a8141]">
                — What We Stand For
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-display font-light text-4xl md:text-5xl lg:text-6xl text-[#0d0d15] leading-[1.08]">
                Principles that govern
                <span className="italic"> every instruction.</span>
              </h2>
            </Reveal>
          </div>

          <RevealGroup className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#0d0d15]/10">
            {VALUES.map((v, i) => (
              <RevealItem key={v.title}>
                <div className="bg-[#f5f6e8] p-10 md:p-12 h-full">
                  <div className="flex items-baseline gap-4 mb-5">
                    <span className="font-display text-2xl text-[#9a8141]">
                      0{i + 1}
                    </span>
                    <div className="h-px flex-1 bg-[#0d0d15]/15" />
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl text-[#0d0d15] leading-tight">
                    {v.title}
                  </h3>
                  <p className="mt-4 text-base text-[#0d0d15]/65 leading-relaxed">
                    {v.body}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ===================== IMAGE BAND ===================== */}
      <section className="relative bg-[#0d0d15] text-[#eff1dc] py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, #9a8141 0%, transparent 60%)",
            }}
          />
        </div>
        <div className="relative z-10 mx-auto max-w-5xl px-5 md:px-10 text-center">
          <Reveal>
            <p className="font-display font-light text-3xl md:text-5xl lg:text-6xl leading-[1.15] italic">
              “We measure our practice not by the matters we accept, but by the
              <span className="not-italic text-[#b8a05a]"> confidence </span>
              they inspire.”
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 flex items-center justify-center gap-4">
              <div className="gold-rule" />
              <p className="text-[10px] tracking-[0.34em] uppercase text-[#9a8141]">
                Deron &amp; Eol Law Practice
              </p>
              <div className="gold-rule" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section className="bg-[#eff1dc] py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-5 md:px-10 text-center">
          <Reveal>
            <h2 className="font-display font-light text-4xl md:text-5xl lg:text-6xl text-[#0d0d15] leading-[1.05]">
              Engage counsel that
              <span className="italic"> considers consequence.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <button
              onClick={() => setPage("contact")}
              className="mt-10 group inline-flex items-center gap-3 bg-[#0d0d15] text-[#eff1dc] px-8 py-4 text-[11px] tracking-[0.26em] uppercase hover:bg-[#9a8141] transition-colors duration-300"
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
