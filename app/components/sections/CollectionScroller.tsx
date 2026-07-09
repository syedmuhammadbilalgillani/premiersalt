"use client";

import { useCallback, useRef, useState } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { COLORS, COLLECTION } from "@/data/constants";
import { Divider } from "@/components/ui/divider";
import { useNav } from "@/hooks/useNav";
import { BrandMark, Eyebrow, TextLink, FadeUp } from "@/components/common";

const { IVORY, NAVY, SLATE, SAND, CORAL } = COLORS;

export function CollectionScroller() {
  const { navigate } = useNav();
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const scroll = (d: number) =>
    ref.current?.scrollBy({ left: d * 260, behavior: "smooth" });
  const onScroll = useCallback(() => {
    if (!ref.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = ref.current;
    setProgress(scrollLeft / (scrollWidth - clientWidth));
  }, []);
  return (
    <section className="py-20 px-8" style={{ background: IVORY }}>
      <Divider className="mb-16" />
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between mb-10 gap-6">
          <FadeUp>
            <BrandMark />
            <Eyebrow>Our Collection</Eyebrow>
            <h2
              style={{
                fontFamily: "Fraunces,serif",
                fontWeight: 400,
                fontSize: "clamp(1.6rem,3.5vw,2.6rem)",
                color: NAVY,
                lineHeight: 1.2,
              }}
            >
              Salt, as nature{" "}
              <em style={{ fontStyle: "italic" }}>intended it</em>
            </h2>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p
              style={{
                fontFamily: "Inter,sans-serif",
                fontSize: 13,
                lineHeight: 1.7,
                color: SLATE,
                maxWidth: 300,
                paddingTop: 44,
              }}
            >
              Each category drawn from the same source — 250-million-year-old
              deposits — shaped for a different purpose.
            </p>
          </FadeUp>
        </div>
        <div
          ref={ref}
          onScroll={onScroll}
          className="flex gap-4 overflow-x-auto pb-1 select-none"
          style={{ scrollbarWidth: "none", cursor: "grab" }}
          onMouseDown={(e) => (e.currentTarget.style.cursor = "grabbing")}
          onMouseUp={(e) => (e.currentTarget.style.cursor = "grab")}
        >
          {COLLECTION.map((c, i) => (
            <motion.div
              key={i}
              className="flex-shrink-0 w-48 sm:w-56"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
            >
              <div
                className="aspect-square overflow-hidden mb-4 cursor-pointer"
                style={{ background: SAND }}
                onClick={() => navigate("shop")}
              >
                <motion.img
                  src={c.img}
                  alt={c.label}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.07 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
              <p
                style={{
                  fontFamily: "Fraunces,serif",
                  fontWeight: 400,
                  fontSize: 15,
                  color: NAVY,
                  marginBottom: 4,
                }}
              >
                {c.label}
              </p>
              <p
                style={{
                  fontFamily: "Inter,sans-serif",
                  fontSize: 12,
                  color: SLATE,
                  marginBottom: 8,
                  lineHeight: 1.5,
                }}
              >
                {c.sub}
              </p>
              <TextLink onClick={() => navigate("shop")}>
                Shop {c.label.toLowerCase()}
              </TextLink>
            </motion.div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={() => scroll(-1)}
            className="w-8 h-8 flex items-center justify-center border transition-opacity hover:opacity-50"
            style={{ borderColor: "rgba(12,35,64,0.25)", color: NAVY }}
          >
            <ChevronLeft size={14} />
          </button>
          <div
            className="w-40 h-px relative"
            style={{ background: "rgba(12,35,64,0.12)" }}
          >
            <div
              className="absolute top-0 left-0 h-full transition-all duration-300"
              style={{ width: `${progress * 100}%`, background: CORAL }}
            />
          </div>
          <button
            onClick={() => scroll(1)}
            className="w-8 h-8 flex items-center justify-center border transition-opacity hover:opacity-50"
            style={{ borderColor: "rgba(12,35,64,0.25)", color: NAVY }}
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}
