"use client";

import { FeatureShowcase, type ShowcaseStep, type TabMedia } from "@/components/ui/feature-showcase";

const STEPS: ShowcaseStep[] = [
  {
    id: "about",
    title: "About WANA Energy Solutions",
    text: "Follow the 2008–2025 story of WES GAS, the founders, mission and the expansion from early household LPG access to nationwide clean-energy utility coverage.",
  },
  {
    id: "products",
    title: "Products for clean cooking and power",
    text: "Explore LPG cylinders, Solar Home Systems, Solar Freezers and Electric Pressure Cookers designed for homes, businesses, institutions and rural communities.",
  },
  {
    id: "paygo",
    title: "PAYGo / Pay-As-You-Cook access",
    text: "See how mobile-money payments make solar and LPG affordable through daily payment models that improve financial inclusion.",
  },
  {
    id: "impact",
    title: "Impact, investors and contact",
    text: "Dive into climate, health and ESG outcomes — then connect with WES GAS for partnership, supply, investment or support.",
  },
];

const TABS: TabMedia[] = [
  {
    value: "products",
    label: "Products",
    src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&h=1300&fit=crop&q=80",
    alt: "Solar panels representing WES GAS renewable energy products",
  },
  {
    value: "paygo",
    label: "PAYGo",
    src: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&h=1300&fit=crop&q=80",
    alt: "Mobile payment interface representing PAYGo clean energy access",
  },
  {
    value: "impact",
    label: "Impact",
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=1300&fit=crop&q=80",
    alt: "Forest landscape representing environmental impact",
  },
  {
    value: "partners",
    label: "Partners",
    src: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=1300&fit=crop&q=80",
    alt: "Finance dashboard representing investor and partner opportunities",
  },
];

export function ExploreGrid() {
  return (
    <div className="bg-[#1D8B43]">
      <FeatureShowcase
        eyebrow="Explore WES GAS"
        title="One platform. Every clean energy answer."
        description="Dive deeper into the parts of WES GAS that matter most to you — products, PAYGo financing, measurable impact, partners and contact pathways are all structured for fast discovery."
        stats={["120,000+ households", "76 districts", "9 branches", "20 points of sale"]}
        steps={STEPS}
        tabs={TABS}
        defaultTab="products"
        panelMinHeight={680}
        primaryHref="/products"
        primaryLabel="Explore products"
        secondaryHref="/contact"
        secondaryLabel="Contact WES GAS"
        className="section relative !bg-[#1D8B43]"
      />
    </div>
  );
}
