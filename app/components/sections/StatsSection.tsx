"use client";

import { useEffect, useRef, useState } from "react";
import { COLORS, STATS_DATA } from "@/data/constants";
import { useCountUp } from "@/hooks/useCountUp";
import { Eyebrow, FadeUp } from "@/components/common";

const { NAVY, IVORY, CORAL } = COLORS;

function StatCell({
  v,
  suf,
  l,
  started,
}: {
  v: number;
  suf: string;
  l: string;
  started: boolean;
}) {
  const count = useCountUp(v, 1800, started);
  return (
    <div className="stat-cell flex flex-col items-center justify-center text-center py-10 px-6">
      <div
        style={{
          fontFamily: "Fraunces,serif",
          fontWeight: 600,
          fontSize: "clamp(1.8rem,3.5vw,2.8rem)",
          color: IVORY,
          lineHeight: 1,
        }}
      >
        {count}
        {suf}
      </div>
      <div
        className="mt-3"
        style={{
          fontFamily: "Inter,sans-serif",
          fontSize: 11,
          letterSpacing: "0.1em",
          color: "rgba(244,242,239,0.45)",
          textTransform: "uppercase",
        }}
      >
        {l}
      </div>
    </div>
  );
}

export function StatsSection() {
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setStarted(true);
      },
      { threshold: 0.3 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <section ref={ref} className="py-20 px-8" style={{ background: NAVY }}>
      <div className="max-w-5xl mx-auto">
        <FadeUp>
          <div className="text-center mb-14">
            <Eyebrow light>Our Scale</Eyebrow>
            <h2
              style={{
                fontFamily: "Fraunces,serif",
                fontWeight: 400,
                fontSize: "clamp(1.6rem,4vw,2.8rem)",
                color: IVORY,
                lineHeight: 1.2,
              }}
            >
              A legacy measured in generations,{" "}
              <em style={{ fontStyle: "italic" }}>not just shipments</em>
            </h2>
            <svg
              className="mx-auto mt-6"
              width="100"
              height="10"
              viewBox="0 0 100 10"
              fill="none"
            >
              <path
                d="M2 8C18 2 35 10 50 5S80 2 98 7"
                stroke={CORAL}
                strokeWidth="1.2"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </FadeUp>
        <style>{`
          .stat-cell { border-right: 1px solid rgba(244,242,239,0.15); border-bottom: 1px solid rgba(244,242,239,0.15); }
          .stat-cell:nth-child(2n) { border-right: none; }
          .stat-cell:nth-child(n+3) { border-bottom: none; }
          @media (min-width:1024px) {
            .stat-cell { border-right: 1px solid rgba(244,242,239,0.15); border-bottom: none; }
            .stat-cell:last-child { border-right: none; }
          }
        `}</style>
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {STATS_DATA.map((s, i) => (
            <StatCell key={i} {...s} started={started} />
          ))}
        </div>
      </div>
    </section>
  );
}
