// News & press articles for WANA Energy Solutions (WES GAS).

export type NewsCategory = "Company" | "Impact" | "Partnerships" | "Press" | "Product";

export type NewsArticle = {
  slug: string;
  title: string;
  excerpt: string;
  category: NewsCategory;
  date: string; // ISO
  readMinutes: number;
  author: string;
  image: string;
  featured?: boolean;
};

export const NEWS: NewsArticle[] = [
  {
    slug: "wes-gas-reaches-120000-households",
    title: "WES GAS reaches 120,000 households across Uganda",
    excerpt:
      "A landmark moment for clean cooking in East Africa — our PAYGo and PACo customers now span every region of Uganda.",
    category: "Impact",
    date: "2025-04-18",
    readMinutes: 4,
    author: "WES GAS Newsroom",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1400&h=900&fit=crop&q=80",
    featured: true,
  },
  {
    slug: "expansion-to-underserved-districts-2025",
    title: "Expansion to underserved districts begins in 2025",
    excerpt:
      "New branches, agents and PAYGo Solar deployments will bring clean energy to the last-mile communities of northern and eastern Uganda.",
    category: "Company",
    date: "2025-03-02",
    readMinutes: 5,
    author: "Margaret N Nakigudde",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1400&h=900&fit=crop&q=80",
  },
  {
    slug: "pay-as-you-cook-anniversary",
    title: "Pay-As-You-Cook celebrates 5 years of clean LPG financing",
    excerpt:
      "Daily payments from UGX 1,500 have helped over 60,000 families switch from charcoal and firewood to clean LPG.",
    category: "Product",
    date: "2025-01-15",
    readMinutes: 6,
    author: "Sarah Kintu",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1400&h=900&fit=crop&q=80",
  },
  {
    slug: "environmental-social-enterprise-of-the-year",
    title: "WES GAS named Environmental Social Enterprise of the Year",
    excerpt:
      "The Federation of Uganda Social Entrepreneurs (FUSE) recognises WES GAS for measurable carbon avoidance and household health impact.",
    category: "Press",
    date: "2024-11-08",
    readMinutes: 3,
    author: "WES GAS Newsroom",
    image:
      "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=1400&h=900&fit=crop&q=80",
  },
  {
    slug: "solar-freezers-vaccine-cold-chain",
    title: "Solar Freezers join Uganda's rural vaccine cold chain",
    excerpt:
      "WES GAS solar freezers are now powering vaccine storage and food preservation in off-grid health centres.",
    category: "Impact",
    date: "2024-09-22",
    readMinutes: 5,
    author: "James Mugisha",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1400&h=900&fit=crop&q=80",
  },
  {
    slug: "climate-finance-partnership",
    title: "New climate-finance partnership unlocks $5M for PAYGo Solar",
    excerpt:
      "Carbon-linked financing enables WES GAS to scale solar home systems across rural Uganda with even lower daily costs.",
    category: "Partnerships",
    date: "2024-07-12",
    readMinutes: 4,
    author: "David Okello",
    image:
      "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=1400&h=900&fit=crop&q=80",
  },
  {
    slug: "ecookers-launch",
    title: "Electric Pressure Cookers launch across all 9 branches",
    excerpt:
      "Faster, cleaner cooking with up to 80% less energy — now available with PAYGo financing nationwide.",
    category: "Product",
    date: "2024-05-04",
    readMinutes: 4,
    author: "WES GAS Newsroom",
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1400&h=900&fit=crop&q=80",
  },
];

export const NEWS_CATEGORIES = ["All", "Company", "Impact", "Partnerships", "Press", "Product"] as const;
