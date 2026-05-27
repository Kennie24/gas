"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Smartphone,
  Wallet,
  CalendarClock,
  TrendingUp,
  CheckCircle2,
  Sun,
  Flame,
  Wifi,
  ArrowDownLeft,
  ArrowUpRight,
} from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";

const PILLARS = [
  {
    icon: <Sun className="h-4 w-4" />,
    title: "PAYGo Solar",
    body: "Daily-affordable solar home systems unlocked via mobile money — own the system after the final payment.",
  },
  {
    icon: <Flame className="h-4 w-4" />,
    title: "Pay-As-You-Cook",
    body: "Top-up LPG by the meal. Pay only for the gas you actually use, starting from UGX 1,500 / day.",
  },
  {
    icon: <Wallet className="h-4 w-4" />,
    title: "Financial Inclusion",
    body: "No bank account required. Mobile money, agent network and on-demand support across 76 districts.",
  },
  {
    icon: <CalendarClock className="h-4 w-4" />,
    title: "Flexible Plans",
    body: "Daily, weekly or monthly cycles — adapt to family income while building a clean energy track record.",
  },
];

export function PayGo() {
  return (
    <section id="paygo" className="section relative overflow-hidden">
      {/* gradient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-[-10rem] h-[30rem] w-[30rem] rounded-full bg-wes-500/8 blur-3xl" />
        <div className="absolute bottom-0 right-[-10rem] h-[28rem] w-[28rem] rounded-full bg-emerald-400/8 blur-3xl" />
      </div>

      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          {/* Phone mockup */}
          <PhoneMockup />

          {/* Right column */}
          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              {PILLARS.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                >
                  <GlassCard className="!p-5 h-full">
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-wes-500/15 text-wes-600 dark:text-wes-400">
                      {p.icon}
                    </span>
                    <p className="mt-4 font-display font-semibold">{p.title}</p>
                    <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                      {p.body}
                    </p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 glass-strong rounded-2xl p-5 flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-wes-600 text-white">
                <TrendingUp className="h-5 w-5" />
              </span>
              <div className="flex-1">
                <p className="font-display font-semibold">120,000+ households served</p>
                <p className="text-xs text-muted-foreground">
                  Daily-payment model · 9 branches · 20 points of sale
                </p>
              </div>
              <Badge>Live</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneMockup() {
  const TXNS = [
    { type: "out", label: "Top-up · Solar 80W", amount: "UGX 1,200", time: "today · 07:42", icon: <Sun className="h-3.5 w-3.5" /> },
    { type: "out", label: "PACo · LPG refill", amount: "UGX 1,500", time: "today · 06:10", icon: <Flame className="h-3.5 w-3.5" /> },
    { type: "in", label: "Wallet top-up", amount: "UGX 10,000", time: "yesterday", icon: <Wallet className="h-3.5 w-3.5" /> },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="relative mx-auto w-full max-w-[420px]"
    >
      {/* halo */}
      <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-wes-500/8 blur-3xl" />

      <div className="relative rounded-[2.5rem] border border-border bg-ink-950 p-3 shadow-[0_30px_100px_-20px_rgba(22,163,74,0.45)]">
        {/* notch */}
        <div className="mx-auto h-6 w-32 rounded-b-2xl bg-ink-950" />

        <div className="rounded-[2rem] bg-background overflow-hidden">
          {/* status bar */}
          <div className="flex items-center justify-between px-5 pt-4 pb-2 text-[10px] font-medium text-muted-foreground">
            <span>9:41</span>
            <span className="inline-flex items-center gap-1">
              <Wifi className="h-3 w-3" />
              <span>WES Pay</span>
            </span>
          </div>

          {/* Header */}
          <div className="px-5 pt-2 pb-4">
            <p className="text-xs text-muted-foreground">Wallet balance</p>
            <p className="font-display text-3xl font-semibold tracking-tight">
              UGX <span className="text-gradient-eco">12,400</span>
            </p>
            <p className="mt-1 text-[10px] text-muted-foreground inline-flex items-center gap-1">
              <Smartphone className="h-3 w-3 text-wes-500" />
              Linked · MTN MoMo
            </p>
          </div>

          {/* Active service card */}
          <div className="mx-5 rounded-2xl bg-wes-600 p-4 text-white shadow-eco">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-widest opacity-90">
                <Flame className="h-3 w-3" />
                Pay-As-You-Cook
              </span>
              <span className="rounded-full bg-white/20 px-2 py-0.5 text-[10px]">Active</span>
            </div>
            <p className="mt-3 text-2xl font-semibold">UGX 1,500 / day</p>
            <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/20">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "72%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, delay: 0.4 }}
                className="h-full rounded-full bg-white"
              />
            </div>
            <div className="mt-2 flex items-center justify-between text-[10px] opacity-90">
              <span>3.6 / 5.0 kg remaining</span>
              <span className="inline-flex items-center gap-1">
                <CheckCircle2 className="h-3 w-3" />
                Auto-renew
              </span>
            </div>
          </div>

          {/* Transactions */}
          <div className="px-5 py-4">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-xs font-medium text-foreground">Recent activity</p>
              <span className="text-[10px] text-muted-foreground">This week</span>
            </div>
            <ul className="divide-y divide-border">
              {TXNS.map((t, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="flex items-center justify-between py-2.5"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`grid h-8 w-8 place-items-center rounded-full ${
                        t.type === "out"
                          ? "bg-wes-500/10 text-wes-600 dark:text-wes-400"
                          : "bg-emerald-500/10 text-emerald-500"
                      }`}
                    >
                      {t.icon}
                    </span>
                    <div>
                      <p className="text-xs font-medium">{t.label}</p>
                      <p className="text-[10px] text-muted-foreground">{t.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-medium">
                    {t.type === "out" ? (
                      <ArrowUpRight className="h-3 w-3 text-wes-500" />
                    ) : (
                      <ArrowDownLeft className="h-3 w-3 text-emerald-500" />
                    )}
                    {t.amount}
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Bottom CTA */}
          <div className="px-5 pb-5">
            <button className="w-full rounded-xl bg-[#F6E91A] px-4 py-3 text-sm font-medium text-zinc-900 shadow-[0_8px_32px_-8px_rgba(246,233,26,0.5)]">
              Top up · Pay with MoMo
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
