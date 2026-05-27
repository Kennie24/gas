"use client";

import * as React from "react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { Trophy, Award, Star, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const SCROLL_HEIGHT = 1200; // px of scroll that drives the full reveal

export function Awards() {
  const containerRef = React.useRef<HTMLDivElement>(null);

  /**
   * scrollYProgress is 0 → 1 as the user scrolls from the top of this
   * section to the bottom, regardless of where it sits on the page.
   */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Clip-path corners: starts as a centred box, opens to full-bleed
  const clipStart = useTransform(scrollYProgress, [0, 0.85], [22, 0]);
  const clipEnd   = useTransform(scrollYProgress, [0, 0.85], [78, 100]);
  const clipPath  = useMotionTemplate`polygon(${clipStart}% ${clipStart}%, ${clipEnd}% ${clipStart}%, ${clipEnd}% ${clipEnd}%, ${clipStart}% ${clipEnd}%)`;

  // Background zooms out as the clip opens
  const bgSize = useTransform(scrollYProgress, [0, 1], ["170%", "100%"]);

  return (
    <section id="awards" className="relative">
      {/*
       * The outer div is taller than 100 vh so there's enough scroll room.
       * scrollYProgress is measured against this element.
       */}
      <div
        ref={containerRef}
        style={{ height: `calc(${SCROLL_HEIGHT}px + 100vh)` }}
        className="relative w-full"
      >
        {/* ── Single sticky viewport — all layers live inside ── */}
        <div className="sticky top-0 h-screen overflow-hidden">

          {/* Layer 1 — clip-path image reveal */}
          <motion.div
            className="absolute inset-0 bg-ink-950"
            style={{ clipPath }}
          >
            {/* Mobile */}
            <motion.div
              className="absolute inset-0 md:hidden"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=900&auto=format&fit=crop&q=80)",
                backgroundSize: bgSize,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
            {/* Desktop */}
            <motion.div
              className="absolute inset-0 hidden md:block"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1509391366360-2e959784a276?w=2000&auto=format&fit=crop&q=80)",
                backgroundSize: bgSize,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
          </motion.div>

          {/* Layer 2 — dark tint for readability */}
          <div className="absolute inset-0 bg-ink-950/65 pointer-events-none" />

          {/* Layer 3 — award content */}
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <div className="w-full max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8 }}
                className="grid gap-10 lg:grid-cols-[auto_1fr] items-center"
              >
                {/* Trophy */}
                <div className="relative mx-auto lg:mx-0">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="relative grid h-44 w-44 place-items-center rounded-3xl bg-amber-400 shadow-[0_30px_80px_-20px_rgba(245,158,11,0.7)]"
                  >
                    <Trophy className="h-20 w-20 text-white drop-shadow-lg" />
                    <span className="absolute -top-3 -right-3 grid h-10 w-10 place-items-center rounded-full bg-background border border-amber-400/60 text-amber-500 shadow-lg">
                      <Sparkles className="h-4 w-4" />
                    </span>
                    <span className="absolute inset-0 rounded-3xl ring-1 ring-white/30" />
                  </motion.div>

                  {[...Array(6)].map((_, i) => (
                    <motion.span
                      key={i}
                      className="absolute h-1.5 w-1.5 rounded-full bg-amber-300"
                      style={{
                        left: `${20 + (i * 11) % 80}%`,
                        top:  `${(i * 17) % 100}%`,
                      }}
                      animate={{ opacity: [0, 1, 0], scale: [0.6, 1.4, 0.6] }}
                      transition={{ duration: 2 + (i % 3), delay: i * 0.4, repeat: Infinity }}
                    />
                  ))}
                </div>

                {/* Text */}
                <div>
                  <Badge
                    icon={<Award className="h-3.5 w-3.5" />}
                    className="border-amber-500/30 bg-amber-500/15 text-amber-300"
                  >
                    National Recognition
                  </Badge>

                  <h2 className="mt-5 font-display text-3xl md:text-5xl font-semibold tracking-tight text-white text-balance">
                    Environmental Social Enterprise{" "}
                    <span className="text-amber-400">of the Year</span>
                  </h2>

                  <p className="mt-4 text-white/70 leading-relaxed max-w-xl">
                    Awarded by the{" "}
                    <span className="text-white font-medium">
                      Federation of Uganda Social Entrepreneurs (FUSE)
                    </span>
                    , recognising WANA Energy Solutions&rsquo; measurable impact on
                    climate, health and rural livelihoods across Uganda.
                  </p>

                  <div className="mt-7 flex flex-wrap items-center gap-3">
                    {["Climate Action", "Clean Cooking", "Social Enterprise", "Rural Impact"].map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm"
                      >
                        <Star className="h-3 w-3 text-amber-400" />
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
