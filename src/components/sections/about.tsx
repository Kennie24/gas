"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Leaf,
  Sparkles,
  Users,
  Target,
  HeartHandshake,
} from "lucide-react";
import Image from "next/image";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { TIMELINE, COMPANY } from "@/data/company";

// Professional headshots matched to founder roles
const FOUNDER_IMGS: Record<string, string> = {
  "Emmy Wasirwa": "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&q=80",
  "Margaret N Nakigudde": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&q=80",
};

export function About() {
  return (
    <section id="about" className="section relative">
      <div className="absolute inset-0 -z-10 bg-grid mask-radial opacity-50" />
      <div className="container">
        {/* Mission + impact callouts */}
        <div className="grid gap-5 lg:grid-cols-3 mb-20">
          <GlassCard className="lg:col-span-2">
            <div className="flex items-start gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-wes-600 text-white shadow-eco">
                <Target className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-wes-600 dark:text-wes-400">
                  Our Mission
                </p>
                <p className="mt-2 font-display text-xl md:text-2xl leading-snug text-balance">
                  &ldquo;{COMPANY.mission}&rdquo;
                </p>
              </div>
            </div>
          </GlassCard>

          <GlassCard>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-wes-500/10 text-wes-600 dark:text-wes-400">
                <Leaf className="h-4 w-4" />
              </span>
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  Industry
                </p>
                <p className="font-display font-semibold">{COMPANY.industry}</p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <Stat label="Founded" value={`${COMPANY.founded}`} />
              <Stat label="Employees" value={COMPANY.employees} />
              <Stat label="Type" value="Social Enterprise" />
              <Stat label="HQ" value="Kampala, UG" />
            </div>
          </GlassCard>
        </div>

        {/* Timeline */}
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-32">
            <Badge icon={<Sparkles className="h-3.5 w-3.5" />}>The Journey</Badge>
            <h3 className="mt-4 font-display text-3xl md:text-4xl font-semibold tracking-tight text-balance">
              From a single branch to <span className="text-gradient-eco">76 districts</span>.
            </h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Each milestone reflects a deeper commitment to safer cooking, cleaner
              air, and energy access for every Ugandan family.
            </p>
          </div>

          <ol className="relative space-y-6 before:absolute before:left-[15px] before:top-2 before:bottom-2 before:w-px before:bg-wes-500/40">
            {TIMELINE.map((t, i) => (
              <motion.li
                key={t.year}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: i * 0.05 }}
                className="relative pl-12"
              >
                <span className="absolute left-0 top-1.5 grid h-8 w-8 place-items-center rounded-full bg-wes-600 text-[10px] font-bold text-white shadow-eco ring-4 ring-background">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <GlassCard className="!p-5">
                  <div className="flex flex-wrap items-baseline gap-3">
                    <span className="font-display text-2xl font-semibold text-gradient-eco">
                      {t.year}
                    </span>
                    <span className="font-medium">{t.title}</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {t.body}
                  </p>
                </GlassCard>
              </motion.li>
            ))}
          </ol>
        </div>

        {/* Founders */}
        <div className="mt-24">
          <div className="flex items-center gap-3 mb-8">
            <Users className="h-5 w-5 text-wes-500" />
            <h3 className="font-display text-2xl font-semibold tracking-tight">
              Meet the founders
            </h3>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {COMPANY.founders.map((f) => (
              <GlassCard key={f.name} className="!p-7">
                <div className="flex items-center gap-5">
                  <div className="relative h-20 w-20 shrink-0 rounded-2xl overflow-hidden shadow-eco ring-2 ring-wes-500/30">
                    <Image
                      src={FOUNDER_IMGS[f.name] ?? "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&q=80"}
                      alt={f.name}
                      fill
                      className="object-cover"
                    />
                    <span className="absolute -bottom-2 -right-2 grid h-7 w-7 place-items-center rounded-full bg-background border border-border">
                      <HeartHandshake className="h-3.5 w-3.5 text-wes-500" />
                    </span>
                  </div>
                  <div>
                    <p className="font-display text-xl font-semibold">{f.name}</p>
                    <p className="text-sm text-muted-foreground">{f.role}, {COMPANY.legalName}</p>
                    <p className="mt-2 text-xs text-muted-foreground inline-flex items-center gap-1.5">
                      <Building2 className="h-3.5 w-3.5 text-wes-500" />
                      Since {COMPANY.founded}
                    </p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[11px] uppercase tracking-widest text-muted-foreground">{label}</p>
      <p className="mt-0.5 font-medium">{value}</p>
    </div>
  );
}

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");
}
