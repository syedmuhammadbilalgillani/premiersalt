"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { COLORS, TESTIMONIALS } from "@/data/constants";
import { Divider } from "@/components/ui/divider";
import { Eyebrow, FadeUp } from "@/components/common";

const { IVORY, NAVY, SLATE, CORAL } = COLORS;

export function TestimonialsSection() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(
      () => setIdx((i) => (i + 1) % TESTIMONIALS.length),
      6500,
    );
    return () => clearInterval(t);
  }, []);
  const t = TESTIMONIALS[idx];
  return (
    <section className="py-24 px-8" style={{ background: IVORY }}>
      <Divider className="mb-20" />
      <FadeUp>
        <div className="max-w-3xl mx-auto text-center">
          <Eyebrow>Partners say</Eyebrow>
          <motion.blockquote
            key={idx}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "Fraunces,serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(1.1rem,2.5vw,1.4rem)",
              color: NAVY,
              lineHeight: 1.7,
              marginBottom: 32,
            }}
          >
            &quot;{t.q}&quot;
          </motion.blockquote>
          <motion.div
            key={`attr-${idx}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex items-center justify-center gap-4"
          >
            <motion.div
              className="w-9 h-9 rounded-full flex items-center justify-center"
              style={{
                background: CORAL,
                color: IVORY,
                fontFamily: "Inter,sans-serif",
                fontSize: 12,
                fontWeight: 600,
              }}
              whileHover={{ scale: 1.1 }}
            >
              {t.initials}
            </motion.div>
            <div className="text-left">
              <p
                style={{
                  fontFamily: "Inter,sans-serif",
                  fontWeight: 600,
                  fontSize: 13,
                  color: NAVY,
                }}
              >
                {t.name}
              </p>
              <p
                style={{
                  fontFamily: "Inter,sans-serif",
                  fontSize: 11,
                  color: SLATE,
                }}
              >
                {t.co}
              </p>
            </div>
          </motion.div>
          <div className="flex justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => setIdx(i)}
                animate={{
                  width: i === idx ? 20 : 6,
                  background: i === idx ? CORAL : "rgba(12,35,64,0.2)",
                }}
                transition={{ duration: 0.3 }}
                className="h-1.5 rounded-full"
                style={{ border: "none", cursor: "pointer" }}
              />
            ))}
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
