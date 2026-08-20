import React from "react";

type Props = {
  className?: string;
  width?: number;
  height?: number;
  ariaLabel?: string;
};

export default function LogoAjed({ className = "", width = 64, height = 64, ariaLabel = "AJED logo" }: Props) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 200 200"
      role="img"
      aria-label={ariaLabel}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="g1" cx="35%" cy="30%">
          <stop offset="0%" stopColor="#22c55e" />
          <stop offset="100%" stopColor="#14532d" />
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" rx="32" fill="none" />
      <circle cx="100" cy="100" r="92" fill="url(#g1)" />

      {/* Red star */}
      <polygon
        points="100,40 112,86 160,86 120,112 132,158 100,132 68,158 80,112 40,86 88,86"
        fill="#d02626"
        opacity="0.95"
      />

      {/* Stylized figure (blue) */}
      <path
        d="M120 110c6-8 18-10 28-6 4 2 6 6 6 10 0 8-8 18-22 20-10 1-24-2-32-12"
        fill="#2b9bf0"
        opacity="0.95"
      />

      {/* Hand / swoosh (lighter green) */}
      <path
        d="M50 120c20 18 46 24 74 6"
        stroke="#0ea05b"
        strokeWidth={6}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />
    </svg>
  );
}
