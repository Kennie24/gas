"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { HeroSection2 } from "@/components/ui/hero-section-2";
import { WordRotate } from "@/components/ui/word-rotate";
import { NumberTicker } from "@/components/ui/number-ticker";
import { BorderBeam } from "@/components/ui/border-beam";
import { Sparkles, ShieldCheck, Leaf, Zap, Handshake, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Badge } from "@/components/ui/badge";
import { COMPANY, HERO_STATS } from "@/data/company";

export function Hero() {
  const heading = (
    <>
      Powering Life,{" "}
      <br className="hidden sm:block" />
      <WordRotate
        words={[
          "Protecting Nature.",
          "Lighting Uganda.",
          "Cooling Africa.",
          "Cooking Cleaner.",
          "Building Tomorrow.",
        ]}
        duration={3200}
        className="text-wes-500"
        framerProps={{
          initial:    { opacity: 0, y: 14 },
          animate:    { opacity: 1, y: 0 },
          exit:       { opacity: 0, y: -14 },
          transition: { duration: 0.42, ease: "easeInOut" },
        }}
      />
    </>
  );

  return (
    <>
      <HeroSection2
        slogan={`Uganda's leading clean energy utility · Since ${COMPANY.founded}`}
        title={heading}
        subtitle={`WANA Energy Solutions delivers affordable LPG, solar systems, solar freezers and electric pressure cookers to homes, businesses and rural communities across ${COMPANY.coverage} — with daily Pay-As-You-Go financing built for every household.`}
        callToAction={{ text: "GET STARTED", href: "/contact" }}
        backgroundImages={[
          "/hero.gif",
          "/LPG Cylinders.png",
          "/Solar Home Systems.png",
          "/Solar Freezers.png",
          "/Electric Pressure Cookers.png",
          "/pay as you go.png",
        ]}

      >
        {/* Secondary CTA + trust strip */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <MagneticButton strength={0.25}>
              <Button asChild variant="glass" size="lg" className="rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20">
                <Link href="/investors">
                  <Handshake className="h-4 w-4" />
                  Become a Partner
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </Button>
            </MagneticButton>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-white/80">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-[#F6E91A]" />
              Certified clean cooking
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Leaf className="h-4 w-4 text-[#F6E91A]" />
              ESG-aligned operations
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Zap className="h-4 w-4 text-[#F6E91A]" />
              Daily PayGo financing
            </span>
          </div>
        </div>
      </HeroSection2>

      {/* ── Stats panel ─────────────────────────────────────────────────── */}
      <div className="container -mt-6 pb-16 md:pb-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="relative grid grid-cols-2 lg:grid-cols-4 overflow-hidden rounded-3xl bg-[#EBCA30]">
            <BorderBeam
              size={180}
              duration={10}
              colorFrom="#ffffff"
              colorTo="#1D8B43"
              borderWidth={1}
            />
            {HERO_STATS.map((s, i) => (
              <div
                key={s.label}
                className="relative p-6 md:p-8 border-b border-black/15 last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0 [&:nth-child(2)]:border-b lg:[&:nth-child(2)]:border-b-0"
              >
                <div className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-zinc-950 tabular-nums">
                  <NumberTicker
                    value={s.value}
                    className="text-zinc-950 font-display text-4xl md:text-5xl font-semibold"
                  />
                  <span>{s.suffix}</span>
                </div>
                <p className="mt-2 text-sm font-medium text-zinc-900/75">{s.label}</p>
                {i < HERO_STATS.length - 1 && (
                  <span className="pointer-events-none absolute -right-px top-1/2 hidden h-12 -translate-y-1/2 w-px bg-gradient-to-b from-transparent via-black/25 to-transparent lg:block" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
}
