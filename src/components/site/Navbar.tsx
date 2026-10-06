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

  const go = (p: PageId) => {
    setPage(p);
    setMenuOpen(false);
  };

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
            <div className="relative h-11 w-11 md:h-12 md:w-12 overflow-hidden rounded-full ring-1 ring-[#9a8141]/30 group-hover:ring-[#9a8141] transition-all">
              <Image
                src="/assets/deo-logo.jpg"
                alt="DEO logo"
                fill
                sizes="48px"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col leading-none text-left">
              <span className="font-display text-lg md:text-xl tracking-[0.16em] text-[#0d0d15]">
                DERON &amp; EOL
              </span>
              <span className="mt-1 text-[8px] md:text-[9px] tracking-[0.42em] uppercase text-[#9a8141]">
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
                className="nav-link text-[11px] tracking-[0.28em] uppercase text-[#0d0d15]/80 hover:text-[#0d0d15] transition-colors py-1"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => go("contact")}
              className="hidden md:inline-flex items-center text-[11px] tracking-[0.24em] uppercase border border-[#0d0d15] px-5 py-2.5 text-[#0d0d15] hover:bg-[#0d0d15] hover:text-[#eff1dc] transition-colors duration-300"
            >
              Engage Us
            </button>
            <button
              onClick={() => setMenuOpen((o) => !o)}
              className="md:hidden p-2 text-[#0d0d15]"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

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
                  <span className="ml-3 text-xs tracking-[0.3em] text-[#9a8141]">
                    0{i + 1}
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
