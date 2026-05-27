import type { Metadata } from "next";
import { CreditCard } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { PayGo } from "@/components/sections/paygo";

export const metadata: Metadata = {
  title: "PAYGo & Pay-As-You-Cook",
  description:
    "Daily-affordable clean energy. Pay-As-You-Go solar home systems and Pay-As-You-Cook LPG financing via mobile money — financial inclusion built into every meal.",
};

export default function PayGoPage() {
  return (
    <PageShell
      breadcrumb="PAYGo / PACo"
      eyebrow="PAYGo · PACo"
      eyebrowIcon={<CreditCard className="h-3.5 w-3.5" />}
      heroImage="/pay as you go.png"
      heroFixed
      heroHeightClassName="min-h-[72vh]"
      heroMinHeight="760px"
      title={
        <>
          Clean energy on <span className="text-gradient-eco">daily-affordable</span> terms.
        </>
      }
      description="Our Pay-As-You-Go Solar and Pay-As-You-Cook LPG models break down upfront cost into daily payments via mobile money — making clean energy reachable for every household in Uganda."
    >
      <PayGo />
    </PageShell>
  );
}
