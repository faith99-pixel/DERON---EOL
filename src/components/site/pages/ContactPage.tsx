"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FIRM, PRACTICE_AREAS } from "@/lib/content";
import { Reveal } from "@/components/site/Reveal";
import { MapPin, Mail, Phone, ArrowRight, Check, Clock } from "lucide-react";

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    practice: "",
    message: "",
  });

  const update = (k: keyof typeof form, v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `New Enquiry${form.practice ? ` — ${form.practice}` : ""} from ${form.name}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || "—"}\nPractice Area: ${form.practice || "—"}\n\nMatter Outline:\n${form.message}`;
    window.location.href = `mailto:deroneol22@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
    setForm({ name: "", email: "", phone: "", practice: "", message: "" });
  };

  return (
    <div>
      {/* ===================== HERO ===================== */}
      <section className="relative bg-[#eff1dc] pt-40 pb-16 md:pt-52 md:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#f5f6e8] to-[#eff1dc]" />
          <div className="paper-grain absolute inset-0 opacity-50" />
          <div
            className="absolute -top-40 -right-32 w-[520px] h-[520px] rounded-full opacity-20 blur-3xl"
            style={{ background: "radial-gradient(circle, #9a8141 0%, transparent 65%)" }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-10">
          <Reveal>
            <div className="flex items-center gap-4 mb-8">
              <span className="h-px w-12 bg-[#9a8141]" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-[#0d0d15]/60">
                Contact
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display font-light text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] text-[#0d0d15] max-w-4xl">
              Begin a conversation
              <br />
              <span className="italic text-[#9a8141]">in confidence.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-lg text-[#0d0d15]/70 max-w-2xl leading-relaxed">
              We welcome instructions from individuals, enterprises and
              institutions. Share the outline of your matter and our team will
              respond promptly.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===================== FORM + DETAILS ===================== */}
      <section className="bg-[#0d0d15] text-[#eff1dc] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Details */}
            <div className="lg:col-span-4">
              <Reveal>
                <span className="text-[10px] tracking-[0.4em] uppercase text-[#b8a05a]">
                  — The Firm
                </span>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="mt-6 font-display font-light text-3xl md:text-4xl leading-tight">
                  {FIRM.name}
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="gold-rule my-7" />
              </Reveal>

              <div className="space-y-7">
                <Reveal delay={0.25}>
                  <div className="flex items-start gap-4">
                    <MapPin size={18} className="mt-1 text-[#9a8141] shrink-0" />
                    <div>
                      <p className="text-[10px] tracking-[0.3em] uppercase text-[#b8a05a] mb-1">
                        Office
                      </p>
                      <p className="text-sm leading-relaxed text-[#eff1dc]/80">
                        {FIRM.address.line1}<br />
                        {FIRM.address.city}, {FIRM.address.country}
                      </p>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.35}>
                  <div className="flex items-start gap-4">
                    <Mail size={18} className="mt-1 text-[#9a8141] shrink-0" />
                    <div>
                      <p className="text-[10px] tracking-[0.3em] uppercase text-[#b8a05a] mb-1">
                        Email
                      </p>
                      <a
                        href={`mailto:${FIRM.email}`}
                        className="text-sm text-[#eff1dc]/80 hover:text-[#b8a05a] transition-colors"
                      >
                        {FIRM.email}
                      </a>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.45}>
                  <div className="flex items-start gap-4">
                    <Phone size={18} className="mt-1 text-[#9a8141] shrink-0" />
                    <div>
                      <p className="text-[10px] tracking-[0.3em] uppercase text-[#b8a05a] mb-1">
                        Telephone
                      </p>
                      <p className="text-sm text-[#eff1dc]/80">{FIRM.phone}</p>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.55}>
                  <div className="flex items-start gap-4">
                    <Clock size={18} className="mt-1 text-[#9a8141] shrink-0" />
                    <div>
                      <p className="text-[10px] tracking-[0.3em] uppercase text-[#b8a05a] mb-1">
                        Hours
                      </p>
                      <p className="text-sm text-[#eff1dc]/80">
                        Monday — Friday<br />
                        09:00 — 17:00 (WAT)
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={0.65}>
                <div className="mt-10 pt-8 border-t border-[#eff1dc]/12">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-[#b8a05a] mb-4">
                    Follow
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {FIRM.socials.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        className="text-[10px] tracking-[0.24em] uppercase border border-[#eff1dc]/25 px-4 py-2 hover:bg-[#9a8141] hover:border-[#9a8141] hover:text-[#0d0d15] transition-colors"
                      >
                        {s.label}
                      </a>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-7 lg:col-start-6">
              <Reveal delay={0.2}>
                <form
                  onSubmit={handleSubmit}
                  className="bg-[#1a1b1c] p-7 md:p-10 border border-[#eff1dc]/10"
                >
                  <h3 className="font-display text-2xl md:text-3xl text-[#eff1dc] mb-2">
                    Contact Us
                  </h3>
                  <p className="text-sm text-[#eff1dc]/55 mb-8">
                    All enquiries are treated in strict confidence.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <Field
                      label="Full name"
                      required
                      value={form.name}
                      onChange={(v) => update("name", v)}
                      placeholder="Your name"
                    />
                    <Field
                      label="Email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(v) => update("email", v)}
                      placeholder="you@example.com"
                    />
                    <Field
                      label="Telephone"
                      value={form.phone}
                      onChange={(v) => update("phone", v)}
                      placeholder="+234 ..."
                    />
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] tracking-[0.28em] uppercase text-[#9a8141]">
                        Practice Area
                      </label>
                      <select
                        value={form.practice}
                        onChange={(e) => update("practice", e.target.value)}
                        className="bg-transparent border-b border-[#eff1dc]/25 text-[#eff1dc] text-sm py-3 focus:border-[#b8a05a] outline-none transition-colors"
                      >
                        <option value="" className="bg-[#1a1b1c]">
                          Select a practice
                        </option>
                        {PRACTICE_AREAS.map((p) => (
                          <option key={p.id} value={p.title} className="bg-[#1a1b1c]">
                            {p.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-col gap-2">
                    <label className="text-[10px] tracking-[0.28em] uppercase text-[#9a8141]">
                      Matter outline
                    </label>
                    <textarea
                      required
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      rows={5}
                      placeholder="Briefly describe your matter…"
                      className="bg-transparent border-b border-[#eff1dc]/25 text-[#eff1dc] text-sm py-3 focus:border-[#b8a05a] outline-none transition-colors resize-none placeholder:text-[#eff1dc]/30"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitted}
                    className="mt-8 group inline-flex items-center gap-3 bg-[#9a8141] text-[#0d0d15] px-7 py-4 text-[11px] tracking-[0.26em] uppercase hover:bg-[#eff1dc] disabled:opacity-70 transition-colors duration-300"
                  >
                    {submitted ? (
                      <><Check size={15} /> Instruction received</>
                    ) : (
                      <>Submit <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" /></>
                    )}
                  </button>

                  {submitted && (
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 text-sm text-[#b8a05a]"
                    >
                      Thank you — our team will respond to your enquiry promptly.
                    </motion.p>
                  )}
                </form>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== MAP / LOCATION ===================== */}
      <section className="bg-[#eff1dc] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <Reveal>
                <span className="text-[10px] tracking-[0.4em] uppercase text-[#9a8141]">
                  — Find Us
                </span>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="mt-6 font-display font-light text-4xl md:text-5xl text-[#0d0d15] leading-[1.1]">
                  In the heart of
                  <span className="italic"> Ashi, Ibadan.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-6 text-base text-[#0d0d15]/70 leading-relaxed">
                  Our office is located at {FIRM.address.line1}, {FIRM.address.city}.
                  Clients are received by appointment — please reach out in
                  advance to arrange a consultation.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="mt-8 inline-flex items-center gap-3 text-[11px] tracking-[0.24em] uppercase border border-[#0d0d15] px-5 py-3 text-[#0d0d15]">
                  <MapPin size={14} className="text-[#9a8141]" />
                  {FIRM.address.line1}
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={0.2}>
                <div className="relative aspect-[4/3] bg-[#0d0d15] overflow-hidden border border-[#0d0d15]/15">
                  {/* Stylised map block */}
                  <div className="absolute inset-0 opacity-90">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(154,129,65,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(154,129,65,0.18) 1px, transparent 1px)",
                        backgroundSize: "44px 44px",
                      }}
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "radial-gradient(ellipse at 60% 55%, rgba(184,160,90,0.25) 0%, transparent 55%)",
                      }}
                    />
                    {/* Roads */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="none">
                      <path d="M0 180 Q 120 160 220 200 T 400 220" stroke="#9a8141" strokeWidth="2" fill="none" opacity="0.55" />
                      <path d="M50 0 Q 90 120 180 150 T 280 300" stroke="#9a8141" strokeWidth="1.5" fill="none" opacity="0.4" />
                      <path d="M0 80 L 400 110" stroke="#9a8141" strokeWidth="1" fill="none" opacity="0.3" />
                      <path d="M300 0 L 260 300" stroke="#9a8141" strokeWidth="1" fill="none" opacity="0.3" />
                    </svg>
                  </div>
                  {/* Pin */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
                    className="absolute top-[55%] left-[58%] -translate-x-1/2 -translate-y-1/2"
                  >
                    <div className="relative">
                      <span className="absolute -inset-4 rounded-full bg-[#9a8141]/30 animate-ping" />
                      <div className="relative h-5 w-5 rounded-full bg-[#9a8141] ring-4 ring-[#eff1dc]" />
                    </div>
                    <div className="absolute top-7 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#eff1dc] text-[#0d0d15] px-3 py-1.5 text-[10px] tracking-[0.18em] uppercase shadow-lg">
                      DEO · {FIRM.address.city}
                    </div>
                  </motion.div>
                  <div className="absolute bottom-4 left-4 text-[#eff1dc]/60 text-[10px] tracking-[0.24em] uppercase">
                    {FIRM.address.line1}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[10px] tracking-[0.28em] uppercase text-[#9a8141]">
        {label} {required && <span className="text-[#eff1dc]/40">*</span>}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="bg-transparent border-b border-[#eff1dc]/25 text-[#eff1dc] text-sm py-3 focus:border-[#b8a05a] outline-none transition-colors placeholder:text-[#eff1dc]/30"
      />
    </div>
  );
}
