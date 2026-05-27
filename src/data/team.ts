// Leadership and team data for WANA Energy Solutions (WES GAS).

export type TeamMember = {
  name: string;
  role: string;
  department: "Leadership" | "Operations" | "Engineering" | "Commercial" | "Impact";
  bio: string;
  image: string;
  socials?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
};

export const LEADERSHIP: TeamMember[] = [
  {
    name: "Emmy Wasirwa",
    role: "Co-Founder & Chief Executive Officer",
    department: "Leadership",
    bio: "Emmy co-founded WANA Energy Solutions in 2008 with a mission to make clean energy accessible to every Ugandan household. With 17+ years leading East Africa's clean cooking transition, he steers the company's strategy, partnerships and impact agenda.",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=900&h=900&fit=crop&q=80",
    socials: {
      linkedin: "https://linkedin.com/in/emmy-wasirwa",
      email: "emmy@wanaenergy.com",
    },
  },
  {
    name: "Margaret N Nakigudde",
    role: "Co-Founder & Chief Operating Officer",
    department: "Leadership",
    bio: "Margaret co-founded WES GAS and leads day-to-day operations across 9 branches and 20 points of sale. She designed the field model that now serves 120,000+ households across 76 districts.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&h=900&fit=crop&q=80",
    socials: {
      linkedin: "https://linkedin.com/in/margaret-nakigudde",
      email: "margaret@wanaenergy.com",
    },
  },
];

export const TEAM: TeamMember[] = [
  {
    name: "David Okello",
    role: "Chief Financial Officer",
    department: "Leadership",
    bio: "Leads finance, climate-finance partnerships and the PAYGo / PACo receivables portfolio.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&h=900&fit=crop&q=80",
    socials: { linkedin: "#" },
  },
  {
    name: "Sarah Kintu",
    role: "Head of Commercial & PAYGo",
    department: "Commercial",
    bio: "Designs the Pay-As-You-Cook and Pay-As-You-Go financing models that unlock daily affordability.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=900&h=900&fit=crop&q=80",
    socials: { linkedin: "#" },
  },
  {
    name: "James Mugisha",
    role: "Head of Solar Engineering",
    department: "Engineering",
    bio: "17 years building off-grid solar systems — from village kits to vaccine-grade freezers.",
    image:
      "https://images.unsplash.com/photo-1542178243-bc20204b769f?w=900&h=900&fit=crop&q=80",
    socials: { linkedin: "#" },
  },
  {
    name: "Patricia Namutebi",
    role: "Head of LPG Distribution",
    department: "Operations",
    bio: "Runs the cylinder fleet, refilling plants and last-mile delivery across all 9 branches.",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=900&h=900&fit=crop&q=80",
    socials: { linkedin: "#" },
  },
  {
    name: "Brian Ssempala",
    role: "Head of Impact & ESG",
    department: "Impact",
    bio: "Measures and reports our carbon avoidance, household health and women-empowerment outcomes.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&h=900&fit=crop&q=80",
    socials: { linkedin: "#" },
  },
  {
    name: "Linda Achieng",
    role: "Head of Customer Experience",
    department: "Commercial",
    bio: "Oversees customer onboarding, agent training and the WES GAS support network.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=900&h=900&fit=crop&q=80",
    socials: { linkedin: "#" },
  },
  {
    name: "Ronald Kateregga",
    role: "Head of Field Operations",
    department: "Operations",
    bio: "Leads logistics, fleet and the agent network reaching the most underserved districts.",
    image:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=900&h=900&fit=crop&q=80",
    socials: { linkedin: "#" },
  },
];

export const TEAM_STATS = [
  { value: "120+", label: "Team members" },
  { value: "76", label: "Districts covered" },
  { value: "9", label: "Branch offices" },
  { value: "17+", label: "Years experience" },
];
