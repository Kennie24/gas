"use client";

import * as React from "react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";

export interface SmoothScrollHeroProps {
  /** Total scroll distance that drives the reveal (px). Default 1500 */
  scrollHeight?: number;
  /** Background image URL — desktop */
  desktopImage: string;
  /** Background image URL — mobile (falls back to desktopImage if omitted) */
  mobileImage?: string;
  /** Clip-path start percentage. Default 20 */
  initialClipPercentage?: number;
  /** Clip-path end percentage. Default 80 */
  finalClipPercentage?: number;
}

/**
 * Sticky background layer — export this when you need the reveal
 * background behind your own content.
 */
export function SmoothScrollHeroBackground({
  scrollHeight = 1500,
  desktopImage,
  mobileImage,
  initialClipPercentage = 20,
  finalClipPercentage = 80,
}: SmoothScrollHeroProps) {
  const { scrollY } = useScroll();

  const clipStart = useTransform(
    scrollY,
    [0, scrollHeight],
    [initialClipPercentage, 0],
  );
  const clipEnd = useTransform(
    scrollY,
    [0, scrollHeight],
    [finalClipPercentage, 100],
  );

  const clipPath = useMotionTemplate`polygon(${clipStart}% ${clipStart}%, ${clipEnd}% ${clipStart}%, ${clipEnd}% ${clipEnd}%, ${clipStart}% ${clipEnd}%)`;

  const backgroundSize = useTransform(
    scrollY,
    [0, scrollHeight + 500],
    ["170%", "100%"],
  );

  const bg = mobileImage ?? desktopImage;

  return (
    <motion.div
      className="sticky top-0 h-screen w-full bg-black"
      style={{ clipPath, willChange: "clip-path" }}
    >
      {/* Mobile */}
      <motion.div
        className="absolute inset-0 md:hidden"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Desktop */}
      <motion.div
        className="absolute inset-0 hidden md:block"
        style={{
          backgroundImage: `url(${desktopImage})`,
          backgroundSize,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
    </motion.div>
  );
}

/** Self-contained scroll-reveal hero (background only, no foreground content). */
const SmoothScrollHero: React.FC<SmoothScrollHeroProps> = ({
  scrollHeight = 1500,
  desktopImage,
  mobileImage,
  initialClipPercentage = 20,
  finalClipPercentage = 80,
}) => (
  <div
    style={{ height: `calc(${scrollHeight}px + 100vh)` }}
    className="relative w-full"
  >
    <SmoothScrollHeroBackground
      scrollHeight={scrollHeight}
      desktopImage={desktopImage}
      mobileImage={mobileImage}
      initialClipPercentage={initialClipPercentage}
      finalClipPercentage={finalClipPercentage}
    />
  </div>
);

export default SmoothScrollHero;
