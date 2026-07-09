"use client";

import { useState, useEffect, useRef } from "react";
import {
  Search,
  User,
  ShoppingBag,
  Menu,
  X,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import { COLORS } from "@/data/constants";
import { IMG } from "@/data/images";
import { useApp } from "@/context/AppContext";

const NAV_ITEMS = [
  "Shop",
  "Wholesale & Export",
  "About",
  "Journal",
  "Contact",
] as const;

const NAV_PAGES: Record<string, any> = {
  Shop: "shop",
  "Wholesale & Export": "wholesale",
  About: "about",
  Journal: "journal",
  Contact: "contact",
};

const MEGA: Record<
  string,
  { cols: { title: string; img: string; links: { label: string }[] }[] }
> = {
  Shop: {
    cols: [
      {
        title: "Edible & Gourmet",
        img: IMG.gourmet,
        links: [
          { label: "Fine Grain Salt" },
          { label: "Coarse Salt" },
          { label: "Grinders" },
          { label: "Blends" },
        ],
      },
      {
        title: "Salt Lamps",
        img: IMG.lamp,
        links: [
          { label: "Natural" },
          { label: "Carved" },
          { label: "USB" },
          { label: "Sets" },
        ],
      },
      {
        title: "Bath & Spa",
        img: IMG.spa,
        links: [
          { label: "Bath Salts" },
          { label: "Scrubs" },
          { label: "Soaks" },
          { label: "Gift Kits" },
        ],
      },
      {
        title: "Grill & Slabs",
        img: IMG.texture,
        links: [
          { label: "Grill Plates" },
          { label: "Serving Slabs" },
          { label: "Blocks" },
          { label: "Shot Glasses" },
        ],
      },
    ],
  },
  "Wholesale & Export": {
    cols: [
      {
        title: "Private Labeling",
        img: IMG.packaging,
        links: [
          { label: "Custom Branding" },
          { label: "MOQ Details" },
          { label: "Samples" },
          { label: "Label Design" },
        ],
      },
      {
        title: "Global Presence",
        img: IMG.mountain,
        links: [
          { label: "Export Markets" },
          { label: "Logistics" },
          { label: "Certifications" },
          { label: "Terms" },
        ],
      },
    ],
  },
  About: {
    cols: [
      {
        title: "Our Story",
        img: IMG.crystals,
        links: [
          { label: "Heritage Since 1980" },
          { label: "Mission" },
          { label: "Team" },
          { label: "Awards" },
        ],
      },
      {
        title: "Khewra Range",
        img: IMG.cave,
        links: [
          { label: "Mine Overview" },
          { label: "Geology" },
          { label: "Sustainability" },
          { label: "Tour" },
        ],
      },
    ],
  },
};

export function Header({
  scrolled,
  isHero,
}: {
  scrolled: boolean;
  isHero: boolean;
}) {
  const { navigate, cart, setCartOpen } = useApp();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const totalItems = cart.reduce((s, i) => s + i.qty, 0);

  useEffect(() => {
    setMobile(false);
    setOpenMenu(null);
  }, []);

  const enter = (label: string) => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    setOpenMenu(MEGA[label] ? label : null);
  };

  const leave = () => {
    leaveTimer.current = setTimeout(() => setOpenMenu(null), 200);
  };

  const overHero = isHero && !scrolled;
  const textColor = overHero ? COLORS.IVORY : COLORS.NAVY;
  const subColor = overHero ? "rgba(244,242,239,0.6)" : COLORS.CORAL;
  const bgStyle: React.CSSProperties = overHero
    ? {
        background: "rgba(12,35,64,0.22)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
      }
    : {
        background: COLORS.IVORY,
        borderBottom: `1px solid rgba(12,35,64,0.08)`,
        boxShadow: scrolled ? "0 2px 20px rgba(12,35,64,0.07)" : "none",
      };

  return (
    <>
      <header
        style={{
          ...bgStyle,
          transition: "background 0.3s ease, box-shadow 0.3s ease",
        }}
        className="z-40"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center h-[60px] gap-4">
          {/* Logo */}
          <button
            onClick={() => navigate("home")}
            className="flex flex-col leading-none text-left flex-shrink-0 mr-6"
          >
            <span
              style={{
                fontFamily: "Fraunces,serif",
                fontWeight: 600,
                fontSize: 18,
                color: textColor,
                letterSpacing: "-0.01em",
                lineHeight: 1.1,
              }}
            >
              PREMIER
            </span>
            <span
              style={{
                fontFamily: "Inter,sans-serif",
                fontWeight: 400,
                fontSize: 8.5,
                letterSpacing: "0.3em",
                color: subColor,
                textTransform: "uppercase",
              }}
            >
              SALT INDUSTRIES
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
            {NAV_ITEMS.map((label) => (
              <div key={label} className="relative">
                <button
                  onClick={() => navigate(NAV_PAGES[label])}
                  className="relative flex items-center gap-0.5 px-3 py-2"
                  style={{
                    fontFamily: "Inter,sans-serif",
                    fontWeight: 400,
                    fontSize: 11,
                    letterSpacing: "0.13em",
                    textTransform: "uppercase",
                    color: textColor,
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  {label}
                  {MEGA[label] && (
                    <ChevronDown size={9} style={{ opacity: 0.5 }} />
                  )}
                </button>
              </div>
            ))}
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-1 ml-auto">
            <button
              onClick={() => setSearchOpen((v) => !v)}
              className="hidden lg:flex w-9 h-9 items-center justify-center rounded-sm"
            >
              {searchOpen ? (
                <X size={15} style={{ color: textColor }} strokeWidth={1.5} />
              ) : (
                <Search
                  size={15}
                  style={{ color: textColor }}
                  strokeWidth={1.5}
                />
              )}
            </button>
            <button
              onClick={() => setCartOpen(true)}
              className="relative flex w-9 h-9 items-center justify-center rounded-sm"
            >
              <ShoppingBag
                size={15}
                style={{ color: textColor }}
                strokeWidth={1.5}
              />
              {totalItems > 0 && (
                <span
                  className="absolute top-1 right-1 min-w-[14px] h-3.5 px-0.5 rounded-full flex items-center justify-center"
                  style={{
                    background: COLORS.CORAL,
                    color: COLORS.IVORY,
                    fontSize: 8,
                    fontWeight: 700,
                  }}
                >
                  {totalItems}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobile((v) => !v)}
              className="lg:hidden flex w-9 h-9 items-center justify-center rounded-sm"
            >
              {mobile ? (
                <X size={17} style={{ color: textColor }} strokeWidth={1.5} />
              ) : (
                <Menu
                  size={17}
                  style={{ color: textColor }}
                  strokeWidth={1.5}
                />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 39,
            background: COLORS.NAVY,
            transform: mobile ? "translateX(0)" : "translateX(-100%)",
            transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1)",
            paddingTop: 96,
            overflowY: "auto",
          }}
        >
          <div className="px-8 pb-10">
            {NAV_ITEMS.map((label) => (
              <div key={label} style={{ borderBottom: "1px solid rgba(244,242,239,0.08)" }}>
                <button
                  onClick={() => {
                    navigate(NAV_PAGES[label]);
                    setMobile(false);
                  }}
                  className="flex items-center justify-between w-full py-5"
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Fraunces,serif",
                      fontWeight: 400,
                      fontSize: "clamp(1.3rem,5vw,1.9rem)",
                      color: COLORS.IVORY,
                    }}
                  >
                    {label}
                  </span>
                  <ArrowRight size={15} style={{ color: "rgba(244,242,239,0.3)" }} />
                </button>
              </div>
            ))}
          </div>
        </div>
        {mobile && (
          <div className="fixed inset-0 z-38" onClick={() => setMobile(false)} />
        )}
      </header>
    </>
  );
}
