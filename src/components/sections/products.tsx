"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Search, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MagicCard } from "@/components/ui/magic-card";
import { products, productSupport } from "@/data/products";
import { cn } from "@/lib/utils";

const categories = ["All", "Clean Cooking", "Renewable Power", "Cold Chain", "eCooking"];

function ProductRating({ rating, reviews }: { rating: string; reviews: string }) {
  return (
    <div className="mb-6 flex items-center gap-1">
      {[0, 1, 2, 3, 4].map((item) => (
        <Star key={item} className="h-4 w-4 fill-[#1D8B43] text-[#1D8B43]" />
      ))}
      <span className="ml-2 text-sm font-semibold text-muted-foreground">{rating} · {reviews}</span>
    </div>
  );
}

export function Products() {
  return (
    <div className="relative bg-[#f9f9f9] text-[#1a1c1c] dark:bg-background dark:text-foreground">
      <section className="border-y border-black/5 bg-white/70 py-8 backdrop-blur dark:border-white/10 dark:bg-card/60">
        <div className="container flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              readOnly
              value="Explore WES GAS clean energy products"
              className="w-full border-0 border-b border-black/15 bg-transparent py-4 pl-11 pr-4 text-base text-muted-foreground outline-none dark:border-white/15"
              aria-label="Product search preview"
            />
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <span
                key={category}
                className={cn(
                  "rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] transition-colors",
                  index === 0
                    ? "bg-[#1D8B43] text-white"
                    : "bg-[#eeeeee] text-[#444748] dark:bg-muted dark:text-muted-foreground",
                )}
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 lg:py-32">
        <div className="container">
          <div className="mb-12 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#1D8B43]">Product catalog</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">
              Clean-energy products, presented with enterprise clarity.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              A focused portfolio for households, restaurants, NGOs, institutions and rural communities — built around clean cooking, renewable power and affordable access.
            </p>
          </div>

          <div className="flex flex-col gap-10 md:gap-12">
            {products.map((product, index) => {
              const Icon = product.icon;
              const reversed = index % 2 === 1;

              return (
                <motion.article
                  key={product.slug}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, delay: index * 0.05 }}
                  className={cn(
                    "group relative flex flex-col overflow-hidden rounded-[32px] border border-black/5 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.04),0_2px_4px_rgba(0,0,0,0.02)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08),0_4px_8px_rgba(0,0,0,0.04)] dark:border-white/10 dark:bg-card",
                    reversed ? "md:flex-row-reverse" : "md:flex-row",
                  )}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden md:w-3/5">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 60vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                    <div className="absolute left-6 top-6 md:left-8 md:top-8">
                      <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#1a1c1c] backdrop-blur">
                        <Icon className="h-3.5 w-3.5" style={{ color: product.accent }} />
                        {product.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex w-full flex-col justify-center p-7 md:w-2/5 md:p-10 lg:p-12">
                    <div className="mb-4 flex items-start justify-between gap-5">
                      <h3 className="font-display text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                        {product.title}
                      </h3>
                      <p className="hidden text-right text-sm font-bold text-[#1D8B43] md:block">{product.shortTitle}</p>
                    </div>

                    <ProductRating rating={product.rating} reviews={product.reviews} />

                    <p className="mb-8 text-base leading-relaxed text-muted-foreground md:text-lg">
                      {product.description}
                    </p>

                    <div className="mb-8 grid gap-3 sm:grid-cols-2">
                      {product.benefits.slice(0, 4).map((benefit) => (
                        <div key={benefit} className="flex items-center gap-2 rounded-xl bg-[#f3f3f4] px-3 py-2 text-sm font-medium text-[#444748] dark:bg-muted dark:text-muted-foreground">
                          <Check className="h-4 w-4 text-[#1D8B43]" />
                          {benefit}
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto flex flex-col gap-3 sm:flex-row">
                      <Button asChild className="rounded-xl bg-[#F6E91A] text-zinc-950 hover:bg-[#F6E91A]/90">
                        <Link href={`/products/${product.slug}`}>
                          View Details <ArrowUpRight className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button asChild variant="glass" className="rounded-xl">
                        <Link href="/contact">Request quote</Link>
                      </Button>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24 lg:pb-32">
        <div className="container">
          <div className="mb-10 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#1D8B43]">Why WES GAS</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Every product is backed by service, finance and impact.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {productSupport.map(({ icon: Icon, title, description }) => (
              <MagicCard key={title} gradientColor="#1D8B43" gradientOpacity={0.08} className="!rounded-3xl border border-black/5 bg-white p-6 text-center dark:border-white/10 dark:bg-card">
                <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-[#1D8B43]/10 text-[#1D8B43]">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="font-display font-semibold">{title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
              </MagicCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
