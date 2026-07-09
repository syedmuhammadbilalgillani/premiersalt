"use client";

import { ArrowRight, Check } from "lucide-react";
import { COLORS } from "@/data/constants";
import { IMG } from "@/data/images";
import { useNav } from "@/hooks/useNav";
import { Eyebrow, FadeUp, OutlineBtn } from "@/components/common";

const { NAVY, IVORY, CORAL } = COLORS;

export function WholesaleCallout() {
  const { navigate } = useNav();
  return (
    <section className="grid lg:grid-cols-2" style={{ minHeight: 480 }}>
      <div
        className="flex flex-col justify-center px-10 py-16 lg:px-16"
        style={{ background: NAVY }}
      >
        <FadeUp>
          <Eyebrow light>For Businesses</Eyebrow>
          <h2
            style={{
              fontFamily: "Fraunces,serif",
              fontWeight: 400,
              fontSize: "clamp(1.6rem,3.5vw,2.6rem)",
              color: IVORY,
              lineHeight: 1.2,
              marginBottom: 16,
            }}
          >
            Private labeling &{" "}
            <em style={{ fontStyle: "italic" }}>bulk export,</em> done right
          </h2>
          <p
            style={{
              fontFamily: "Inter,sans-serif",
              fontSize: 13,
              lineHeight: 1.8,
              color: "rgba(244,242,239,0.6)",
              marginBottom: 28,
              maxWidth: 420,
            }}
          >
            From custom packaging to full private-label programs — our team
            handles certification, logistics, and compliance for retailers in
            90+ countries.
          </p>
        </FadeUp>
        <div
          className="mb-8 p-5"
          style={{ border: "1px solid rgba(255,98,104,0.4)" }}
        >
          <p
            style={{
              fontFamily: "Inter,sans-serif",
              fontWeight: 500,
              fontSize: 10,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: CORAL,
              marginBottom: 10,
            }}
          >
            What every order includes
          </p>
          {[
            "ISO 9001 & FDA certification docs",
            "Custom branding & label design",
            "Dedicated export coordinator",
            "Real-time shipment tracking",
          ].map((f) => (
            <div key={f} className="flex items-center gap-2.5 mb-2">
              <Check size={11} style={{ color: CORAL, flexShrink: 0 }} />
              <span
                style={{
                  fontFamily: "Inter,sans-serif",
                  fontSize: 12,
                  color: "rgba(244,242,239,0.65)",
                }}
              >
                {f}
              </span>
            </div>
          ))}
        </div>
        <OutlineBtn light onClick={() => navigate("wholesale")}>
          Explore Wholesale <ArrowRight size={12} />
        </OutlineBtn>
      </div>
      <div className="min-h-72 lg:min-h-0" style={{ background: NAVY }}>
        <img
          src={IMG.packaging}
          alt="Premier Salt export packaging"
          className="w-full h-full object-cover"
          style={{ opacity: 0.75 }}
        />
      </div>
    </section>
  );
}
