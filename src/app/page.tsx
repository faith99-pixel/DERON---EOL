"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Preloader } from "@/components/site/Preloader";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { HomePage } from "@/components/site/pages/HomePage";
import { AboutPage } from "@/components/site/pages/AboutPage";
import { PracticePage } from "@/components/site/pages/PracticePage";
import { TeamPage } from "@/components/site/pages/TeamPage";
import { ContactPage } from "@/components/site/pages/ContactPage";
import { useSite, type PageId } from "@/lib/site-store";

export default function Home() {
  const { page, setPage, ready } = useSite();

  // Sync the store with the URL hash on mount, then keep listening for changes.
  useEffect(() => {
    const syncFromHash = () => {
      const next = (window.location.hash.replace("#", "") || "home") as PageId;
      setPage(next);
    };
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, [setPage]);

  return (
    <>
      <Preloader />

      <div
        className={`min-h-screen flex flex-col bg-[#eff1dc] transition-opacity duration-700 ${
          ready ? "opacity-100" : "opacity-0"
        }`}
      >
        <Navbar />

        <main className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, filter: "blur(6px)" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              {page === "home" && <HomePage />}
              {page === "about" && <AboutPage />}
              {page === "practice" && <PracticePage />}
              {page === "team" && <TeamPage />}
              {page === "contact" && <ContactPage />}
            </motion.div>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </>
  );
}
