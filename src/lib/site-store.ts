"use client";

import { create } from "zustand";

export type PageId =
  | "home"
  | "about"
  | "practice"
  | "team"
  | "contact";

export const PAGE_ORDER: PageId[] = ["home", "about", "practice", "team", "contact"];

export const PAGE_LABELS: Record<PageId, string> = {
  home: "Home",
  about: "About",
  practice: "Practice",
  team: "Team",
  contact: "Contact",
};

type SiteState = {
  page: PageId;
  ready: boolean; // preloader finished
  setPage: (page: PageId) => void;
  setReady: (ready: boolean) => void;
  goNext: () => void;
  goPrev: () => void;
};

export const useSite = create<SiteState>((set, get) => ({
  page: "home",
  ready: false,
  setPage: (page) => {
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", `#${page}`);
    }
    set({ page });
    // scroll to top on page change (handled by page transition, but fallback)
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    }
  },
  setReady: (ready) => set({ ready }),
  goNext: () => {
    const { page } = get();
    const idx = PAGE_ORDER.indexOf(page);
    if (idx < PAGE_ORDER.length - 1) get().setPage(PAGE_ORDER[idx + 1]);
  },
  goPrev: () => {
    const { page } = get();
    const idx = PAGE_ORDER.indexOf(page);
    if (idx > 0) get().setPage(PAGE_ORDER[idx - 1]);
  },
}));

/** Read the initial page from the URL hash on first load. */
export function getInitialPage(): PageId {
  if (typeof window === "undefined") return "home";
  const hash = window.location.hash.replace("#", "") as PageId;
  if (PAGE_ORDER.includes(hash)) return hash;
  return "home";
}
