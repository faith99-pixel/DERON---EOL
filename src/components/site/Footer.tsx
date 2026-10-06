"use client";

import Image from "next/image";
import { useSite, PAGE_LABELS, PAGE_ORDER, type PageId } from "@/lib/site-store";
import { FIRM, PRACTICE_AREAS } from "@/lib/content";
import { MapPin, Mail, ArrowUpRight } from "lucide-react";

export function Footer() {
  const { setPage, setPage: set } = useSite();
  const go = (p: PageId) => set(p);

  return (
    <footer className="bg-[#0d0d15] text-[#eff1dc] mt-auto">
      <div className="mx-auto max-w-7xl px-5 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-full ring-1 ring-[#9a8141]/40">
                <Image
                  src="/assets/deo-logo.jpg"
                  alt="DEO logo"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-xl tracking-[0.16em]">
                  DERON &amp; EOL
                </span>
                <span className="mt-1 text-[9px] tracking-[0.42em] uppercase text-[#b8a05a]">
                  Law Practice
                </span>
              </div>
            </div>
            <p className="mt-6 text-sm text-[#eff1dc]/65 leading-relaxed max-w-sm">
              A full-service law firm in Ibadan, Nigeria — advising with depth of
              experience across corporate, real estate, governance, public policy
              and litigation.
            </p>
            <p className="mt-6 text-[10px] tracking-[0.34em] uppercase text-[#9a8141]">
              {FIRM.tagline}
            </p>
          </div>

          {/* Navigate */}
          <div className="md:col-span-2">
            <h4 className="text-[10px] tracking-[0.32em] uppercase text-[#b8a05a] mb-5">
              Navigate
            </h4>
            <ul className="space-y-3">
              {PAGE_ORDER.map((p) => (
                <li key={p}>
                  <button
                    onClick={() => go(p)}
                    className="text-sm text-[#eff1dc]/75 hover:text-[#eff1dc] transition-colors"
                  >
                    {PAGE_LABELS[p]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] tracking-[0.32em] uppercase text-[#b8a05a] mb-5">
              Practice
            </h4>
            <ul className="space-y-3">
              {PRACTICE_AREAS.map((pa) => (
                <li key={pa.id}>
                  <button
                    onClick={() => setPage("practice")}
                    className="text-sm text-[#eff1dc]/75 hover:text-[#eff1dc] transition-colors text-left"
                  >
                    {pa.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] tracking-[0.32em] uppercase text-[#b8a05a] mb-5">
              Contact
            </h4>
            <div className="space-y-4 text-sm text-[#eff1dc]/75">
              <p className="flex items-start gap-2">
                <MapPin size={14} className="mt-1 text-[#9a8141] shrink-0" />
                <span>
                  {FIRM.address.line1}<br />
                  {FIRM.address.city}, {FIRM.address.country}
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={14} className="text-[#9a8141] shrink-0" />
                <a
                  href={`mailto:${FIRM.email}`}
                  className="hover:text-[#eff1dc] transition-colors"
                >
                  {FIRM.email}
                </a>
              </p>
            </div>
            <button
              onClick={() => setPage("contact")}
              className="mt-6 inline-flex items-center gap-2 text-[11px] tracking-[0.24em] uppercase text-[#eff1dc] border border-[#eff1dc]/30 px-4 py-2.5 hover:bg-[#9a8141] hover:border-[#9a8141] transition-colors"
            >
              Engage Us
              <ArrowUpRight size={13} />
            </button>
          </div>
        </div>

        {/* Bottom rule */}
        <div className="mt-16 pt-8 border-t border-[#eff1dc]/12 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-xs text-[#eff1dc]/50">
            © {new Date().getFullYear()} {FIRM.name}. All rights reserved.
          </p>
          <p className="text-xs text-[#eff1dc]/50">
            Practising since {FIRM.establishedPracticing} · Firm registered {FIRM.registered}
          </p>
        </div>
      </div>
    </footer>
  );
}
