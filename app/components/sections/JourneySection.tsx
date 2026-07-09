"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { COLORS, STEPS } from "@/data/constants";
import { Divider } from "@/components/ui/divider";
import { BrandMark, Eyebrow, FadeUp } from "@/components/common";

const { IVORY, NAVY, SLATE, CORAL, CHARCOAL } = COLORS;

export function JourneySection() {
  const [open, setOpen] = useState(0);
  return (
    <section className="py-20 px-8" style={{ background: IVORY }}>
      <Divider className="mb-16" />
      <div className="max-w-7xl mx-auto">
        <FadeUp className="mb-12">
          <BrandMark />
          <Eyebrow>Our Process</Eyebrow>
          <h2
            style={{
              fontFamily: "Fraunces,serif",
              fontWeight: 400,
              fontSize: "clamp(1.6rem,3.5vw,2.6rem)",
              color: NAVY,
              lineHeight: 1.2,
            }}
          >
            The journey of salt
          </h2>
        </FadeUp>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            {STEPS.map((s, i) => (
              <motion.div
                key={i}
                className="border-b cursor-pointer"
                style={{ borderColor: "rgba(12,35,64,0.1)" }}
                onClick={() => setOpen(i)}
                whileHover={{ x: 2 }}
                transition={{ type: "spring", stiffness: 300, damping: 28 }}
              >
                <div className="flex items-center justify-between py-5">
                  <div className="flex items-center gap-5">
                    <span
                      style={{
                        fontFamily: "Inter,sans-serif",
                        fontSize: 10,
                        letterSpacing: "0.1em",
                        color: open === i ? CORAL : SLATE,
                        transition: "color 0.25s",
                      }}
                    >
                      0{i + 1}
                    </span>
                    <span
                      style={{
                        fontFamily: "Fraunces,serif",
                        fontWeight: 400,
                        fontSize: "clamp(1rem,1.8vw,1.2rem)",
                        color: open === i ? NAVY : CHARCOAL,
                        transition: "color 0.25s",
                      }}
                    >
                      {s.label}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: open === i ? 180 : 0 }}
                    transition={{ duration: 0.28 }}
                  >
                    <ChevronDown size={14} style={{ color: SLATE }} />
                  </motion.div>
                </div>
                <motion.div
                  initial={false}
                  animate={{
                    height: open === i ? "auto" : 0,
                    opacity: open === i ? 1 : 0,
                  }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  style={{ overflow: "hidden" }}
                >
                  <p
                    className="pb-6 pr-4"
                    style={{
                      fontFamily: "Inter,sans-serif",
                      fontSize: 13,
                      lineHeight: 1.75,
                      color: SLATE,
                    }}
                  >
                    {s.desc}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
          <div
            className="lg:sticky lg:top-28 relative overflow-hidden rounded-sm"
            style={{ aspectRatio: "4/3", background: NAVY }}
          >
            {STEPS.map((s, i) => (
              <motion.img
                key={i}
                src={s.img}
                alt={s.label}
                className="absolute inset-0 w-full h-full object-cover"
                animate={{
                  opacity: open === i ? 1 : 0,
                  scale: open === i ? 1 : 1.03,
                }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
