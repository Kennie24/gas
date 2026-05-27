import type { Metadata } from "next";
import { Newspaper } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { News } from "@/components/sections/news";

export const metadata: Metadata = {
  title: "News",
  description:
    "Latest news, press releases and impact stories from WANA Energy Solutions (WES GAS) — Uganda's leading clean energy social enterprise.",
};

export default function NewsPage() {
  return (
    <PageShell
      breadcrumb="News"
      eyebrow="Newsroom"
      eyebrowIcon={<Newspaper className="h-3.5 w-3.5" />}
      heroImage="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1600&h=900&fit=crop&q=80"
      title={
        <>
          News, impact and <span className="text-gradient-eco">milestones</span>.
        </>
      }
      description="Press releases, climate-finance announcements and stories from the field — direct from the WES GAS newsroom."
    >
      <News />
    </PageShell>
  );
}
