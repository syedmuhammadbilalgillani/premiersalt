"use client";

import { motion } from "motion/react";
import { COLORS } from "@/data/constants";
import { IMG } from "@/data/images";
import { Divider } from "@/components/ui/divider";
import { FadeUp, FadeIn } from "@/components/common";

const { IVORY, NAVY } = COLORS;

export function QuoteMoment() {
  return (
    <section className="py-20 px-8" style={{ background: IVORY }}>
      <Divider className="mb-16" />
      <FadeUp>
        <div className="max-w-4xl mx-auto text-center">
          <p
            style={{
              fontFamily: "Fraunces,serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(1.2rem,3vw,2rem)",
              color: NAVY,
              lineHeight: 1.55,
              marginBottom: 16,
            }}
          >
            &quot;Maybe the finest seasoning <em>comes from a mountain,</em> not
            a factory.&quot;
          </p>
        </div>
      </FadeUp>
      <Divider className="mt-16 mb-16" />
      <FadeIn>
        <div
          className="max-w-6xl mx-auto relative overflow-hidden group cursor-pointer"
          style={{ aspectRatio: "16/9", background: NAVY }}
        >
          <motion.img
            src={IMG.cave}
            alt="Salt being mined at Khewra"
            className="w-full h-full object-cover"
            style={{ opacity: 0.75 }}
            whileHover={{ scale: 1.03, opacity: 0.65 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.button
            className="absolute bottom-6 right-6 flex items-center gap-2.5 px-5 py-2.5"
            whileHover={{ opacity: 0.8, scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            style={{
              border: "1px solid rgba(244,242,239,0.55)",
              color: IVORY,
              background: "rgba(12,35,64,0.4)",
              backdropFilter: "blur(6px)",
            }}
          >
            <svg width="12" height="14" viewBox="0 0 12 14" fill={IVORY}>
              <polygon points="0,0 12,7 0,14" />
            </svg>
            <span
              style={{
                fontFamily: "Inter,sans-serif",
                fontSize: 10,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
              }}
            >
              Watch the process
            </span>
          </motion.button>
        </div>
      </FadeIn>
    </section>
  );
}
