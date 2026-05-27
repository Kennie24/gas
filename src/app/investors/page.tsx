import type { Metadata } from "next";
import { Scale } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { Investors } from "@/components/sections/investors";
import { Awards } from "@/components/sections/awards";

export const metadata: Metadata = {
  title: "Investors & Partners",
  description:
    "An ESG-grade climate platform built for scale. Durable last-mile distribution, mobile-money receivables and verifiable carbon, health and energy access outcomes.",
};

export default function InvestorsPage() {
  return (
    <PageShell
      breadcrumb="Investors"
      eyebrow="Investors & Partners"
      eyebrowIcon={<Scale className="h-3.5 w-3.5" />}
      heroImage="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1600&h=800&fit=crop&q=80"
      title={
        <>
          An <span className="text-gradient-eco">ESG-grade</span> climate platform — built for scale.
        </>
      }
      description="WES GAS combines durable last-mile distribution, mobile-money receivables and verifiable climate outcomes — a category-defining African clean energy company ready for capital partnership."
    >
      <Investors />
      <Awards />
    </PageShell>
  );
}
