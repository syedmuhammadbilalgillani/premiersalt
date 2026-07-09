import React from "react";
import { motion } from "motion/react";
import { COLORS } from "@/data/constants";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function PrimaryBtn({ children, onClick, className = "" }: ButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className={`px-6 py-3 rounded-full bg-white text-sm font-medium transition-all ${className}`}
      style={{ color: COLORS.NAVY }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
}

export function NavyBtn({ children, onClick, className = "" }: ButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className={`px-6 py-3 rounded-full text-sm font-medium text-white transition-all ${className}`}
      style={{ backgroundColor: COLORS.NAVY }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
}

export function OutlineBtn({ children, onClick, className = "" }: ButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className={`px-6 py-3 rounded-full border-2 text-sm font-medium transition-all ${className}`}
      style={{
        borderColor: COLORS.NAVY,
        color: COLORS.NAVY,
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
}
