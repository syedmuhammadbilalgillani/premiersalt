"use client";

import { motion } from "motion/react";
import { COLORS, CATS } from "@/data/constants";
import { Divider } from "@/components/ui/divider";
import { useNav } from "@/hooks/useNav";
import { BrandMark, Eyebrow, FadeUp } from "@/components/common";

const { IVORY, NAVY, CORAL } = COLORS;

function CatCard({
  cat,
}: {
  cat: { label: string; sub: string; img: string; span: string };
}) {
  const { navigate } = useNav();
  return (
    <motion.div
      className={`relative overflow-hidden cursor-pointer ${cat.span}`}
      style={{ background: NAVY, minHeight: 220 }}
      whileHover="hov"
      onClick={() => navigate("shop")}
      whileTap={{ scale: 0.98 }}
    >
      <motion.img
        src={cat.img}
        alt={cat.label}
        className="absolute inset-0 w-full h-full object-cover"
        variants={{ hov: { scale: 1.06, opacity: 0.58 } }}
        initial={{ scale: 1, opacity: 0.78 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(12,35,64,0.75) 0%, rgba(12,35,64,0.15) 60%)",
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <p
          style={{
            fontFamily: "Fraunces,serif",
            fontWeight: 400,
            fontSize: "clamp(1rem,2vw,1.4rem)",
            color: IVORY,
            lineHeight: 1.25,
            marginBottom: 4,
          }}
        >
          {cat.label}
        </p>
        <p
          style={{
            fontFamily: "Inter,sans-serif",
            fontSize: 11,
            color: "rgba(244,242,239,0.6)",
            marginBottom: 10,
          }}
        >
          {cat.sub}
        </p>
        <motion.span
          variants={{ hov: { color: CORAL, x: 4 } }}
          initial={{ color: "rgba(244,242,239,0.7)", x: 0 }}
          transition={{ duration: 0.25 }}
          style={{
            fontFamily: "Inter,sans-serif",
            fontSize: 10,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            display: "inline-block",
          }}
        >
          Shop now →
        </motion.span>
      </div>
    </motion.div>
  );
}

export function CategoriesSection() {
  return (
    <section className="py-20 px-8" style={{ background: IVORY }}>
      <Divider className="mb-16" />
      <div className="max-w-7xl mx-auto">
        <FadeUp className="mb-10">
          <BrandMark />
          <Eyebrow>Collections</Eyebrow>
          <h2
            style={{
              fontFamily: "Fraunces,serif",
              fontWeight: 400,
              fontSize: "clamp(1.6rem,3.5vw,2.6rem)",
              color: NAVY,
              lineHeight: 1.2,
            }}
          >
            Explore our product world
          </h2>
        </FadeUp>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-3"
          style={{ minHeight: 560 }}
        >
          {CATS.map((cat) => (
            <CatCard key={cat.label} cat={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}
