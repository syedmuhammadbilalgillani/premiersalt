import React from "react";
import { COLORS } from "@/data/constants";

export function Eyebrow({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <p
      style={{
        fontFamily: "Inter,sans-serif",
        fontWeight: 500,
        fontSize: 10,
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: light ? "rgba(244,242,239,0.45)" : COLORS.SLATE,
        marginBottom: 10,
      }}
    >
      {children}
    </p>
  );
}

export function TextLink({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        fontFamily: "Inter,sans-serif",
        fontSize: 12,
        color: COLORS.NAVY,
        textDecoration: "underline",
        textUnderlineOffset: 3,
        textDecorationColor: `rgba(12,35,64,0.3)`,
        letterSpacing: "0.03em",
        background: "none",
        border: "none",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}
