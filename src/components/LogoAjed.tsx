import React from "react";
import Image from "next/image";

type Props = {
  className?: string;
  width?: number;
  height?: number;
  ariaLabel?: string;
};

export default function LogoAjed({ className = "", width = 64, height = 64, ariaLabel = "AJED logo" }: Props) {
  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      <Image
        src="/images/logo-ajed.png"
        alt={ariaLabel}
        fill
        className="object-contain"
        priority
      />
    </div>
  );
}
