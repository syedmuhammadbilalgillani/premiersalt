"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { COLORS } from "@/data/constants";
import { ALL_PRODUCTS } from "@/data/products";
import { Eyebrow, FadeUp } from "@/components/common";
import { ShopProductCard } from "@/components/product/ShopProductCard";

export function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const cats = ["All", "Edible", "Lamps", "Spa", "Grill"];
  const filtered = ALL_PRODUCTS.filter(
    (p) => activeCategory === "All" || p.category === activeCategory,
  );
  const sorted = [...filtered].sort((a, b) =>
    sortBy === "price-asc"
      ? a.price - b.price
      : sortBy === "price-desc"
        ? b.price - a.price
        : sortBy === "rating"
          ? b.rating - a.rating
          : 0,
  );

  return (
    <div style={{ background: COLORS.IVORY, minHeight: "100svh", paddingTop: 0 }}>
      {/* Page header */}
      <FadeUp>
        <div
          className="border-b py-14 px-8 text-center"
          style={{ borderColor: "rgba(12,35,64,0.1)" }}
        >
          <Eyebrow>All Products</Eyebrow>
          <h1
            style={{
              fontFamily: "Fraunces,serif",
              fontWeight: 400,
              fontSize: "clamp(2rem,5vw,3.5rem)",
              color: COLORS.NAVY,
              lineHeight: 1.15,
            }}
          >
            The full <em style={{ fontStyle: "italic" }}>collection</em>
          </h1>
        </div>
      </FadeUp>

      <div className="max-w-7xl mx-auto px-8 py-10">
        {/* Filters bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <div className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className="px-5 py-2 transition-all"
                style={{
                  border: `1px solid ${activeCategory === c ? COLORS.NAVY : "rgba(12,35,64,0.2)"}`,
                  background: activeCategory === c ? COLORS.NAVY : "transparent",
                  color: activeCategory === c ? COLORS.IVORY : COLORS.NAVY,
                  fontFamily: "Inter,sans-serif",
                  fontSize: 11,
                  letterSpacing: "0.1em",
                  cursor: "pointer",
                }}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <span
              style={{
                fontFamily: "Inter,sans-serif",
                fontSize: 12,
                color: COLORS.SLATE,
              }}
            >
              {sorted.length} products
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="outline-none px-3 py-2"
              style={{
                border: "1px solid rgba(12,35,64,0.2)",
                fontFamily: "Inter,sans-serif",
                fontSize: 12,
                color: COLORS.NAVY,
                background: COLORS.IVORY,
                cursor: "pointer",
              }}
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 sm:gap-x-6 gap-y-8 sm:gap-y-10">
          {sorted.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: i * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <ShopProductCard p={p} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
