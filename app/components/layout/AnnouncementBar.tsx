"use client";

import { useState, useEffect } from "react";
import { COLORS, MESSAGES } from "@/data/constants";

export function AnnouncementBar() {
  const [msg, setMsg] = useState(0);

  useEffect(() => {
    const int = setInterval(() => {
      setMsg((m) => (m + 1) % MESSAGES.length);
    }, 4000);
    return () => clearInterval(int);
  }, []);

  return (
    <div
      style={{
        background: COLORS.NAVY,
        color: COLORS.IVORY,
        textAlign: "center",
        padding: "10px 20px",
        fontFamily: "Inter,sans-serif",
        fontSize: 13,
        fontWeight: 500,
      }}
    >
      {MESSAGES[msg]}
    </div>
  );
}
