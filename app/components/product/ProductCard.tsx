"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Check, Plus } from "lucide-react";
import { COLORS } from "@/data/constants";
import { useApp } from "@/context/AppContext";
import { useNav } from "@/hooks/useNav";
import { Stars } from "@/components/common";
import { Product } from "@/types";

const { CORAL, NAVY, SAND, CHARCOAL, IVORY, SLATE } = COLORS;

export function ProductCard({ p }: { p: Product }) {
  const { addToCart } = useApp();
  const { navigate } = useNav();
  const [added, setAdded] = useState(false);
  return (
    <motion.div
      className="flex-shrink-0 w-48 sm:w-60 lg:w-64 cursor-pointer"
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
    >
      <div
        className="relative aspect-square overflow-hidden mb-4"
        style={{ background: SAND }}
        onClick={() => {
          navigate("product", { product: p });
        }}
      >
        <motion.img
          src={p.img}
          alt={p.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.button
          onClick={(e) => {
            e.stopPropagation();
            addToCart(p, p.weight[0]);
            setAdded(true);
            setTimeout(() => setAdded(false), 1500);
          }}
          className="absolute bottom-3 right-3 w-8 h-8 flex items-center justify-center border"
          whileTap={{ scale: 0.9 }}
          style={{
            borderColor: added ? CORAL : "rgba(244,242,239,0.7)",
            background: added ? CORAL : "rgba(244,242,239,0.85)",
            color: added ? IVORY : NAVY,
            transition: "background 0.25s, border-color 0.25s",
          }}
        >
          {added ? <Check size={12} /> : <Plus size={12} />}
        </motion.button>
      </div>
      <div
        onClick={() => {
          navigate("product", { product: p });
        }}
      >
        <p
          style={{
            fontFamily: "Fraunces,serif",
            fontWeight: 400,
            fontSize: 15,
            color: CHARCOAL,
            lineHeight: 1.3,
            marginBottom: 5,
          }}
        >
          {p.name}
        </p>
        <div className="flex items-center gap-1 mb-3">
          <Stars rating={p.rating} />
          <span
            style={{
              fontFamily: "Inter,sans-serif",
              fontSize: 10,
              color: SLATE,
              marginLeft: 2,
            }}
          >
            ({p.reviews})
          </span>
        </div>
        <p
          style={{
            fontFamily: "Inter,sans-serif",
            fontWeight: 600,
            fontSize: 14,
            color: NAVY,
          }}
        >
          PKR {p.price.toLocaleString()}
        </p>
      </div>
    </motion.div>
  );
}
