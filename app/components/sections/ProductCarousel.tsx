"use client";

import { useCallback, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { COLORS } from "@/data/constants";
import { ALL_PRODUCTS } from "@/data/products";
import { Divider } from "@/components/ui/divider";
import { useNav } from "@/hooks/useNav";
import { BrandMark, Eyebrow, TextLink, FadeUp } from "@/components/common";
import { ProductCard } from "@/components/product/ProductCard";

const { IVORY, NAVY, CORAL } = COLORS;

export function ProductCarousel() {
  const { navigate } = useNav();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const scroll = (d: number) =>
    scrollRef.current?.scrollBy({ left: d * 300, behavior: "smooth" });
  const onScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setProgress(scrollLeft / (scrollWidth - clientWidth));
  }, []);
  return (
    <section className="py-20 px-8" style={{ background: IVORY }}>
      <Divider className="mb-16" />
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <FadeUp>
            <BrandMark />
            <Eyebrow>Top Sellers</Eyebrow>
            <h2
              style={{
                fontFamily: "Fraunces,serif",
                fontWeight: 400,
                fontSize: "clamp(1.6rem,3.5vw,2.6rem)",
                color: NAVY,
                lineHeight: 1.2,
              }}
            >
              Bestsellers
            </h2>
          </FadeUp>
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex gap-3">
              {[ChevronLeft, ChevronRight].map((Icon, i) => (
                <button
                  key={i}
                  onClick={() => scroll(i === 0 ? -1 : 1)}
                  className="w-9 h-9 flex items-center justify-center border transition-opacity hover:opacity-50"
                  style={{ borderColor: "rgba(12,35,64,0.25)", color: NAVY }}
                >
                  <Icon size={14} />
                </button>
              ))}
            </div>
            <TextLink onClick={() => navigate("shop")}>
              View all products
            </TextLink>
          </div>
        </div>
        <div
          ref={scrollRef}
          onScroll={onScroll}
          className="flex gap-4 sm:gap-6 overflow-x-auto pb-2 select-none"
          style={{ scrollbarWidth: "none", cursor: "grab" }}
          onMouseDown={(e) => (e.currentTarget.style.cursor = "grabbing")}
          onMouseUp={(e) => (e.currentTarget.style.cursor = "grab")}
        >
          {ALL_PRODUCTS.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
        <div
          className="mt-7 h-px w-full relative"
          style={{ background: "rgba(12,35,64,0.1)" }}
        >
          <div
            className="absolute top-0 left-0 h-full transition-all duration-300"
            style={{ width: `${progress * 100}%`, background: CORAL }}
          />
        </div>
      </div>
    </section>
  );
}
