"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { COLORS } from "@/data/constants";
import { IMG } from "@/data/images";
import { useNav } from "@/hooks/useNav";

const { NAVY, IVORY, CORAL, CHARCOAL } = COLORS;

export function Hero() {
  const { navigate } = useNav();
  const [item, setItem] = useState(0);
  const [ships, setShips] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const ITEMS = ["Edible Salt", "Lamps & Decor", "Spa & Bath", "Bulk Export"];
  const SHIPS = ["Pakistan", "Worldwide"];

  useEffect(() => {
    const h = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "100dvh", minHeight: 560, background: NAVY }}
    >
      {/* Parallax background */}
      <img
        src={IMG.hero}
        alt="Himalayan pink salt crystals catching warm golden light"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          opacity: 0.45,
          transform: `scale(1.08) translateY(${scrollY * 0.25}px)`,
          willChange: "transform",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(170deg, rgba(12,35,64,0.35) 0%, rgba(12,35,64,0.72) 100%)",
        }}
      />

      <div className="relative z-10 h-full flex flex-col items-center justify-end pb-20 sm:pb-28 px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontFamily: "Inter,sans-serif",
            fontWeight: 400,
            fontSize: 10,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(244,242,239,0.6)",
            marginBottom: 20,
          }}
        >
          Mined at Khewra, Punjab · Est. 1980
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "Fraunces,serif",
            fontWeight: 600,
            fontSize: "clamp(2.2rem,7vw,6.5rem)",
            color: IVORY,
            lineHeight: 1.08,
            maxWidth: 860,
            letterSpacing: "-0.01em",
            marginBottom: 20,
          }}
        >
          <em style={{ fontStyle: "italic", fontWeight: 400 }}>Maybe</em> the
          purest salt{" "}
          <em style={{ fontStyle: "italic", fontWeight: 400 }}>
            isn&apos;t refined at all
          </em>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          style={{
            fontFamily: "Inter,sans-serif",
            fontWeight: 300,
            fontSize: 14,
            color: "rgba(244,242,239,0.65)",
            marginBottom: 36,
          }}
        >
          Hand-mined from the Khewra Salt Range, delivered to your door.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center w-full max-w-2xl"
          style={{
            background: "rgba(244,242,239,0.1)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(244,242,239,0.2)",
          }}
        >
          <div
            className="flex items-center gap-2 px-5 py-3 flex-1 min-w-0 sm:border-r border-b sm:border-b-0"
            style={{ borderColor: "rgba(244,242,239,0.2)" }}
          >
            <span
              style={{
                fontFamily: "Inter,sans-serif",
                fontSize: 10,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(244,242,239,0.5)",
                whiteSpace: "nowrap",
              }}
            >
              Looking for
            </span>
            <select
              value={item}
              onChange={(e) => setItem(Number(e.target.value))}
              className="bg-transparent outline-none flex-1 min-w-0 truncate"
              style={{
                fontFamily: "Inter,sans-serif",
                fontSize: 13,
                color: IVORY,
                border: "none",
                cursor: "pointer",
              }}
            >
              {ITEMS.map((v, i) => (
                <option
                  key={i}
                  value={i}
                  style={{ color: CHARCOAL, background: IVORY }}
                >
                  {v}
                </option>
              ))}
            </select>
          </div>
          <div
            className="flex items-center gap-2 px-5 py-3 sm:border-r border-b sm:border-b-0"
            style={{ borderColor: "rgba(244,242,239,0.2)" }}
          >
            <span
              style={{
                fontFamily: "Inter,sans-serif",
                fontSize: 10,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(244,242,239,0.5)",
                whiteSpace: "nowrap",
              }}
            >
              Ships to
            </span>
            <select
              value={ships}
              onChange={(e) => setShips(Number(e.target.value))}
              className="bg-transparent outline-none"
              style={{
                fontFamily: "Inter,sans-serif",
                fontSize: 13,
                color: IVORY,
                border: "none",
                cursor: "pointer",
              }}
            >
              {SHIPS.map((v, i) => (
                <option
                  key={i}
                  value={i}
                  style={{ color: CHARCOAL, background: IVORY }}
                >
                  {v}
                </option>
              ))}
            </select>
          </div>
          <motion.button
            onClick={() => navigate("shop")}
            whileHover={{ opacity: 0.85 }}
            whileTap={{ scale: 0.97 }}
            style={{
              background: CORAL,
              color: IVORY,
              padding: "12px 24px",
              fontFamily: "Inter,sans-serif",
              fontWeight: 500,
              fontSize: 10,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
              border: "none",
              cursor: "pointer",
            }}
            className="w-full sm:w-auto"
          >
            View All Products
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.2, duration: 0.7 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span
          style={{
            fontFamily: "Inter,sans-serif",
            fontSize: 9,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: IVORY,
          }}
        >
          Explore more
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <ChevronDown size={13} style={{ color: IVORY }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
