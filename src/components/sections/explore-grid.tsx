"use client";

import { motion } from "framer-motion";
import { ArrowRight, Layers3, Star } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";

const CARDS = ["About WES GAS", "LPG & Solar", "PAYGo Access", "Impact & SDGs"];

export function ExploreGrid() {
  return (
    <section id="explore" className="relative overflow-hidden bg-background py-0">
      <div className="grid items-stretch lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, delay: 0.1, ease: "easeOut" }}
          className="max-w-none bg-[#EE6C22] px-5 py-12 sm:px-6 md:py-16 lg:order-1 lg:flex lg:flex-col lg:justify-center lg:px-16 lg:py-28 xl:px-24"
        >
          <Badge
            icon={<Layers3 className="h-3.5 w-3.5" />}
            className="w-fit border-white/25 bg-white/10 text-white"
          >
            Our Platform
          </Badge>

          <h2 className="mt-5 max-w-xl font-display text-[2rem] font-semibold tracking-tight text-white text-balance md:text-5xl">
            One platform.{" "}
            <span className="text-white">Every clean energy answer.</span>
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-white sm:text-base md:mt-5 md:text-lg">
            Products, PAYGo financing, measurable impact and partnership pathways,
            structured for fast discovery in one place.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 md:mt-8">
            {CARDS.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-border bg-card p-3 text-sm font-medium text-foreground shadow-sm sm:rounded-2xl sm:p-4"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#1D8B43]/10 text-[#1D8B43]">
                  <Star className="h-4 w-4" />
                </span>
                {item}
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-5 md:mt-8">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-full bg-[#1D8B43] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#176e35]"
            >
              See products
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="text-sm font-semibold text-foreground transition-colors hover:text-[#1D8B43]"
            >
              Contact WES GAS
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="relative self-stretch lg:order-2"
        >
          <div className="relative h-full overflow-hidden border border-border bg-muted shadow-2xl shadow-black/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/One%20platform.png"
              alt="WES GAS solar home system products"
              className="h-full min-h-[360px] w-full object-cover object-center sm:min-h-[460px] lg:min-h-[680px]"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute bottom-4 left-4 right-4 border border-white/20 bg-black/35 p-4 text-white backdrop-blur-md sm:bottom-6 sm:left-6 sm:right-6 sm:p-5">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#EBCA30] text-[#1D8B43] sm:h-12 sm:w-12">
                  <Layers3 className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-sm font-semibold">One Clean Energy Platform</p>
                  <p className="text-xs text-white/70">
                    Cooking, power and financing in one place
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
