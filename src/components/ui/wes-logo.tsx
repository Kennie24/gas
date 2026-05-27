"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * WES GAS / WANA Energy logo.
 * Uses the real brand assets from /public:
 *   logo.png       — shown in light mode
 *   logo white.png — shown in dark mode
 */
export function WesLogo({
  className,
  forceVariant,
}: {
  className?: string;
  /** Force a single variant regardless of theme (useful over colored backgrounds). */
  forceVariant?: "light" | "dark";
}) {
  // Tailwind handles size via h-9 (mobile) → md:h-12 → lg:h-14, with width auto.
  const sizeClasses = "h-9 md:h-12 lg:h-14 w-auto";

  if (forceVariant === "light") {
    return (
      <div className={cn("flex items-center", className)}>
        <Image
          src="/logo.png"
          alt="WANA Energy Solutions — WES GAS"
          width={200}
          height={56}
          priority
          className={sizeClasses}
        />
      </div>
    );
  }

  if (forceVariant === "dark") {
    return (
      <div className={cn("flex items-center", className)}>
        <Image
          src="/logo white.png"
          alt="WANA Energy Solutions — WES GAS"
          width={200}
          height={56}
          priority
          className={sizeClasses}
        />
      </div>
    );
  }

  return (
    <div className={cn("flex items-center", className)}>
      <Image
        src="/logo.png"
        alt="WANA Energy Solutions — WES GAS"
        width={200}
        height={56}
        priority
        className={cn(sizeClasses, "dark:hidden")}
      />
      <Image
        src="/logo white.png"
        alt="WANA Energy Solutions — WES GAS"
        width={200}
        height={56}
        priority
        className={cn(sizeClasses, "hidden dark:block")}
      />
    </div>
  );
}
