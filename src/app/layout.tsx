import type { Metadata, Viewport } from "next";
import { Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/nav/navbar";
import { Footer } from "@/components/sections/footer";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { COMPANY } from "@/data/company";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const poppinsDisplay = Poppins({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY.websiteUrl),
  title: {
    default: `${COMPANY.legalName} — ${COMPANY.tagline}`,
    template: `%s · ${COMPANY.tradingName}`,
  },
  description: `${COMPANY.legalName} (${COMPANY.tradingName}) is Uganda's leading clean energy social enterprise — LPG, Solar Home Systems, Solar Freezers and Electric Pressure Cookers serving 120,000+ households across 76 districts. ${COMPANY.mission}`,
  keywords: [
    "WANA Energy",
    "Wesgas",
    "WES GAS",
    "Uganda LPG",
    "Solar Uganda",
    "Pay-As-You-Cook",
    "Pay-As-You-Go solar",
    "Clean cooking",
    "Renewable energy Uganda",
    "Solar freezer",
    "Electric pressure cooker",
    "Climate tech Africa",
  ],
  authors: [{ name: COMPANY.legalName }],
  creator: COMPANY.legalName,
  publisher: COMPANY.legalName,
  openGraph: {
    type: "website",
    locale: "en_UG",
    url: COMPANY.websiteUrl,
    title: `${COMPANY.legalName} — ${COMPANY.tagline}`,
    description: COMPANY.mission,
    siteName: COMPANY.tradingName,
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY.legalName} — ${COMPANY.tagline}`,
    description: COMPANY.mission,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppins.variable} ${poppinsDisplay.variable} ${mono.variable}`}
    >
      <body className="min-h-dvh bg-background text-foreground antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgress />
          <Navbar />
          <main className="relative">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
