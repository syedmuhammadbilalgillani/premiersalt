"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { COLORS } from "@/data/constants";
import { PrimaryBtn } from "@/components/common";
import { useNav } from "@/hooks/useNav";

export function ConfirmationPage() {
  const { navigate } = useNav();
  const [orderNum] = useState(
    () => `PS-${Math.floor(100000 + Math.random() * 900000)}`,
  );

  return (
    <div
      style={{ background: COLORS.NAVY, minHeight: "100svh" }}
      className="flex flex-col items-center justify-center px-6 py-20"
    >
      <div className="flex flex-col items-center text-center max-w-lg">
        {/* Check circle */}
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mb-8"
          style={{ border: `1px solid rgba(244,242,239,0.3)` }}
        >
          <Check size={36} style={{ color: COLORS.IVORY }} strokeWidth={1} />
        </div>
        <p
          style={{
            fontFamily: "Inter,sans-serif",
            fontWeight: 400,
            fontSize: 10,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(244,242,239,0.5)",
            marginBottom: 12,
          }}
        >
          Order Confirmed
        </p>
        <h1
          style={{
            fontFamily: "Fraunces,serif",
            fontWeight: 400,
            fontSize: "clamp(2rem,5vw,3.5rem)",
            color: COLORS.IVORY,
            lineHeight: 1.15,
            marginBottom: 16,
          }}
        >
          Thank <em style={{ fontStyle: "italic" }}>you</em>
        </h1>
        <p
          style={{
            fontFamily: "Inter,sans-serif",
            fontSize: 14,
            lineHeight: 1.75,
            color: "rgba(244,242,239,0.6)",
            marginBottom: 8,
          }}
        >
          Your order has been received and is being prepared for dispatch.
        </p>
        <p
          style={{
            fontFamily: "Inter,sans-serif",
            fontSize: 13,
            color: "rgba(244,242,239,0.45)",
            marginBottom: 32,
          }}
        >
          A confirmation will be sent via SMS or WhatsApp.
        </p>
        <div
          className="w-full p-6 mb-10"
          style={{ border: "1px solid rgba(244,242,239,0.15)" }}
        >
          <div className="grid grid-cols-2 gap-6 text-left">
            {[
              { label: "Order Number", value: orderNum },
              { label: "Payment", value: "Cash on Delivery" },
              { label: "Estimated Delivery", value: "3–5 business days" },
              { label: "Support", value: "+92 300 123 4567" },
            ].map((r) => (
              <div key={r.label}>
                <p
                  style={{
                    fontFamily: "Inter,sans-serif",
                    fontSize: 10,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "rgba(244,242,239,0.4)",
                    marginBottom: 4,
                  }}
                >
                  {r.label}
                </p>
                <p
                  style={{
                    fontFamily: "Inter,sans-serif",
                    fontSize: 13,
                    color: COLORS.IVORY,
                  }}
                >
                  {r.value}
                </p>
              </div>
            ))}
          </div>
        </div>
        <PrimaryBtn onClick={() => navigate("home")}>
          Continue Shopping
        </PrimaryBtn>
      </div>
    </div>
  );
}
