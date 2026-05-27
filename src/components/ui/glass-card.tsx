"use client";

import * as React from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { BorderBeam } from "@/components/ui/border-beam";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  glow?: boolean;
  interactive?: boolean;
  beam?: boolean;
}

/**
 * Glassmorphism card with optional cursor-tracking spotlight & eco glow.
 */
export function GlassCard({
  className,
  glow = true,
  interactive = true,
  beam = false,
  children,
  ...props
}: GlassCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!interactive) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className={cn(
        "glass group/card relative overflow-hidden rounded-2xl p-6 transition-all duration-500",
        interactive &&
          "hover:-translate-y-1 hover:border-wes-500/40 hover:shadow-eco",
        className
      )}
      {...props}
    >
      {interactive ? (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
          style={{
            background: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(34,197,94,0.18), transparent 60%)`,
          }}
        />
      ) : null}
      {glow ? (
        <span
          aria-hidden
          className="pointer-events-none absolute -top-32 -right-32 h-64 w-64 rounded-full bg-wes-500/8 blur-3xl"
        />
      ) : null}
      {beam ? (
        <BorderBeam size={160} duration={12} colorFrom="#22C55E" colorTo="#16A34A" borderWidth={1} />
      ) : null}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
