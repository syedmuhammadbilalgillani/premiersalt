"use client";

import { COLORS, CERTS } from "@/data/constants";
import { Divider } from "@/components/ui/divider";

const { IVORY, SLATE, CORAL } = COLORS;

export function Marquee() {
  return (
    <>
      <Divider />
      <div className="overflow-hidden py-5" style={{ background: IVORY }}>
        <div
          className="flex"
          style={{
            animation: "marquee 30s linear infinite",
            width: "max-content",
          }}
        >
          {[...CERTS, ...CERTS].map((c, i) => (
            <div key={i} className="flex items-center gap-3 mx-10">
              <div className="w-1.5 h-1.5" style={{ background: CORAL }} />
              <span
                style={{
                  fontFamily: "Inter,sans-serif",
                  fontWeight: 400,
                  fontSize: 10,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: SLATE,
                }}
              >
                {c}
              </span>
            </div>
          ))}
        </div>
        <style>{`@keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`}</style>
      </div>
      <Divider />
    </>
  );
}
