// Single source of truth for WANA Energy Solutions company data.
// Used across the site so copy edits propagate everywhere.

export const COMPANY = {
  legalName: "WANA Energy Solutions",
  tradingName: "Wesgas",
  fullName: "WANA Energy Solutions (Wesgas)",
  shortName: "WES GAS",
  founded: 2008,
  founders: [
    { name: "Emmy Wasirwa", role: "Co-Founder" },
    { name: "Margaret N Nakigudde", role: "Co-Founder" },
  ],
  address: "Plot 212 WANA Close, Entebbe Road, Seguku, Kampala, Uganda",
  phone: "(+256) 777704397",
  phoneRaw: "+256777704397",
  email: "info@wanaenergy.com",
  website: "www.wanaenergy.com",
  websiteUrl: "https://www.wanaenergy.com",
  businessType: "Social Enterprise / Clean Energy Utility",
  industry: "Renewable Energy & Clean Cooking",
  employees: "51–200",
  coverage: "76 districts across Uganda",
  mission:
    "To save lives and protect the environment by making clean energy accessible and affordable to all Ugandans.",
  tagline: "Powering Life, Protecting Nature.",
  socials: {
    facebook: "https://facebook.com/wanaenergysolutions",
    twitter: "https://twitter.com/wanaenergy",
    linkedin: "https://linkedin.com/company/wana-energy-solutions",
  },
} as const;

export const HERO_STATS = [
  { value: 120000, suffix: "+", label: "Households served" },
  { value: 76, suffix: "", label: "Districts covered" },
  { value: 9, suffix: "", label: "Branches" },
  { value: 20, suffix: "", label: "Points of sale" },
];

export const TIMELINE = [
  { year: 2008, title: "Founded", body: "WANA Energy Solutions is established in Kampala with a vision to expand clean cooking across Uganda." },
  { year: 2010, title: "First 45 households served", body: "Early LPG distribution begins serving households in peri-urban communities." },
  { year: 2014, title: "Solar expansion", body: "Launch of Solar Home Systems portfolio, extending clean energy to off-grid homes." },
  { year: 2018, title: "Hybrid PAYGo model", body: "Pay-As-You-Go solar financing introduced — making clean power affordable by the day." },
  { year: 2020, title: "Pay-As-You-Cook launched", body: "Industry-first daily LPG payment model lets families cook cleanly without bulk upfront cost." },
  { year: 2023, title: "120,000 households reached", body: "WES GAS becomes one of East Africa's largest clean cooking utilities." },
  { year: 2025, title: "Expansion to underserved districts", body: "Active rollout deepens coverage across all 76 districts with new branches and agents." },
];

export const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/paygo", label: "PAYGo / PACo" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

export const PRODUCT_ROUTES = [
  { href: "/products#lpg", label: "LPG Cylinders" },
  { href: "/products#solar", label: "Solar Home Systems" },
  { href: "/products#freezer", label: "Solar Freezers" },
  { href: "/products#epc", label: "Electric Pressure Cookers" },
];
