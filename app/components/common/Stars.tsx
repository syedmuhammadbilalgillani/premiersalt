import { Star } from "lucide-react";
import { COLORS } from "@/data/constants";

export function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={14}
          fill={i < Math.floor(rating) ? COLORS.CORAL : COLORS.SAND}
          color={i < Math.floor(rating) ? COLORS.CORAL : COLORS.SAND}
        />
      ))}
    </div>
  );
}
