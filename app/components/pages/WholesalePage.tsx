"use client";

import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import { COLORS } from "@/data/constants";
import { IMG } from "@/data/images";
import { BrandMark, Eyebrow, PrimaryBtn } from "@/components/common";
import { Divider } from "@/components/ui/divider";

type WholesaleForm = {
  company: string;
  name: string;
  email: string;
  country: string;
  product: string;
  moq: string;
  notes: string;
};

export function WholesalePage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<WholesaleForm>({
    company: "",
    name: "",
    email: "",
    country: "",
    product: "",
    moq: "",
    notes: "",
  });
  const set =
    (k: keyof WholesaleForm) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));
  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 14px",
    border: "1px solid rgba(12,35,64,0.2)",
    background: "transparent",
    fontFamily: "Inter,sans-serif",
    fontSize: 13,
    color: COLORS.CHARCOAL,
    outline: "none",
  };

  return (
    <div style={{ background: COLORS.IVORY, minHeight: "100svh", paddingTop: 0 }}>
      {/* Banner */}
      <div
        className="relative h-72 overflow-hidden"
        style={{ background: COLORS.NAVY }}
      >
        <img
          src={IMG.packaging}
          alt="Premier Salt wholesale packaging"
          className="w-full h-full object-cover"
          style={{ opacity: 0.45 }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <Eyebrow light>For Importers & Brands</Eyebrow>
          <h1
            style={{
              fontFamily: "Fraunces,serif",
              fontWeight: 400,
              fontSize: "clamp(2rem,5vw,3.5rem)",
              color: COLORS.IVORY,
              lineHeight: 1.15,
            }}
          >
            Wholesale & <em style={{ fontStyle: "italic" }}>Private Label</em>
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-20">
        {/* Why us */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: "Source Direct",
              body: "We are the manufacturer, not a trading company. You deal directly with the people who process and pack your order — no middlemen, no markup layers.",
            },
            {
              title: "Private Label Ready",
              body: "Full branding service: custom label design, Pantone-matched packaging, multiple pack formats. MOQ from 500 kg per SKU for most products.",
            },
            {
              title: "Certified for Every Market",
              body: "ISO 9001, FDA Registered, Kosher, Halal, GFSI, Gluten-Free, Vegan certified. Full documentation issued with every shipment.",
            },
          ].map((c) => (
            <div
              key={c.title}
              className="p-8"
              style={{ border: "1px solid rgba(12,35,64,0.12)" }}
            >
              <div className="mb-3">
                <BrandMark />
              </div>
              <p
                style={{
                  fontFamily: "Fraunces,serif",
                  fontWeight: 400,
                  fontSize: 18,
                  color: COLORS.NAVY,
                  marginBottom: 10,
                  lineHeight: 1.2,
                }}
              >
                {c.title}
              </p>
              <p
                style={{
                  fontFamily: "Inter,sans-serif",
                  fontSize: 13,
                  lineHeight: 1.75,
                  color: COLORS.SLATE,
                }}
              >
                {c.body}
              </p>
            </div>
          ))}
        </div>

        <Divider className="mb-20" />

        {/* Markets */}
        <div className="mb-20">
          <BrandMark />
          <Eyebrow>Global Presence</Eyebrow>
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
            90+ countries, <em style={{ fontStyle: "italic" }}>one source</em>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              ["🇺🇸", "USA"],
              ["🇩🇪", "Germany"],
              ["🇬🇧", "United Kingdom"],
              ["🇦🇺", "Australia"],
              ["🇯🇵", "Japan"],
              ["🇦🇪", "UAE"],
              ["🇫🇷", "France"],
              ["🇨🇦", "Canada"],
            ].map(([flag, country]) => (
              <div
                key={country}
                className="flex items-center gap-3 p-4"
                style={{ border: "1px solid rgba(12,35,64,0.1)" }}
              >
                <span style={{ fontSize: 22 }}>{flag}</span>
                <span
                  style={{
                    fontFamily: "Inter,sans-serif",
                    fontSize: 13,
                    color: COLORS.NAVY,
                  }}
                >
                  {country}
                </span>
              </div>
            ))}
          </div>
        </div>

        <Divider className="mb-20" />

        {/* Quote form */}
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <BrandMark />
            <Eyebrow>Get in Touch</Eyebrow>
            <h2
              style={{
                fontFamily: "Fraunces,serif",
                fontWeight: 400,
                fontSize: "clamp(1.5rem,3vw,2.2rem)",
                color: COLORS.NAVY,
                lineHeight: 1.2,
                marginBottom: 12,
              }}
            >
              Request a <em style={{ fontStyle: "italic" }}>quote</em>
            </h2>
            <p
              style={{
                fontFamily: "Inter,sans-serif",
                fontSize: 13,
                lineHeight: 1.8,
                color: COLORS.SLATE,
                marginBottom: 24,
              }}
            >
              Fill in the form and our export team will respond within one
              business day with pricing, samples, and certification documents.
            </p>
            <div
              className="space-y-3"
              style={{ border: "1px solid rgba(255,98,104,0.3)", padding: 24 }}
            >
              <p
                style={{
                  fontFamily: "Inter,sans-serif",
                  fontWeight: 500,
                  fontSize: 10,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: COLORS.CORAL,
                  marginBottom: 12,
                }}
              >
                Typical lead times
              </p>
              {[
                ["Sample shipment", "3–5 business days"],
                ["First commercial order", "7–14 business days"],
                ["Repeat orders", "5–10 business days"],
              ].map(([item, time]) => (
                <div key={item} className="flex justify-between">
                  <span
                    style={{
                      fontFamily: "Inter,sans-serif",
                      fontSize: 12,
                      color: COLORS.SLATE,
                    }}
                  >
                    {item}
                  </span>
                  <span
                    style={{
                      fontFamily: "Inter,sans-serif",
                      fontWeight: 500,
                      fontSize: 12,
                      color: COLORS.NAVY,
                    }}
                  >
                    {time}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div>
            {submitted ? (
              <div className="flex flex-col items-start justify-center h-full gap-5 py-12">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ background: COLORS.CORAL }}
                >
                  <Check size={20} style={{ color: COLORS.IVORY }} />
                </div>
                <p
                  style={{
                    fontFamily: "Fraunces,serif",
                    fontStyle: "italic",
                    fontSize: 22,
                    color: COLORS.NAVY,
                  }}
                >
                  Request received.
                </p>
                <p
                  style={{
                    fontFamily: "Inter,sans-serif",
                    fontSize: 13,
                    lineHeight: 1.75,
                    color: COLORS.SLATE,
                  }}
                >
                  Our export team will be in touch within one business day.
                  Thank you for your interest in Premier Salt.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-4"
              >
                {(
                  [
                    [
                      "Company / Brand Name",
                      "company",
                      "e.g. Natural Foods GmbH",
                    ],
                    ["Your Name", "name", "e.g. John Smith"],
                    ["Email Address", "email", "you@company.com"],
                    ["Country", "country", "e.g. Germany"],
                  ] as [string, keyof WholesaleForm, string][]
                ).map(([label, key, placeholder]) => (
                  <div key={key}>
                    <label
                      style={{
                        fontFamily: "Inter,sans-serif",
                        fontSize: 11,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: COLORS.NAVY,
                        display: "block",
                        marginBottom: 6,
                      }}
                    >
                      {label} *
                    </label>
                    <input
                      required
                      value={form[key]}
                      onChange={set(key)}
                      placeholder={placeholder}
                      style={inputStyle}
                    />
                  </div>
                ))}
                <div>
                  <label
                    style={{
                      fontFamily: "Inter,sans-serif",
                      fontSize: 11,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: COLORS.NAVY,
                      display: "block",
                      marginBottom: 6,
                    }}
                  >
                    Product Interest *
                  </label>
                  <select
                    required
                    value={form.product}
                    onChange={set("product")}
                    style={{ ...inputStyle, cursor: "pointer" }}
                  >
                    <option value="">Select a product category</option>
                    {[
                      "Edible & Gourmet Salt",
                      "Salt Lamps",
                      "Bath & Spa Salt",
                      "Grill Plates & Slabs",
                      "Gift Sets",
                      "Mixed / Multiple",
                    ].map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    style={{
                      fontFamily: "Inter,sans-serif",
                      fontSize: 11,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: COLORS.NAVY,
                      display: "block",
                      marginBottom: 6,
                    }}
                  >
                    Additional Notes
                  </label>
                  <textarea
                    value={form.notes}
                    onChange={set("notes")}
                    rows={3}
                    placeholder="Packaging requirements, certifications needed, delivery port…"
                    style={{ ...inputStyle, resize: "none" }}
                  />
                </div>
                <PrimaryBtn className="w-full">
                  Submit Enquiry <ArrowRight size={13} />
                </PrimaryBtn>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
