"use client";

import * as React from "react";
import { Marquee } from "@/components/ui/marquee";
import {
  Trees,
  Wind,
  Users,
  Globe2,
  Flame,
  Sun,
  Zap,
  ShieldCheck,
  Award,
  Leaf,
} from "lucide-react";

const ITEMS = [
  { icon: <Users className="h-4 w-4" />,      text: "120,000+ Households Served" },
  { icon: <Globe2 className="h-4 w-4" />,     text: "76 Districts Covered" },
  { icon: <Trees className="h-4 w-4" />,      text: "280,000+ Trees Protected / Year" },
  { icon: <Wind className="h-4 w-4" />,       text: "92% Indoor Air Quality Gain" },
  { icon: <Flame className="h-4 w-4" />,      text: "Pay-As-You-Cook · UGX 1,500/day" },
  { icon: <Sun className="h-4 w-4" />,        text: "PAYGo Solar · Daily Affordable" },
  { icon: <Zap className="h-4 w-4" />,        text: "38,000 t CO₂ Avoided / Year" },
  { icon: <ShieldCheck className="h-4 w-4" />,text: "Certified Clean Cooking Utility" },
  { icon: <Award className="h-4 w-4" />,      text: "FUSE Social Enterprise of the Year" },
  { icon: <Leaf className="h-4 w-4" />,       text: "ESG-Grade Climate Platform · Since 2008" },
];

export function Ticker() {
  return (
    <div className="relative w-full overflow-hidden bg-[#1D8B43] py-2.5">
      {/* left + right fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#1D8B43] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#1D8B43] to-transparent" />

      <Marquee pauseOnHover repeat={3} className="[--duration:55s] [--gap:2.5rem]">
        {ITEMS.map((item, i) => (
          <TickerItem key={i} icon={item.icon} text={item.text} />
        ))}
      </Marquee>
    </div>
  );
}

function TickerItem({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <span className="inline-flex items-center gap-2.5 text-sm font-medium text-white/90 whitespace-nowrap select-none">
      <span className="text-white/70">{icon}</span>
      {text}
      <span className="ml-2 text-white/30">·</span>
    </span>
  );
}
