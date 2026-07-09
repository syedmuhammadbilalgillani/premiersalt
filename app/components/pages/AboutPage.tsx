"use client";

import { motion } from "motion/react";
import { COLORS } from "@/data/constants";
import { IMG } from "@/data/images";
import { BrandMark, Eyebrow, FadeUp } from "@/components/common";
import { Divider } from "@/components/ui/divider";

export function AboutPage() {
  return (
    <div style={{ background: COLORS.IVORY, minHeight: "100svh", paddingTop: 0 }}>
      {/* Hero banner */}
      <div
        className="relative h-80 overflow-hidden"
        style={{ background: COLORS.NAVY }}
      >
        <img
          src={IMG.mountain}
          alt="Khewra Salt Range landscape"
          className="w-full h-full object-cover"
          style={{ opacity: 0.5 }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <Eyebrow light>Since 1980</Eyebrow>
          <h1
            style={{
              fontFamily: "Fraunces,serif",
              fontWeight: 400,
              fontSize: "clamp(2rem,5vw,3.5rem)",
              color: COLORS.IVORY,
              lineHeight: 1.15,
            }}
          >
            Our <em style={{ fontStyle: "italic" }}>story</em>
          </h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-8 py-20">
        {/* Founding */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20 items-center">
          <FadeUp>
            <BrandMark />
            <Eyebrow>The Beginning</Eyebrow>
            <h2
              style={{
                fontFamily: "Fraunces,serif",
                fontWeight: 400,
                fontSize: "clamp(1.5rem,3vw,2.2rem)",
                color: COLORS.NAVY,
                lineHeight: 1.2,
                marginBottom: 16,
              }}
            >
              Four decades of{" "}
              <em style={{ fontStyle: "italic" }}>honest craft</em>
            </h2>
            <p
              style={{
                fontFamily: "Inter,sans-serif",
                fontSize: 14,
                lineHeight: 1.85,
                color: COLORS.CHARCOAL,
                marginBottom: 16,
              }}
            >
              Premier Salt Industries was founded in 1980 by the Chaudhry family
              in Pind Dadan Khan — a town in Punjab&apos;s Salt Range district that
              has lived alongside the Khewra mine for centuries. What began as a
              small processing unit supplying regional markets has grown into
              one of Pakistan&apos;s largest Himalayan salt exporters.
            </p>
            <p
              style={{
                fontFamily: "Inter,sans-serif",
                fontSize: 14,
                lineHeight: 1.85,
                color: COLORS.CHARCOAL,
              }}
            >
              We&apos;ve never taken outside investment, never compromised on
              raw-material sourcing, and never outsourced our processing. The
              decisions that matter are still made within 50 kilometres of the
              mine.
            </p>
          </FadeUp>
          <div
            className="aspect-[4/3] overflow-hidden"
            style={{ background: COLORS.SAND }}
          >
            <img
              src={IMG.crystals}
              alt="Himalayan salt crystals"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <Divider className="mb-20" />

        {/* Khewra */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20 items-center">
          <div
            className="order-2 lg:order-1 aspect-[4/3] overflow-hidden"
            style={{ background: COLORS.SAND }}
          >
            <img
              src={IMG.cave}
              alt="Inside the Khewra salt mine"
              className="w-full h-full object-cover"
            />
          </div>
          <FadeUp className="order-1 lg:order-2">
            <BrandMark />
            <Eyebrow>The Khewra Salt Range</Eyebrow>
            <h2
              style={{
                fontFamily: "Fraunces,serif",
                fontWeight: 400,
                fontSize: "clamp(1.5rem,3vw,2.2rem)",
                color: COLORS.NAVY,
                lineHeight: 1.2,
                marginBottom: 16,
              }}
            >
              250 million years in{" "}
              <em style={{ fontStyle: "italic" }}>the making</em>
            </h2>
            <p
              style={{
                fontFamily: "Inter,sans-serif",
                fontSize: 14,
                lineHeight: 1.85,
                color: COLORS.CHARCOAL,
                marginBottom: 16,
              }}
            >
              The Khewra Salt Mine is the world&apos;s second-largest salt mine and
              the largest source of Himalayan pink salt. The deposit formed
              during the Precambrian era when a shallow inland sea evaporated,
              leaving behind a vast crystalline mineral body across the Salt
              Range.
            </p>
            <p
              style={{
                fontFamily: "Inter,sans-serif",
                fontSize: 14,
                lineHeight: 1.85,
                color: COLORS.CHARCOAL,
              }}
            >
              The pink colour comes from trace iron oxide — a natural,
              unbleached signature of the deposit. No artificial colouring, no
              additives. Just salt, as it has been for 250 million years.
            </p>
          </FadeUp>
        </div>

        <Divider className="mb-20" />

        {/* Sustainability */}
        <FadeUp className="text-center mb-16">
          <BrandMark />
          <Eyebrow>Sustainability</Eyebrow>
          <h2
            style={{
              fontFamily: "Fraunces,serif",
              fontWeight: 400,
              fontSize: "clamp(1.5rem,3vw,2.2rem)",
              color: COLORS.NAVY,
              lineHeight: 1.2,
              marginBottom: 16,
            }}
          >
            Mining for the{" "}
            <em style={{ fontStyle: "italic" }}>next generation</em>
          </h2>
          <p
            style={{
              fontFamily: "Inter,sans-serif",
              fontSize: 14,
              lineHeight: 1.85,
              color: COLORS.CHARCOAL,
              maxWidth: 680,
              margin: "0 auto",
            }}
          >
            Khewra has been mined for over 700 years. We intend it to supply the
            world for 700 more. Our extraction methods follow the
            room-and-pillar technique — leaving salt pillars in place to support
            the mine structure, ensuring long-term geological stability. We
            replant native vegetation around our processing facility and operate
            a zero-liquid-discharge plant.
          </p>
        </FadeUp>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              value: "< 2%",
              label: "Extraction rate of proven reserves per decade",
            },
            { value: "100%", label: "Facility powered by grid + solar mix" },
            {
              value: "Zero",
              label: "Liquid discharge from our processing plant",
            },
          ].map((s, i) => (
            <FadeUp key={s.label} delay={i * 0.12}>
              <motion.div
                className="p-8 text-center"
                style={{ border: "1px solid rgba(12,35,64,0.12)" }}
                whileHover={{
                  y: -4,
                  boxShadow: "0 8px 24px rgba(12,35,64,0.08)",
                }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
              >
                <p
                  style={{
                    fontFamily: "Fraunces,serif",
                    fontWeight: 600,
                    fontSize: "2.5rem",
                    color: COLORS.CORAL,
                    lineHeight: 1,
                    marginBottom: 8,
                  }}
                >
                  {s.value}
                </p>
                <p
                  style={{
                    fontFamily: "Inter,sans-serif",
                    fontSize: 12,
                    lineHeight: 1.7,
                    color: COLORS.SLATE,
                  }}
                >
                  {s.label}
                </p>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </div>
  );
}
