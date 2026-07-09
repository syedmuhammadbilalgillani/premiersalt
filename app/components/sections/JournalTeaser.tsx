"use client";

import { motion } from "motion/react";
import { COLORS, POSTS } from "@/data/constants";
import { Divider } from "@/components/ui/divider";
import { useNav } from "@/hooks/useNav";
import { BrandMark, Eyebrow, TextLink, FadeUp } from "@/components/common";

const { IVORY, SAND, NAVY, SLATE, CORAL } = COLORS;

export function JournalTeaser() {
  const { navigate } = useNav();
  return (
    <section className="py-20 px-8" style={{ background: IVORY }}>
      <Divider className="mb-16" />
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <FadeUp>
            <BrandMark />
            <Eyebrow>Stories</Eyebrow>
            <h2
              style={{
                fontFamily: "Fraunces,serif",
                fontWeight: 400,
                fontSize: "clamp(1.6rem,3.5vw,2.6rem)",
                color: NAVY,
                lineHeight: 1.2,
              }}
            >
              From the journal
            </h2>
          </FadeUp>
          <TextLink onClick={() => navigate("journal")}>All articles</TextLink>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {POSTS.map((p, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <motion.article
                className="group cursor-pointer"
                onClick={() => navigate("journal")}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
              >
                <div
                  className="overflow-hidden mb-5"
                  style={{ background: SAND, aspectRatio: "4/3" }}
                >
                  <motion.img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.07 }}
                    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
                <p
                  style={{
                    fontFamily: "Inter,sans-serif",
                    fontWeight: 500,
                    fontSize: 9,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: CORAL,
                    marginBottom: 8,
                  }}
                >
                  {p.cat} · {p.date}
                </p>
                <h3
                  style={{
                    fontFamily: "Fraunces,serif",
                    fontWeight: 400,
                    fontSize: "clamp(1rem,1.8vw,1.15rem)",
                    color: NAVY,
                    lineHeight: 1.35,
                    marginBottom: 8,
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontFamily: "Inter,sans-serif",
                    fontSize: 13,
                    lineHeight: 1.7,
                    color: SLATE,
                  }}
                >
                  {p.excerpt}
                </p>
              </motion.article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
