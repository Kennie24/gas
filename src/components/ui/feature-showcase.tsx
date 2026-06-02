"use client";

import * as React from "react";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export type TabMedia = {
  value: string;
  label: string;
  src: string;
  alt?: string;
};

export type ShowcaseStep = {
  id: string;
  title: string;
  text: string;
};

export type FeatureShowcaseProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  stats?: string[];
  steps?: ShowcaseStep[];
  tabs: TabMedia[];
  defaultTab?: string;
  panelMinHeight?: number;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  className?: string;
};

export function FeatureShowcase({
  eyebrow = "Discover",
  title,
  description,
  stats = ["1 reference", "30s setup", "Share-ready"],
  steps = [
    {
      id: "step-1",
      title: "Drop a reference",
      text: "Upload a single image. We read it like a brief and extract palette, texture and cues.",
    },
    {
      id: "step-2",
      title: "Pick the vibe",
      text: "Switch between mockup, screen, or abstract views and tune the mood instantly.",
    },
    {
      id: "step-3",
      title: "Export & share",
      text: "Get a moodboard ready for your team with consistent visuals and notes.",
    },
  ],
  tabs,
  defaultTab,
  panelMinHeight = 720,
  primaryHref = "/products",
  primaryLabel = "Explore products",
  secondaryHref = "/contact",
  secondaryLabel = "Talk to WES GAS",
  className,
}: FeatureShowcaseProps) {
  const initial = defaultTab ?? (tabs[0]?.value ?? "tab-0");

  return (
    <section id="explore" className={cn("w-full bg-[#1D8B43] text-white", className)}>
      <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-12 md:py-20 lg:gap-14">
        <div className="md:col-span-6">
          <Badge className="mb-6 border-white/25 bg-white/10 text-white">
            {eyebrow}
          </Badge>

          <h2 className="text-balance font-display text-4xl font-bold leading-[0.95] tracking-tight sm:text-5xl md:text-6xl">
            {title}
          </h2>

          {description ? (
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
              {description}
            </p>
          ) : null}

          {stats.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {stats.map((stat) => (
                <Badge key={stat} className="border-white/20 bg-white/10 text-white">
                  {stat}
                </Badge>
              ))}
            </div>
          )}

          <div className="mt-10 max-w-xl">
            <Accordion type="single" collapsible defaultValue={steps[0]?.id} className="w-full">
              {steps.map((step) => (
                <AccordionItem key={step.id} value={step.id} className="border-white/20">
                  <AccordionTrigger className="text-left text-base font-semibold text-white hover:text-[#F6E91A] hover:no-underline">
                    {step.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-white/72">
                    {step.text}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={primaryHref}>{primaryLabel}</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border border-white/30 bg-white/10 text-white hover:bg-white hover:text-[#1D8B43]">
                <Link href={secondaryHref}>{secondaryLabel}</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="md:col-span-6">
          <Card
            className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-0 shadow-2xl shadow-black/20"
            style={{ height: panelMinHeight, minHeight: panelMinHeight }}
          >
            <Tabs defaultValue={initial} className="relative h-full w-full">
              <div className="relative h-full w-full">
                {tabs.map((tab, index) => (
                  <TabsContent
                    key={tab.value}
                    value={tab.value}
                    className={cn(
                      "absolute inset-0 m-0 h-full w-full",
                      "data-[state=inactive]:hidden",
                    )}
                  >
                    <img
                      src={tab.src}
                      alt={tab.alt ?? tab.label}
                      className="h-full w-full object-cover"
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  </TabsContent>
                ))}
              </div>

              <div className="pointer-events-auto absolute inset-x-0 bottom-4 z-10 flex w-full justify-center px-4">
                <TabsList className="flex max-w-full gap-2 overflow-x-auto rounded-xl border border-white/20 bg-black/30 p-1 text-white backdrop-blur">
                  {tabs.map((tab) => (
                    <TabsTrigger
                      key={tab.value}
                      value={tab.value}
                      className="rounded-lg px-4 py-2 text-white/75 data-[state=active]:bg-[#F6E91A] data-[state=active]:text-zinc-900"
                    >
                      {tab.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
            </Tabs>
          </Card>
        </div>
      </div>
    </section>
  );
}
