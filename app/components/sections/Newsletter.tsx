"use client";

import { useState } from "react";
import { COLORS } from "@/data/constants";
import { Divider } from "@/components/ui/divider";
import { BrandMark, Eyebrow, FadeUp } from "@/components/common";

const { IVORY, NAVY, SLATE, CHARCOAL, CORAL } = COLORS;

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  return (
    <section className="py-20 px-8" style={{ background: IVORY }}>
      <Divider className="mb-16" />
      <FadeUp>
        <div className="max-w-lg mx-auto text-center">
          <BrandMark />
          <Eyebrow>Stay Connected</Eyebrow>
          <h2
            style={{
              fontFamily: "Fraunces,serif",
              fontWeight: 400,
              fontSize: "clamp(1.6rem,3.5vw,2.4rem)",
              color: NAVY,
              lineHeight: 1.2,
              marginBottom: 8,
            }}
          >
            Stay Connected
          </h2>
          <p
            style={{
              fontFamily: "Fraunces,serif",
              fontStyle: "italic",
              fontSize: 16,
              color: SLATE,
              marginBottom: 28,
            }}
          >
            Recipes, salt lore, and trade updates — delivered gently.
          </p>
          {done ? (
            <p
              style={{
                fontFamily: "Fraunces,serif",
                fontStyle: "italic",
                fontSize: 18,
                color: NAVY,
              }}
            >
              Thank you — you&apos;re on the list.
            </p>
          ) : (
            <form
              className="flex"
              onSubmit={(e) => {
                e.preventDefault();
                setDone(true);
              }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 px-5 py-3 outline-none"
                style={{
                  background: "transparent",
                  border: `1px solid rgba(12,35,64,0.2)`,
                  borderRight: "none",
                  fontFamily: "Inter,sans-serif",
                  fontSize: 13,
                  color: CHARCOAL,
                }}
              />
              <button
                type="submit"
                style={{
                  background: CORAL,
                  color: IVORY,
                  padding: "0 22px",
                  fontFamily: "Inter,sans-serif",
                  fontWeight: 500,
                  fontSize: 10,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  border: "none",
                  cursor: "pointer",
                }}
                className="hover:opacity-85 transition-opacity"
              >
                Subscribe
              </button>
            </form>
          )}
          <p
            className="mt-4"
            style={{
              fontFamily: "Inter,sans-serif",
              fontSize: 11,
              color: SLATE,
            }}
          >
            No spam. Unsubscribe at any time.
          </p>
        </div>
      </FadeUp>
    </section>
  );
}
