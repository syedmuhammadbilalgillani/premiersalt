"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Plus, Check } from "lucide-react";
import { COLORS } from "@/data/constants";
import { Stars } from "@/components/common";
import { useApp } from "@/context/AppContext";
import { useNav } from "@/hooks/useNav";
import { Product } from "@/types";

export function ShopProductCard({ p }: { p: Product }) {
  const { addToCart } = useApp();
  const { navigate } = useNav();
  const [added, setAdded] = useState(false);

  return (
    <motion.div
      className="cursor-pointer"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
    >
      <div
        className="relative aspect-square overflow-hidden mb-4"
        style={{ background: COLORS.SAND }}
        onClick={() => navigate("product", { product: p })}
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
          whileTap={{ scale: 0.88 }}
          style={{
            borderColor: added ? COLORS.CORAL : "rgba(244,242,239,0.7)",
            background: added ? COLORS.CORAL : "rgba(244,242,239,0.85)",
            color: added ? COLORS.IVORY : COLORS.NAVY,
            transition: "background 0.25s, border-color 0.25s",
          }}
        >
          {added ? <Check size={12} /> : <Plus size={12} />}
        </motion.button>
      </div>
      <div onClick={() => navigate("product", { product: p })}>
        <p
          style={{
            fontFamily: "Fraunces,serif",
            fontWeight: 400,
            fontSize: 15,
            color: COLORS.CHARCOAL,
            lineHeight: 1.3,
            marginBottom: 4,
          }}
        >
          {p.name}
        </p>
        <div className="flex items-center gap-1 mb-2">
          <Stars rating={p.rating} />
          <span
            style={{
              fontFamily: "Inter,sans-serif",
              fontSize: 10,
              color: COLORS.SLATE,
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
            color: COLORS.NAVY,
          }}
        >
          PKR {p.price.toLocaleString()}
        </p>
      </div>
    </motion.div>
  );
}
