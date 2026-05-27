"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Trees,
  Wind,
  HeartPulse,
  Lightbulb,
  Users,
  Globe,
} from "lucide-react";
import Image from "next/image";
import { GlassCard } from "@/components/ui/glass-card";
import { AnimatedCounter } from "@/components/ui/animated-counter";

const IMPACTS = [
  {
    icon: <Trees className="h-5 w-5" />,
    title: "Reduced deforestation",
    body: "Every household on LPG protects an average of 2.4 mature trees per year that would otherwise be felled for charcoal.",
    metric: { value: 280000, suffix: "+", label: "Trees protected / year" },
  },
  {
    icon: <Wind className="h-5 w-5" />,
    title: "Reduced smoke exposure",
    body: "Clean cooking eliminates indoor PM2.5 from open-fire kitchens — the leading environmental health risk for women and children.",
    metric: { value: 92, suffix: "%", label: "Indoor air quality gain" },
  },
  {
    icon: <HeartPulse className="h-5 w-5" />,
    title: "Improved health outcomes",
    body: "Fewer respiratory illnesses, fewer burns, fewer hospital visits — measurable change for the families we serve.",
    metric: { value: 120000, suffix: "+", label: "Households impacted" },
  },
  {
    icon: <Lightbulb className="h-5 w-5" />,
    title: "Rural electrification",
    body: "Solar home systems power lighting, phone charging and small businesses in off-grid villages across Uganda.",
    metric: { value: 76, suffix: "", label: "Districts covered" },
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Women empowerment",
    body: "Women regain hours each day that were spent gathering fuel — time invested back into education, work and family.",
    metric: { value: 14, suffix: " hrs/wk", label: "Time recovered" },
  },
  {
    icon: <Globe className="h-5 w-5" />,
    title: "Carbon avoided",
    body: "Cleaner fuels and electric cooking displace the equivalent of tens of thousands of tonnes of CO₂ annually.",
    metric: { value: 38000, suffix: " t", label: "CO₂ avoided / year" },
  },
];

export function Impact() {
  return (
    <section id="impact" className="section relative">
      <div className="container">
        {/* Bento grid */}
        <div className="grid gap-4 md:gap-5 grid-cols-6 auto-rows-[minmax(180px,auto)]">
          {/* Big map / globe card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="col-span-6 lg:col-span-4 row-span-2"
          >
            <GlassCard className="h-full !p-0 overflow-hidden">
              <UgandaMap />
            </GlassCard>
          </motion.div>

          {IMPACTS.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.05 }}
              className={
                i === 0
                  ? "col-span-6 sm:col-span-3 lg:col-span-2"
                  : i === 1
                  ? "col-span-6 sm:col-span-3 lg:col-span-2"
                  : "col-span-6 sm:col-span-3 lg:col-span-2"
              }
            >
              <GlassCard className="h-full !p-6">
                <div className="flex items-start justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-wes-600 text-white shadow-eco">
                    {it.icon}
                  </span>
                  <div className="text-right">
                    <div className="font-display text-2xl font-semibold text-gradient-eco leading-none">
                      <AnimatedCounter value={it.metric.value} suffix={it.metric.suffix} />
                    </div>
                    <p className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">
                      {it.metric.label}
                    </p>
                  </div>
                </div>
                <p className="mt-4 font-display font-semibold">{it.title}</p>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  {it.body}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Stylised Uganda coverage panel — abstract dotted map with pulsing nodes.
 * Renders a clean, premium visualization without external assets.
 */
function UgandaMap() {
  // Deterministic dot grid simulating coverage density.
  const dots = React.useMemo(() => {
    const cols = 28;
    const rows = 18;
    const arr: { x: number; y: number; on: boolean; pulse: boolean }[] = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        // Simulate Uganda-ish silhouette mask.
        const cx = cols / 2;
        const cy = rows / 2;
        const dx = (c - cx) / cx;
        const dy = (r - cy) / cy;
        const inMask = dx * dx + dy * dy < 0.85 && !(r < 4 && Math.abs(c - cx) > 5);
        const seed = (r * 31 + c * 17) % 100;
        if (inMask) {
          arr.push({
            x: c,
            y: r,
            on: seed > 25,
            pulse: seed % 17 === 0,
          });
        }
      }
    }
    return arr;
  }, []);

  const HUBS = [
    { x: 12, y: 11, label: "Kampala" },
    { x: 9, y: 12, label: "Entebbe" },
    { x: 15, y: 10, label: "Mukono" },
    { x: 6, y: 7, label: "Hoima" },
    { x: 20, y: 6, label: "Gulu" },
    { x: 22, y: 13, label: "Mbale" },
    { x: 4, y: 14, label: "Mbarara" },
  ];

  return (
    <div className="relative h-full w-full p-6 md:p-8 overflow-hidden">
      {/* Aerial Uganda background */}
      <Image
        src="https://images.unsplash.com/photo-1612836696862-d2a9e7efdf97?w=900&h=600&fit=crop&q=60"
        alt=""
        fill
        className="object-cover opacity-[0.08]"
        sizes="(max-width: 1024px) 100vw, 66vw"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-card/30 to-transparent" />
      {/* heading */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-widest text-wes-600 dark:text-wes-400">
            National coverage
          </p>
          <p className="font-display text-2xl md:text-3xl font-semibold tracking-tight">
            76 districts · 9 branches
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-wes-500 animate-pulse" />
          <span className="text-xs text-muted-foreground">Live network</span>
        </div>
      </div>

      {/* Map */}
      <div className="relative mt-6 h-[calc(100%-6rem)] w-full">
        <svg viewBox="0 0 28 18" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid meet">
          {dots.map((d, i) => (
            <circle
              key={i}
              cx={d.x + 0.5}
              cy={d.y + 0.5}
              r={d.on ? 0.18 : 0.08}
              className={
                d.on
                  ? "fill-wes-500/70"
                  : "fill-muted-foreground/30"
              }
            />
          ))}
          {/* Connection lines from Kampala hub */}
          {HUBS.slice(1).map((h, i) => (
            <line
              key={i}
              x1={12.5}
              y1={11.5}
              x2={h.x + 0.5}
              y2={h.y + 0.5}
              className="stroke-wes-500/40"
              strokeWidth={0.06}
              strokeDasharray="0.3 0.2"
            />
          ))}
          {HUBS.map((h, i) => (
            <g key={h.label}>
              <circle
                cx={h.x + 0.5}
                cy={h.y + 0.5}
                r={0.45}
                className="fill-wes-500/20"
              >
                <animate
                  attributeName="r"
                  values="0.4;0.9;0.4"
                  dur={`${2.5 + i * 0.3}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.6;0.05;0.6"
                  dur={`${2.5 + i * 0.3}s`}
                  repeatCount="indefinite"
                />
              </circle>
              <circle
                cx={h.x + 0.5}
                cy={h.y + 0.5}
                r={0.25}
                className="fill-wes-500"
              />
            </g>
          ))}
        </svg>

        {/* Hub labels overlay */}
        <div className="pointer-events-none absolute inset-0">
          {HUBS.map((h) => (
            <span
              key={h.label}
              className="absolute -translate-x-1/2 -translate-y-[160%] rounded-full bg-background/80 px-2 py-0.5 text-[9px] font-medium text-foreground backdrop-blur border border-border"
              style={{
                left: `${((h.x + 0.5) / 28) * 100}%`,
                top: `${((h.y + 0.5) / 18) * 100}%`,
              }}
            >
              {h.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
