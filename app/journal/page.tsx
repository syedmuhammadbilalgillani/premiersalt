"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/layout/CartDrawer";
import { COLORS } from "@/data/constants";
import { JournalPage as JournalPageComponent } from "@/components/pages/JournalPage";

export default function JournalPage() {
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
      <main>
        <JournalPageComponent />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
