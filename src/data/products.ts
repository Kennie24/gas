import { BatteryCharging, CookingPot, Flame, Leaf, Shield, Snowflake, Sun, Truck, Zap } from "lucide-react";

export type ProductSpec = {
  label: string;
  value: string;
};

export type ProductDetail = {
  slug: string;
  category: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  price: string;
  rating: string;
  reviews: string;
  badge: string;
  image: string;
  gallery: string[];
  sizes?: ProductSpec[];
  specs: ProductSpec[];
  features: Array<{
    title: string;
    description: string;
  }>;
  benefits: string[];
  icon: typeof Flame;
  accent: string;
};

export const products: ProductDetail[] = [
  {
    slug: "lpg-cylinders",
    category: "Clean Cooking",
    title: "LPG Cylinders",
    shortTitle: "LPG",
    tagline: "Safe clean cooking gas for homes, restaurants and institutions.",
    description:
      "Certified Wesgas LPG cylinders in 1kg, 6kg, 13kg and 45kg sizes, supported by refill delivery, safety inspections and Pay-As-You-Cook affordability.",
    price: "1kg · 6kg · 13kg · 45kg",
    rating: "4.9",
    reviews: "Clean cooking customers",
    badge: "Pay-As-You-Cook ready",
    image: "/LPG Cylinders.png",
    gallery: [
      "/LPG Cylinders.png",
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=900&h=900&fit=crop&q=80",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=900&h=900&fit=crop&q=80",
    ],
    sizes: [
      { label: "1kg", value: "Starter / backup" },
      { label: "6kg", value: "Small household" },
      { label: "13kg", value: "Family home" },
      { label: "45kg", value: "Restaurant / commercial" },
    ],
    specs: [
      { label: "Cylinder sizes", value: "1kg, 6kg, 13kg, 45kg" },
      { label: "Payment", value: "Cash, mobile money, Pay-As-You-Cook" },
      { label: "Coverage", value: "76 districts across Uganda" },
    ],
    features: [
      { title: "Certified safe", description: "Tamper-evident cylinders with refill and valve inspection support." },
      { title: "Daily affordability", description: "Pay-As-You-Cook enables small daily payments from compatible plans." },
      { title: "Fast refills", description: "Branch and point-of-sale network supports reliable refill access." },
    ],
    benefits: ["Reduced smoke exposure", "Cleaner kitchens", "Faster cooking", "Lower charcoal dependency"],
    icon: Flame,
    accent: "#1D8B43",
  },
  {
    slug: "solar-home-systems",
    category: "Renewable Power",
    title: "Solar Home Systems",
    shortTitle: "Solar",
    tagline: "Reliable off-grid electricity for Ugandan households and businesses.",
    description:
      "Complete solar home systems with panels, batteries, LED lighting and phone charging, designed for rural and peri-urban energy access through PAYGo financing.",
    price: "Panels · Batteries · Lighting",
    rating: "4.8",
    reviews: "PAYGo solar customers",
    badge: "PAYGo available",
    image: "/Solar Home Systems.png",
    gallery: [
      "/Solar Home Systems.png",
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=900&h=900&fit=crop&q=80",
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=900&h=900&fit=crop&q=80",
    ],
    specs: [
      { label: "Core kit", value: "Solar panel, battery, LEDs, USB charging" },
      { label: "Use cases", value: "Lighting, phones, radio, TV-ready packages" },
      { label: "Finance", value: "Pay-As-You-Go Solar" },
    ],
    features: [
      { title: "Off-grid ready", description: "Designed for households and communities beyond reliable grid access." },
      { title: "PAYGo ownership", description: "Daily mobile-money payments help customers build ownership over time." },
      { title: "Efficient lighting", description: "LED lighting and charging reduce kerosene and disposable battery dependence." },
    ],
    benefits: ["Rural electrification", "Phone charging", "Lower kerosene use", "Long battery life"],
    icon: Sun,
    accent: "#F6E91A",
  },
  {
    slug: "solar-freezers",
    category: "Cold Chain",
    title: "Solar Freezers",
    shortTitle: "Freezers",
    tagline: "Cold storage for vaccines, food preservation and rural enterprise.",
    description:
      "Solar-powered freezer systems built for health centres, food businesses and off-grid retail where reliable cold storage is essential.",
    price: "Vaccine · Food · Off-grid",
    rating: "4.9",
    reviews: "Institutional users",
    badge: "Off-grid cold chain",
    image: "/Solar Freezers.png",
    gallery: [
      "/Solar Freezers.png",
      "https://images.unsplash.com/photo-1576671081837-49000212a370?w=900&h=900&fit=crop&q=80",
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=900&h=900&fit=crop&q=80",
    ],
    specs: [
      { label: "Applications", value: "Vaccines, food, retail, clinics" },
      { label: "Operation", value: "Solar-powered off-grid storage" },
      { label: "Customers", value: "Health centres, retailers, institutions" },
    ],
    features: [
      { title: "Temperature reliability", description: "Designed to keep critical goods cold where grid power is unreliable." },
      { title: "Enterprise impact", description: "Helps shops, farmers and clinics preserve value and reduce spoilage." },
      { title: "Solar autonomy", description: "Runs from renewable energy for lower operating costs in rural locations." },
    ],
    benefits: ["Food preservation", "Vaccine storage", "Rural business support", "Lower diesel dependence"],
    icon: Snowflake,
    accent: "#06B6D4",
  },
  {
    slug: "electric-pressure-cookers",
    category: "eCooking",
    title: "Electric Pressure Cookers",
    shortTitle: "eCooker",
    tagline: "Fast, efficient and smoke-free modern cooking.",
    description:
      "Electric pressure cookers that reduce cooking time, cut household smoke exposure and support the transition to efficient eCooking solutions.",
    price: "Fast · Cleaner · Efficient",
    rating: "4.8",
    reviews: "eCooking households",
    badge: "Smoke-free cooking",
    image: "/Electric Pressure Cookers.png",
    gallery: [
      "/Electric Pressure Cookers.png",
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=900&h=900&fit=crop&q=80",
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=900&h=900&fit=crop&q=80",
    ],
    specs: [
      { label: "Cooking mode", value: "Electric pressure cooking" },
      { label: "Benefits", value: "Faster cooking, cleaner kitchens" },
      { label: "Use cases", value: "Beans, rice, stews and family meals" },
    ],
    features: [
      { title: "Efficient cooking", description: "Pressure-cooking reduces time and energy needed for staple meals." },
      { title: "Cleaner homes", description: "Cuts indoor smoke compared with charcoal and firewood cooking." },
      { title: "Modern presets", description: "Simple programmable cooking modes for everyday Ugandan meals." },
    ],
    benefits: ["Reduced smoke", "Faster meals", "Energy savings", "Women empowerment"],
    icon: CookingPot,
    accent: "#C026D3",
  },
];

export const productSupport = [
  { icon: Truck, title: "76-district coverage", description: "Distribution and support across Uganda." },
  { icon: Shield, title: "Safety-first utility", description: "Clean-energy products backed by service and training." },
  { icon: Zap, title: "PAYGo access", description: "Daily affordable payment models for eligible products." },
  { icon: Leaf, title: "Climate impact", description: "Cleaner cooking and renewable energy adoption at scale." },
  { icon: BatteryCharging, title: "Energy resilience", description: "Solutions for off-grid and unreliable-grid communities." },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
