"use client";

import { useEffect, useState } from "react";

export function useCountUp(target: number, duration = 1800, started = false) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!started) return;
    const step = target / (duration / 16);
    let cur = 0;
    const t = setInterval(() => {
      cur = Math.min(cur + step, target);
      setN(Math.floor(cur));
      if (cur >= target) clearInterval(t);
    }, 16);
    return () => clearInterval(t);
  }, [started, target, duration]);
  return n;
}
