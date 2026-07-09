import React from "react";
import { motion } from "motion/react";
import { COLORS } from "@/data/constants";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
}

interface OutlineButtonProps extends ButtonProps {
  light?: boolean;
}

export function PrimaryBtn({
  children,
  onClick,
  className = "",
  fullWidth = false,
}: ButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className={`px-6 py-3 rounded-full bg-white text-sm font-medium transition-all ${fullWidth ? "w-full flex items-center justify-center" : ""} ${className}`}
      style={{ color: COLORS.NAVY }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
}

export function NavyBtn({
  children,
  onClick,
  className = "",
  fullWidth = false,
}: ButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className={`px-6 py-3 rounded-full text-sm font-medium text-white transition-all ${fullWidth ? "w-full flex items-center justify-center" : ""} ${className}`}
      style={{ backgroundColor: COLORS.NAVY }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
}

export function OutlineBtn({
  children,
  onClick,
  className = "",
  fullWidth = false,
  light = false,
}: OutlineButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className={`px-6 py-3 rounded-full border-2 text-sm font-medium transition-all ${fullWidth ? "w-full flex items-center justify-center" : ""} ${className}`}
      style={{
        borderColor: light ? "rgba(244,242,239,0.45)" : COLORS.NAVY,
        color: light ? COLORS.IVORY : COLORS.NAVY,
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
}
