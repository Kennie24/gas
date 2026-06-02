"use client";

import { motion } from "framer-motion";
import { Award, Star, Trophy } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function Awards() {
  return (
    <section id="awards" className="relative mt-12 overflow-hidden bg-background py-0 md:mt-24">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: recognition image */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="relative self-stretch"
          >
            <div className="relative overflow-hidden border border-border bg-muted shadow-2xl shadow-black/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1400&auto=format&fit=crop&q=80"
                alt="Solar panels representing WANA Energy Solutions national recognition"
                className="h-full min-h-[360px] w-full object-cover sm:min-h-[460px] lg:min-h-[680px]"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-4 left-4 right-4 border border-white/20 bg-black/35 p-4 text-white backdrop-blur-md sm:bottom-6 sm:left-6 sm:right-6 sm:p-5">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#F6E91A] text-[#1D8B43] sm:h-12 sm:w-12">
                    <Trophy className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">FUSE Award Recognition</p>
                    <p className="text-xs text-white/70">Clean energy impact across Uganda</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: text */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, delay: 0.1, ease: "easeOut" }}
            className="max-w-xl px-5 py-12 sm:px-6 md:py-16 lg:px-0 lg:py-28 lg:pr-16 xl:pr-24"
          >
            <Badge
              icon={<Award className="h-3.5 w-3.5" />}
              className="border-[#1D8B43]/25 bg-[#1D8B43]/10 text-[#1D8B43]"
            >
              National Recognition
            </Badge>

            <h2 className="mt-5 font-display text-[2rem] font-semibold tracking-tight text-foreground text-balance md:text-5xl">
              Environmental Social Enterprise{" "}
              <span className="text-[#1D8B43]">of the Year</span>
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base md:mt-5 md:text-lg">
              Awarded by the{" "}
              <span className="font-semibold text-foreground">
                Federation of Uganda Social Entrepreneurs (FUSE)
              </span>
              , recognising WANA Energy Solutions&rsquo; measurable impact on climate,
              health and rural livelihoods across Uganda.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 md:mt-8">
              {["Climate Action", "Clean Cooking", "Social Enterprise", "Rural Impact"].map((item) => (
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
          </motion.div>
      </div>
    </section>
  );
}
