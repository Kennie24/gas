"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, Clock, Newspaper, Search } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { NEWS, NEWS_CATEGORIES, type NewsArticle } from "@/data/news";
import { cn } from "@/lib/utils";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-UG", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function ArticleCard({ a, featured = false }: { a: NewsArticle; featured?: boolean }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-border bg-card",
        featured ? "lg:col-span-2" : ""
      )}
    >
      <Link href={`/news/${a.slug}`} className="block">
        <div className={cn("relative w-full overflow-hidden", featured ? "aspect-[16/9]" : "aspect-[5/3]")}>
          <Image
            src={a.image}
            alt={a.title}
            fill
            sizes={featured ? "(max-width:1024px) 100vw, 66vw" : "(max-width:1024px) 100vw, 33vw"}
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <div className="absolute top-4 left-4">
            <Badge className="border-white/20 bg-white/15 text-white backdrop-blur-sm">{a.category}</Badge>
          </div>
        </div>

        <div className="p-6 md:p-7">
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              {formatDate(a.date)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {a.readMinutes} min read
            </span>
          </div>

          <h3
            className={cn(
              "mt-3 font-display font-semibold tracking-tight text-foreground transition-colors group-hover:text-wes-600",
              featured ? "text-2xl md:text-3xl" : "text-lg md:text-xl"
            )}
          >
            {a.title}
          </h3>

          <p className="mt-3 text-sm text-muted-foreground line-clamp-3">{a.excerpt}</p>

          <div className="mt-5 flex items-center justify-between">
            <span className="text-xs text-muted-foreground">By {a.author}</span>
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition-all group-hover:bg-wes-600 group-hover:border-wes-600 group-hover:text-white">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

export function News() {
  const [filter, setFilter] = React.useState<(typeof NEWS_CATEGORIES)[number]>("All");
  const [query, setQuery] = React.useState("");

  const sorted = React.useMemo(
    () => [...NEWS].sort((a, b) => +new Date(b.date) - +new Date(a.date)),
    []
  );

  const featured = sorted.find((a) => a.featured) ?? sorted[0];

  const visible = React.useMemo(() => {
    let list = sorted.filter((a) => a.slug !== featured.slug);
    if (filter !== "All") list = list.filter((a) => a.category === filter);
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (a) => a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q)
      );
    }
    return list;
  }, [sorted, featured, filter, query]);

  return (
    <>
      {/* Featured story */}
      <section className="section pb-0">
        <div className="container">
          <SectionHeading
            eyebrow="Featured Story"
            eyebrowIcon={<Newspaper className="h-3.5 w-3.5" />}
            title={
              <>
                The latest from <span className="text-gradient-eco">WES GAS</span>.
              </>
            }
            description="Company news, impact milestones, partnerships and product launches — straight from the WES GAS newsroom."
            align="left"
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <ArticleCard a={featured} featured />
            <div className="grid gap-6">
              {sorted
                .filter((a) => a.slug !== featured.slug)
                .slice(0, 2)
                .map((a) => (
                  <ArticleCard key={a.slug} a={a} />
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filters + grid */}
      <section className="section">
        <div className="container">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap items-center gap-2">
              {NEWS_CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={cn(
                    "inline-flex items-center rounded-full border px-4 py-1.5 text-xs font-medium transition-colors",
                    filter === c
                      ? "border-wes-600 bg-wes-600 text-white"
                      : "border-border bg-card text-muted-foreground hover:text-foreground"
                  )}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-72">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search news…"
                className="h-10 w-full rounded-full border border-border bg-card pl-9 pr-4 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-wes-500"
              />
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((a) => (
              <ArticleCard key={a.slug} a={a} />
            ))}
          </div>

          {visible.length === 0 ? (
            <p className="mt-16 text-center text-sm text-muted-foreground">
              No articles match your filters. Try clearing the search.
            </p>
          ) : null}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section pt-0">
        <div className="container">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-wes-600 to-wes-700 p-10 md:p-14 text-white">
            <div className="relative z-10 grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div className="max-w-xl">
                <Badge className="border-white/20 bg-white/10 text-white">Newsletter</Badge>
                <h3 className="mt-4 font-display text-3xl md:text-4xl font-semibold">
                  Get WES GAS stories in your inbox.
                </h3>
                <p className="mt-4 text-white/85">
                  Monthly updates on impact milestones, new products and climate-finance news. No spam, ever.
                </p>
              </div>
              <form
                className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="h-11 w-full rounded-full bg-white/15 px-5 text-sm text-white placeholder:text-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/40"
                  required
                />
                <button
                  type="submit"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-[#F6E91A] px-6 text-sm font-bold text-zinc-900 hover:brightness-95 transition"
                >
                  Subscribe
                </button>
              </form>
            </div>
            <div className="pointer-events-none absolute -right-10 -bottom-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          </div>
        </div>
      </section>
    </>
  );
}
