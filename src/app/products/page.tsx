import type { Metadata } from "next";
import { Boxes } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { Products } from "@/components/sections/products";
import { PayGo } from "@/components/sections/paygo";
import { ProductTestimonials } from "@/components/sections/product-testimonials";

export const metadata: Metadata = {
  title: "Products",
  description:
    "LPG cylinders (1kg / 6kg / 13kg / 45kg), Solar Home Systems, Solar Freezers and Electric Pressure Cookers — backed by Pay-As-You-Cook and PAYGo financing.",
};

export default function ProductsPage() {
  return (
    <PageShell
      breadcrumb="Products"
      eyebrow="Products"
      eyebrowIcon={<Boxes className="h-3.5 w-3.5" />}
      heroImage="/contact.png"
      heroFixed
      heroHeightClassName="min-h-[72vh]"
      heroMinHeight="760px"
      title={
        <>
          An integrated <span className="text-gradient-eco">clean energy</span> portfolio.
        </>
      }
      description="Everything a Ugandan household, business or institution needs to leave behind charcoal, kerosene and diesel — backed by service, finance and a 9-branch network."
    >
      <Products />
      <ProductTestimonials />
      <PayGo />
    </PageShell>
  );
}
