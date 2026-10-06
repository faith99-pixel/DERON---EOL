"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSite, PAGE_LABELS, PAGE_ORDER, type PageId } from "@/lib/site-store";
import { FIRM } from "@/lib/content";
import { Menu, X } from "lucide-react";

const NAV_ITEMS: { id: PageId; label: string }[] = PAGE_ORDER.map((id) => ({
  id,
  label: PAGE_LABELS[id],
}));

// Pages whose hero is dark — navbar must use light text over them when
// transparent (not yet scrolled).
const DARK_HERO_PAGES: PageId[] = ["home", "about"];

export function Navbar() {
  const { page, setPage } = useSite();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // When the navbar is transparent AND the current page has a dark hero,
  // the text/logo must be light so they remain visible.
  const lightText = !scrolled && DARK_HERO_PAGES.includes(page);

  const go = (p: PageId) => {
    setPage(p);
    setMenuOpen(false);
  };

  // Color tokens that flip with the navbar state
  const ink = lightText ? "#eff1dc" : "#0d0d15";
  const inkSoft = lightText ? "rgba(239, 241, 220, 0.8)" : "rgba(13, 13, 21, 0.8)";
  const inkHover = lightText ? "#eff1dc" : "#0d0d15";
  const gold = lightText ? "#b8a05a" : "#9a8141";

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#eff1dc]/92 backdrop-blur-md border-b border-[#0d0d15]/10 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 md:px-10 flex items-center justify-between">
          {/* Logo + name */}
          <button
            onClick={() => go("home")}
            className="flex items-center gap-3 group"
            aria-label="Deron & Eol Law Practice — home"
          >
            <div
              className="relative h-11 w-11 md:h-12 md:w-12 overflow-hidden rounded-full transition-all duration-500"
              style={{
                boxShadow: `0 0 0 1px ${
                  lightText ? "rgba(184, 160, 90, 0.5)" : "rgba(154, 129, 65, 0.35)"
                }`,
              }}
            >
              <Image
                src="/assets/deo-logo.jpg"
                alt="DEO logo"
                fill
                sizes="48px"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col leading-none text-left">
              <span
                className="font-display text-lg md:text-xl tracking-[0.16em] transition-colors duration-500"
                style={{ color: menuOpen ? "#eff1dc" : ink }}
              >
                DERON &amp; EOL
              </span>
              <span
                className="mt-1 text-[8px] md:text-[9px] tracking-[0.42em] uppercase transition-colors duration-500"
                style={{ color: menuOpen ? "#b8a05a" : gold }}
              >
                Law Practice
              </span>
            </div>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-9">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                data-active={page === item.id}
                className="nav-link text-[11px] tracking-[0.28em] uppercase py-1 transition-colors"
                style={{
                  color: page === item.id ? inkHover : inkSoft,
                  // The nav-link underline uses var(--gold); set inline
                  // via a style tag override below.
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => go("contact")}
              className="hidden md:inline-flex items-center text-[11px] tracking-[0.24em] uppercase px-5 py-2.5 transition-colors duration-300"
              style={{
                border: `1px solid ${lightText ? "rgba(239, 241, 220, 0.5)" : "#0d0d15"}`,
                color: ink,
                backgroundColor: "transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = lightText
                  ? "rgba(184, 160, 90, 0.95)"
                  : "#0d0d15";
                e.currentTarget.style.color = lightText
                  ? "#0d0d15"
                  : "#eff1dc";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = ink;
              }}
            >
              Engage Us
            </button>
            <button
              onClick={() => setMenuOpen((o) => !o)}
              className="md:hidden p-2 transition-colors"
              style={{ color: menuOpen ? "#eff1dc" : ink }}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Override the nav-link underline color to match navbar state */}
      <style>{`
        header .nav-link::after {
          background: ${gold} !important;
        }
      `}</style>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#0d0d15] text-[#eff1dc] md:hidden flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex-1 flex flex-col justify-center px-8">
              {NAV_ITEMS.map((item, i) => (
                <motion.button
                  key={item.id}
                  onClick={() => go(item.id)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.5 }}
                  className={`text-left py-5 border-b border-[#eff1dc]/10 ${
                    page === item.id ? "text-[#b8a05a]" : "text-[#eff1dc]"
                  }`}
                >
                  <span className="font-display text-4xl tracking-wide">
                    {item.label}
                  </span>
                </motion.button>
              ))}
            </div>
            <div className="px-8 pb-12 pt-6 text-[#eff1dc]/70 text-sm">
              <p className="font-display text-lg text-[#eff1dc] mb-1">
                {FIRM.address.line1}
              </p>
              <p>{FIRM.address.city}, {FIRM.address.country}</p>
              <p className="mt-3 text-[#9a8141] tracking-[0.18em] text-xs uppercase">
                {FIRM.email}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
