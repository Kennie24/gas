"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BarChart3,
  LineChart,
  Leaf,
  Globe2,
  Building2,
  ShieldCheck,
  ArrowUpRight,
  TrendingUp,
} from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const PILLARS = [
  { icon: <Leaf className="h-4 w-4" />, label: "Carbon Reduction", value: "38 kt+", caption: "CO₂ avoided / year" },
  { icon: <Globe2 className="h-4 w-4" />, label: "SDG Alignment", value: "7 · 13", caption: "Affordable energy · Climate" },
  { icon: <Building2 className="h-4 w-4" />, label: "Clean Cooking", value: "120k+", caption: "Households adopted" },
  { icon: <TrendingUp className="h-4 w-4" />, label: "Scalable Impact", value: "76 / 146", caption: "Districts active" },
];

const GROWTH = [
  { year: "2018", value: 32 },
  { year: "2019", value: 41 },
  { year: "2020", value: 55 },
  { year: "2021", value: 68 },
  { year: "2022", value: 84 },
  { year: "2023", value: 100 },
  { year: "2024", value: 118 },
  { year: "2025", value: 138 },
];

export function Investors() {
  return (
    <section id="investors" className="section relative">
      <div className="container">
        <div className="grid gap-5 lg:grid-cols-3">
          {/* Growth chart */}
          <GlassCard beam className="lg:col-span-2 !p-7 lg:!p-9">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <Badge icon={<LineChart className="h-3.5 w-3.5" />}>Household growth · indexed</Badge>
                <p className="mt-3 font-display text-2xl md:text-3xl font-semibold tracking-tight">
                  120,000+ households · compounding 31% YoY
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  2018 baseline = 100. Demand outpaces supply across all served districts.
                </p>
              </div>
              <Button asChild variant="ghost" size="sm" className="rounded-full">
                <Link href="/contact">
                  Investor brief
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </Button>
            </div>

            <GrowthChart data={GROWTH} />
          </GlassCard>

          {/* ESG pillars */}
          <div className="grid grid-cols-2 gap-4">
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.06 }}
              >
                <GlassCard className="!p-5 h-full">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-wes-500/15 text-wes-600 dark:text-wes-400">
                    {p.icon}
                  </span>
                  <p className="mt-4 text-[10px] uppercase tracking-widest text-muted-foreground">
                    {p.label}
                  </p>
                  <p className="font-display text-2xl font-semibold text-gradient-eco">
                    {p.value}
                  </p>
                  <p className="text-xs text-muted-foreground">{p.caption}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trust strip */}
        <div className="mt-6 glass-strong rounded-2xl p-5 grid gap-5 md:grid-cols-3 items-center">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-wes-600 text-white">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <div>
              <p className="font-display font-semibold">Verifiable Outcomes</p>
              <p className="text-xs text-muted-foreground">Carbon, health & energy access reporting</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-wes-600 text-white">
              <BarChart3 className="h-5 w-5" />
            </span>
            <div>
              <p className="font-display font-semibold">Mobile-Money Cashflows</p>
              <p className="text-xs text-muted-foreground">Daily revenue · low default · receivables-ready</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-wes-600 text-white">
              <Globe2 className="h-5 w-5" />
            </span>
            <div>
              <p className="font-display font-semibold">Continental Playbook</p>
              <p className="text-xs text-muted-foreground">Uganda-proven · replicable across EAC</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GrowthChart({ data }: { data: { year: string; value: number }[] }) {
  const w = 600;
  const h = 220;
  const pad = 28;
  const max = Math.max(...data.map((d) => d.value)) * 1.1;
  const stepX = (w - pad * 2) / (data.length - 1);
  const points = data.map((d, i) => [
    pad + i * stepX,
    h - pad - (d.value / max) * (h - pad * 2),
  ]);
  const path = points
    .map((p, i) => (i === 0 ? `M${p[0]},${p[1]}` : `L${p[0]},${p[1]}`))
    .join(" ");
  const area = `${path} L${points[points.length - 1][0]},${h - pad} L${pad},${h - pad} Z`;

  return (
    <div className="mt-6">
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto">
        <defs>

        </defs>

        {/* grid */}
        {[0.25, 0.5, 0.75].map((g, i) => (
          <line
            key={i}
            x1={pad}
            x2={w - pad}
            y1={pad + g * (h - pad * 2)}
            y2={pad + g * (h - pad * 2)}
            className="stroke-border"
            strokeDasharray="3 4"
            strokeWidth={1}
          />
        ))}

        {/* area + line */}
        <motion.path
          d={area}
          fill="rgba(34,197,94,0.25)"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2 }}
        />
        <motion.path
          d={path}
          fill="none"
          stroke="#22C55E"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: "easeOut" }}
        />

        {/* points */}
        {points.map((p, i) => (
          <g key={i}>
            <circle cx={p[0]} cy={p[1]} r={4} className="fill-background stroke-wes-500" strokeWidth={2} />
          </g>
        ))}

        {/* x labels */}
        {data.map((d, i) => (
          <text
            key={d.year}
            x={pad + i * stepX}
            y={h - 6}
            textAnchor="middle"
            className="fill-muted-foreground"
            fontSize="10"
          >
            {d.year}
          </text>
        ))}
      </svg>
    </div>
  );
}
