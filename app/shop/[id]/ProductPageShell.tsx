"use client";

import { useState, useEffect, ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/layout/CartDrawer";
import { COLORS } from "@/data/constants";

// Client-only shell providing the sticky announcement bar + header (with
// scroll-aware styling) shared across every route. The product detail page
// itself is a server component (it needs to look up the product from an
// async `params`), so this small client wrapper carries just the scroll
// state and layout chrome.
export function ProductPageShell({ children }: { children: ReactNode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <div style={{ fontFamily: "Inter,sans-serif", background: COLORS.IVORY }}>
      <div className="sticky top-0 z-40">
        <AnnouncementBar />
        <Header scrolled={scrolled} isHero={false} />
      </div>
      <main>{children}</main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
