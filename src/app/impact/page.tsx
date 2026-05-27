import type { Metadata } from "next";
import { TrendingUp } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { Impact } from "@/components/sections/impact";
import { Testimonials } from "@/components/sections/testimonials";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "120,000+ households served · 76 districts covered · 280,000+ trees protected per year. WES GAS delivers verifiable climate, health and economic outcomes for Uganda.",
};

export default function ImpactPage() {
  return (
    <PageShell
      breadcrumb="Impact"
      eyebrow="Our Impact"
      eyebrowIcon={<TrendingUp className="h-3.5 w-3.5" />}
      heroImage="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&h=800&fit=crop&q=80"
      title={
        <>
          Measurable change for <span className="text-gradient-eco">people and planet</span>.
        </>
      }
      description="Every cylinder filled, every panel installed, every electric meal cooked compounds into national-scale climate, health and economic outcomes across Uganda."
    >
      <Impact />
      <Testimonials />
    </PageShell>
  );
}
