import type { Metadata } from "next";
import { Compass } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { About } from "@/components/sections/about";
import { Awards } from "@/components/sections/awards";
import { COMPANY } from "@/data/company";

export const metadata: Metadata = {
  title: "About",
  description: `Founded in ${COMPANY.founded} by ${COMPANY.founders.map((f) => f.name).join(" and ")}, WANA Energy Solutions is Uganda's leading clean energy social enterprise serving 120,000+ households across 76 districts.`,
};

export default function AboutPage() {
  return (
    <PageShell
      breadcrumb="About"
      eyebrow="Our Story"
      eyebrowIcon={<Compass className="h-3.5 w-3.5" />}
      heroImage="https://images.unsplash.com/photo-1521791055366-0d553872952f?w=1600&h=800&fit=crop&q=80"
      title={
        <>
          17 years of bringing <span className="text-gradient-eco">clean energy</span> to Uganda.
        </>
      }
      description={`Founded in ${COMPANY.founded} as a social enterprise, WANA Energy Solutions has grown from serving 45 households into one of East Africa's largest clean cooking utilities — operating across ${COMPANY.coverage}.`}
    >
      <About />
      <Awards />
    </PageShell>
  );
}
