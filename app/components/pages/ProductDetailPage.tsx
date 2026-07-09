"use client";

import { useState } from "react";
import {
  ZoomIn,
  Plus,
  Minus,
  Package,
  Shield,
  Truck,
} from "lucide-react";
import { COLORS } from "@/data/constants";
import { Eyebrow, Stars, PrimaryBtn, NavyBtn } from "@/components/common";
import { useApp } from "@/context/AppContext";
import { useNav } from "@/hooks/useNav";
import { Product } from "@/types";

// Note: the parent route (app/shop/[id]/page.tsx) renders this component
// with `key={product.id}` so that navigating between products forces a
// fresh mount — resetting mainImg/selectedWeight/qty/tab below — instead of
// resetting that state from a useEffect (which the original single-file
// version did via `useEffect(..., [p.id])`).
export function ProductDetailPage({ product }: { product: Product }) {
  const { addToCart, setCartOpen } = useApp();
  const { navigate } = useNav();
  const p = product;
  const [mainImg, setMainImg] = useState(0);
  const [selectedWeight, setSelectedWeight] = useState(p.weight[0]);
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState<"description" | "shipping" | "reviews">(
    "description",
  );
  const [zoomed, setZoomed] = useState(false);

  return (
    <div style={{ background: COLORS.IVORY, minHeight: "100svh", paddingTop: 0 }}>
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-10">
          <button
            onClick={() => navigate("home")}
            style={{
              fontFamily: "Inter,sans-serif",
              fontSize: 11,
              color: COLORS.SLATE,
              background: "none",
              border: "none",
              cursor: "pointer",
              letterSpacing: "0.03em",
            }}
          >
            Home
          </button>
          <span style={{ color: COLORS.SLATE, fontSize: 11 }}>/</span>
          <button
            onClick={() => navigate("shop")}
            style={{
              fontFamily: "Inter,sans-serif",
              fontSize: 11,
              color: COLORS.SLATE,
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            Shop
          </button>
          <span style={{ color: COLORS.SLATE, fontSize: 11 }}>/</span>
          <span
            style={{
              fontFamily: "Inter,sans-serif",
              fontSize: 11,
              color: COLORS.NAVY,
            }}
          >
            {p.name}
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: image gallery */}
          <div>
            <div
              className="relative aspect-square overflow-hidden mb-3 cursor-zoom-in"
              style={{ background: COLORS.SAND }}
              onClick={() => setZoomed((v) => !v)}
            >
              <img
                src={p.imgs[mainImg]}
                alt={p.name}
                className="w-full h-full object-cover transition-transform duration-500"
                style={{ transform: zoomed ? "scale(1.5)" : "scale(1)" }}
              />
              <button
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center"
                style={{ background: "rgba(244,242,239,0.8)" }}
              >
                <ZoomIn size={14} style={{ color: COLORS.NAVY }} />
              </button>
            </div>
            <div className="flex gap-2">
              {p.imgs.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setMainImg(i)}
                  className="flex-1 aspect-square overflow-hidden"
                  style={{
                    border: `1px solid ${mainImg === i ? COLORS.CORAL : "transparent"}`,
                    background: COLORS.SAND,
                  }}
                >
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: product info */}
          <div>
            <Eyebrow>{p.category}</Eyebrow>
            <h1
              style={{
                fontFamily: "Fraunces,serif",
                fontWeight: 400,
                fontSize: "clamp(1.6rem,3vw,2.4rem)",
                color: COLORS.NAVY,
                lineHeight: 1.2,
                marginBottom: 12,
              }}
            >
              {p.name}
            </h1>
            <div className="flex items-center gap-3 mb-5">
              <Stars rating={p.rating} />
              <span
                style={{
                  fontFamily: "Inter,sans-serif",
                  fontSize: 12,
                  color: COLORS.SLATE,
                }}
              >
                {p.rating} · {p.reviews} reviews
              </span>
            </div>
            <p
              style={{
                fontFamily: "Fraunces,serif",
                fontWeight: 600,
                fontSize: "clamp(1.5rem,2.5vw,2rem)",
                color: COLORS.NAVY,
                marginBottom: 6,
              }}
            >
              PKR {p.price.toLocaleString()}
            </p>
            <p
              style={{
                fontFamily: "Inter,sans-serif",
                fontSize: 12,
                color: COLORS.SLATE,
                marginBottom: 20,
              }}
            >
              Tax included. Free shipping on orders over PKR 5,000.
            </p>
            <p
              style={{
                fontFamily: "Inter,sans-serif",
                fontSize: 14,
                lineHeight: 1.75,
                color: COLORS.CHARCOAL,
                marginBottom: 24,
              }}
            >
              {p.short}
            </p>

            {/* Weight picker */}
            <div className="mb-6">
              <p
                style={{
                  fontFamily: "Inter,sans-serif",
                  fontWeight: 500,
                  fontSize: 11,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: COLORS.NAVY,
                  marginBottom: 10,
                }}
              >
                Size / Weight
              </p>
              <div className="flex flex-wrap gap-2">
                {p.weight.map((w) => (
                  <button
                    key={w}
                    onClick={() => setSelectedWeight(w)}
                    className="px-4 py-2 text-sm transition-all"
                    style={{
                      border: `1px solid ${selectedWeight === w ? COLORS.CORAL : "rgba(12,35,64,0.2)"}`,
                      background: selectedWeight === w ? COLORS.CORAL : "transparent",
                      color: selectedWeight === w ? COLORS.IVORY : COLORS.NAVY,
                      fontFamily: "Inter,sans-serif",
                      fontSize: 12,
                      cursor: "pointer",
                    }}
                  >
                    {w}
                  </button>
                ))}
              </div>
            </div>

            {/* Qty + CTAs */}
            <div className="flex items-center gap-4 mb-6">
              <div
                className="flex items-center border"
                style={{ borderColor: "rgba(12,35,64,0.2)" }}
              >
                <button
                  className="w-10 h-11 flex items-center justify-center"
                  style={{ color: COLORS.NAVY }}
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                >
                  <Minus size={12} />
                </button>
                <span
                  className="w-12 text-center"
                  style={{
                    fontFamily: "Inter,sans-serif",
                    fontSize: 14,
                    color: COLORS.CHARCOAL,
                  }}
                >
                  {qty}
                </span>
                <button
                  className="w-10 h-11 flex items-center justify-center"
                  style={{ color: COLORS.NAVY }}
                  onClick={() => setQty((q) => q + 1)}
                >
                  <Plus size={12} />
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-3 mb-8">
              <PrimaryBtn
                className="w-full"
                onClick={() => {
                  for (let i = 0; i < qty; i++) addToCart(p, selectedWeight);
                  setCartOpen(true);
                }}
              >
                Add to Cart — PKR {(p.price * qty).toLocaleString()}
              </PrimaryBtn>
              <NavyBtn
                className="w-full"
                onClick={() => {
                  for (let i = 0; i < qty; i++) addToCart(p, selectedWeight);
                  navigate("checkout");
                }}
              >
                Buy Now
              </NavyBtn>
            </div>

            {/* Trust badges */}
            <div
              className="grid grid-cols-3 gap-3 mb-8 p-4"
              style={{ border: "1px solid rgba(12,35,64,0.12)" }}
            >
              {[
                {
                  icon: Package,
                  label: "Cash on Delivery",
                  sub: "Available nationwide",
                },
                {
                  icon: Shield,
                  label: "Certified Pure",
                  sub: "ISO 9001 · FDA",
                },
                {
                  icon: Truck,
                  label: "Ships Nationwide",
                  sub: "2–5 business days",
                },
              ].map(({ icon: Icon, label, sub }) => (
                <div
                  key={label}
                  className="flex flex-col items-center text-center gap-1.5 py-2"
                >
                  <Icon size={18} style={{ color: COLORS.CORAL }} strokeWidth={1.5} />
                  <p
                    style={{
                      fontFamily: "Inter,sans-serif",
                      fontWeight: 500,
                      fontSize: 11,
                      color: COLORS.NAVY,
                    }}
                  >
                    {label}
                  </p>
                  <p
                    style={{
                      fontFamily: "Inter,sans-serif",
                      fontSize: 10,
                      color: COLORS.SLATE,
                    }}
                  >
                    {sub}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div
          className="mt-16 border-t"
          style={{ borderColor: "rgba(12,35,64,0.1)" }}
        >
          <div
            className="flex gap-8 border-b"
            style={{ borderColor: "rgba(12,35,64,0.1)" }}
          >
            {(["description", "shipping", "reviews"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className="py-4 transition-colors"
                style={{
                  fontFamily: "Inter,sans-serif",
                  fontWeight: 500,
                  fontSize: 11,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: tab === t ? COLORS.NAVY : COLORS.SLATE,
                  borderBottom:
                    tab === t ? `2px solid ${COLORS.CORAL}` : "2px solid transparent",
                  background: "none",
                  cursor: "pointer",
                }}
              >
                {t === "description"
                  ? "Description"
                  : t === "shipping"
                    ? "Shipping & Returns"
                    : "Reviews"}
              </button>
            ))}
          </div>
          <div className="py-10 max-w-2xl">
            {tab === "description" && (
              <p
                style={{
                  fontFamily: "Inter,sans-serif",
                  fontSize: 14,
                  lineHeight: 1.85,
                  color: COLORS.CHARCOAL,
                }}
              >
                {p.description}
              </p>
            )}
            {tab === "shipping" && (
              <p
                style={{
                  fontFamily: "Inter,sans-serif",
                  fontSize: 14,
                  lineHeight: 1.85,
                  color: COLORS.CHARCOAL,
                }}
              >
                {p.shipping}
              </p>
            )}
            {tab === "reviews" && (
              <div className="space-y-8">
                {[
                  {
                    name: "Ayesha K.",
                    rating: 5,
                    date: "Jun 2025",
                    text: "Absolutely love the quality. The salt has a beautiful pink colour and a clean mineral taste — nothing like generic table salt.",
                  },
                  {
                    name: "Michael R.",
                    rating: 5,
                    date: "Apr 2025",
                    text: "Ordered the bath salt as a gift and it arrived beautifully packed. My wife uses it every week now. Will reorder.",
                  },
                  {
                    name: "Sana M.",
                    rating: 4,
                    date: "Mar 2025",
                    text: "Great product, fast delivery via Cash on Delivery. Packaging could be slightly sturdier but the product itself is excellent.",
                  },
                ].map((r, i) => (
                  <div
                    key={i}
                    className="pb-8 border-b last:border-0"
                    style={{ borderColor: "rgba(12,35,64,0.08)" }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold"
                          style={{
                            background: COLORS.SAND,
                            color: COLORS.NAVY,
                            fontFamily: "Inter,sans-serif",
                          }}
                        >
                          {r.name[0]}
                        </div>
                        <span
                          style={{
                            fontFamily: "Inter,sans-serif",
                            fontWeight: 500,
                            fontSize: 13,
                            color: COLORS.NAVY,
                          }}
                        >
                          {r.name}
                        </span>
                      </div>
                      <span
                        style={{
                          fontFamily: "Inter,sans-serif",
                          fontSize: 11,
                          color: COLORS.SLATE,
                        }}
                      >
                        {r.date}
                      </span>
                    </div>
                    <Stars rating={r.rating} />
                    <p
                      className="mt-3"
                      style={{
                        fontFamily: "Inter,sans-serif",
                        fontSize: 13,
                        lineHeight: 1.7,
                        color: COLORS.CHARCOAL,
                      }}
                    >
                      {r.text}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
