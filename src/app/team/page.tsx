import type { Metadata } from "next";
import { Users } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { Team } from "@/components/sections/team";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the founders, leaders and engineers behind WANA Energy Solutions (WES GAS) — the team powering clean energy across 76 districts in Uganda.",
};

export default function TeamPage() {
  return (
    <PageShell
      breadcrumb="Team"
      eyebrow="Our People"
      eyebrowIcon={<Users className="h-3.5 w-3.5" />}
      heroImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&h=900&fit=crop&q=80"
      title={
        <>
          The team behind <span className="text-gradient-eco">120,000+ homes</span>.
        </>
      }
      description="Engineers, field agents, climate-finance experts and community organisers — united by one mission to power life and protect nature."
    >
      <Team />
    </PageShell>
  );
}
