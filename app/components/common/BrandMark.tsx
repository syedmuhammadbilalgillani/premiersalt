import { COLORS } from "@/data/constants";

export function BrandMark() {
  return (
    <div className="mb-5">
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="13" stroke={COLORS.NAVY} strokeWidth="0.75" />
        <path
          d="M14 7L14 21M8 10.5L20 17.5M20 10.5L8 17.5"
          stroke={COLORS.NAVY}
          strokeWidth="0.75"
          strokeLinecap="round"
        />
        <circle cx="14" cy="14" r="2" fill={COLORS.NAVY} />
      </svg>
    </div>
  );
}
