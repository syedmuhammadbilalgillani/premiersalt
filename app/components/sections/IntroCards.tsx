"use client";

import { motion } from "motion/react";
import { COLORS } from "@/data/constants";
import { IMG } from "@/data/images";
import { useNav, PageName } from "@/hooks/useNav";
import { FadeUp, TextLink } from "@/components/common";

const { IVORY, SAND, NAVY, SLATE } = COLORS;

export function IntroCards() {
  const { navigate } = useNav();
  return (
    <section className="py-24 px-8" style={{ background: IVORY }}>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        {[
          {
            img: IMG.story,
            title: "Our Story",
            body: "Premier Salt Industries has spent four decades perfecting the art of bringing Himalayan salt from Pakistan's ancient mountains to tables and homes across 90 countries.",
            link: "Discover more",
            page: "about" as PageName,
          },
          {
            img: IMG.packaging,
            title: "Bulk & Private Label",
            body: "Whether you're building a wellness brand or supplying a supermarket chain, our private-label program handles branding, certification, and logistics from day one.",
            link: "Explore wholesale",
            page: "wholesale" as PageName,
          },
        ].map((c, idx) => (
          <FadeUp key={c.title} delay={idx * 0.15}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
            >
              <div
                className="aspect-[4/3] overflow-hidden mb-7 cursor-pointer"
                style={{ background: SAND }}
                onClick={() => navigate(c.page)}
              >
                <motion.img
                  src={c.img}
                  alt={c.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
              <p
                style={{
                  fontFamily: "Fraunces,serif",
                  fontWeight: 400,
                  fontSize: 20,
                  color: NAVY,
                  marginBottom: 10,
                  lineHeight: 1.25,
                }}
              >
                {c.title}
              </p>
              <p
                style={{
                  fontFamily: "Inter,sans-serif",
                  fontSize: 13,
                  lineHeight: 1.75,
                  color: SLATE,
                  marginBottom: 14,
                }}
              >
                {c.body}
              </p>
              <TextLink onClick={() => navigate(c.page)}>{c.link}</TextLink>
            </motion.div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
