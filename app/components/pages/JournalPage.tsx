"use client";

import { useState } from "react";
import { COLORS, ALL_POSTS } from "@/data/constants";
import { Eyebrow, TextLink, FadeUp } from "@/components/common";
import { Divider } from "@/components/ui/divider";

export function JournalPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const cats = [
    "All",
    "Origins",
    "Wellness",
    "Sustainability",
    "Recipes",
    "Trade",
  ];
  const filtered = ALL_POSTS.filter(
    (p) => activeCategory === "All" || p.cat === activeCategory,
  );

  return (
    <div style={{ background: COLORS.IVORY, minHeight: "100svh", paddingTop: 0 }}>
      <FadeUp>
        <div
          className="border-b py-14 px-8 text-center"
          style={{ borderColor: "rgba(12,35,64,0.1)" }}
        >
          <Eyebrow>Stories & Insights</Eyebrow>
          <h1
            style={{
              fontFamily: "Fraunces,serif",
              fontWeight: 400,
              fontSize: "clamp(2rem,5vw,3.5rem)",
              color: COLORS.NAVY,
              lineHeight: 1.15,
            }}
          >
            The <em style={{ fontStyle: "italic" }}>Journal</em>
          </h1>
        </div>
      </FadeUp>

      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
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

        {/* Featured post */}
        {filtered.length > 0 && (
          <div className="grid lg:grid-cols-2 gap-10 mb-12 cursor-pointer group">
            <div
              className="aspect-[4/3] overflow-hidden"
              style={{ background: COLORS.SAND }}
            >
              <img
                src={filtered[0].img}
                alt={filtered[0].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p
                style={{
                  fontFamily: "Inter,sans-serif",
                  fontWeight: 500,
                  fontSize: 9,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: COLORS.CORAL,
                  marginBottom: 10,
                }}
              >
                {filtered[0].cat} · {filtered[0].date} · {filtered[0].read} read
              </p>
              <h2
                style={{
                  fontFamily: "Fraunces,serif",
                  fontWeight: 400,
                  fontSize: "clamp(1.3rem,2.5vw,1.9rem)",
                  color: COLORS.NAVY,
                  lineHeight: 1.3,
                  marginBottom: 14,
                }}
              >
                {filtered[0].title}
              </h2>
              <p
                style={{
                  fontFamily: "Inter,sans-serif",
                  fontSize: 14,
                  lineHeight: 1.8,
                  color: COLORS.SLATE,
                  marginBottom: 20,
                }}
              >
                {filtered[0].excerpt}
              </p>
              <TextLink>Read article</TextLink>
            </div>
          </div>
        )}

        <Divider className="mb-12" />

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.slice(1).map((p, i) => (
            <article key={i} className="group cursor-pointer">
              <div
                className="aspect-[4/3] overflow-hidden mb-5"
                style={{ background: COLORS.SAND }}
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p
                style={{
                  fontFamily: "Inter,sans-serif",
                  fontWeight: 500,
                  fontSize: 9,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: COLORS.CORAL,
                  marginBottom: 8,
                }}
              >
                {p.cat} · {p.date} · {p.read} read
              </p>
              <h3
                style={{
                  fontFamily: "Fraunces,serif",
                  fontWeight: 400,
                  fontSize: "clamp(1rem,1.8vw,1.15rem)",
                  color: COLORS.NAVY,
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
                  color: COLORS.SLATE,
                  marginBottom: 12,
                }}
              >
                {p.excerpt.slice(0, 100)}…
              </p>
              <TextLink>Read more</TextLink>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
