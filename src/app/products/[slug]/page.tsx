import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check, Heart, ShieldCheck, Star, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getProduct, products } from "@/data/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    return {
      title: "Product not found",
    };
  }

  return {
    title: product.title,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) notFound();

  const Icon = product.icon;

  return (
    <main className="bg-[#f9f9f9] pt-48 text-[#1a1c1c] dark:bg-background dark:text-foreground md:pt-56">
      <section className="container grid grid-cols-1 gap-8 pb-16 md:grid-cols-12 md:gap-8 md:pb-24 lg:pb-32">
        <div className="md:col-span-7">
          <Link href="/products" className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-[#1D8B43]">
            <ArrowLeft className="h-4 w-4" />
            Back to products
          </Link>

          <div className="overflow-hidden rounded-[24px] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.04),0_2px_4px_rgba(0,0,0,0.02)] transition-all duration-700 dark:bg-card">
            <div className="relative aspect-[4/5] overflow-hidden md:aspect-[4/4] lg:aspect-[4/3]">
              <Image
                src={product.image}
                alt={product.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 58vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute left-6 top-6 rounded-full bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#1a1c1c] backdrop-blur">
                {product.badge}
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-4">
            {product.gallery.map((image, index) => (
              <div key={image} className="relative aspect-square cursor-pointer overflow-hidden rounded-2xl bg-white opacity-80 transition-opacity hover:opacity-100 dark:bg-card">
                <Image
                  src={image}
                  alt={`${product.title} view ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 33vw, 18vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center py-8 md:col-span-5">
          <div className="mb-6 flex items-center gap-2">
            <div className="flex text-[#1D8B43]">
              {[0, 1, 2, 3, 4].map((item) => (
                <Star key={item} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <span className="text-sm font-semibold uppercase tracking-[0.08em] text-muted-foreground">
              {product.rating} · {product.reviews}
            </span>
          </div>

          <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-[#1D8B43]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#1D8B43]">
            <Icon className="h-4 w-4" style={{ color: product.accent }} />
            {product.category}
          </div>

          <h1 className="font-display text-4xl font-semibold tracking-tight text-[#121212] dark:text-foreground md:text-5xl">
            {product.title}
          </h1>
          <p className="mt-4 font-display text-2xl font-semibold text-[#1D8B43]">{product.price}</p>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground">
            {product.description}
          </p>

          <div className="my-10 flex flex-col gap-4">
            <Button asChild className="w-full rounded-lg bg-[#F6E91A] py-6 text-xs font-bold uppercase tracking-[0.18em] text-zinc-950 hover:bg-[#F6E91A]/90">
              <Link href="/contact">
                Request quote <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full rounded-lg py-6 text-xs font-bold uppercase tracking-[0.18em]">
              <Link href="/paygo">
                <Heart className="h-4 w-4" />
                Explore PAYGo options
              </Link>
            </Button>
          </div>

          <div className="space-y-6 border-t border-black/10 pt-8 dark:border-white/10">
            <div className="flex items-center gap-4">
              <Truck className="h-5 w-5 text-muted-foreground" />
              <span className="text-base text-muted-foreground">Service and support through WES GAS branch and point-of-sale network.</span>
            </div>
            <div className="flex items-center gap-4">
              <ShieldCheck className="h-5 w-5 text-muted-foreground" />
              <span className="text-base text-muted-foreground">Built for safe, reliable clean-energy adoption across Uganda.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#eeeeee] py-16 dark:bg-muted/30 md:py-24 lg:py-32">
        <div className="container grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-12">
          <div>
            <h2 className="mb-10 font-display text-3xl font-semibold tracking-tight md:text-4xl">Product details</h2>
            <div className="space-y-10">
              <div>
                <h3 className="mb-4 inline-block border-b border-black/15 pb-2 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground dark:border-white/15">
                  Specifications
                </h3>
                <div className="space-y-3">
                  {product.specs.map((spec) => (
                    <p key={spec.label} className="flex justify-between gap-6 text-base leading-relaxed md:text-lg">
                      <span className="font-medium text-[#121212] dark:text-foreground">{spec.label}</span>
                      <span className="text-right text-muted-foreground">{spec.value}</span>
                    </p>
                  ))}
                </div>
              </div>

              {product.sizes && (
                <div>
                  <h3 className="mb-4 inline-block border-b border-black/15 pb-2 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground dark:border-white/15">
                    Available sizes
                  </h3>
                  <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                    {product.sizes.map((size) => (
                      <div key={size.label} className="rounded-2xl bg-white p-4 text-center shadow-[0_8px_24px_rgba(0,0,0,0.04)] dark:bg-card">
                        <p className="font-display text-2xl font-semibold text-[#1D8B43]">{size.label}</p>
                        <p className="mt-1 text-xs text-muted-foreground">{size.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="rounded-[24px] bg-white p-8 shadow-[0_8px_24px_rgba(0,0,0,0.04),0_2px_4px_rgba(0,0,0,0.02)] dark:bg-card">
            <h3 className="mb-6 font-display text-2xl font-semibold">Core features</h3>
            <ul className="space-y-6">
              {product.features.map((feature) => (
                <li key={feature.title} className="flex items-start gap-4">
                  <div className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#1D8B43] text-white">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <p className="font-bold text-[#121212] dark:text-foreground">{feature.title}</p>
                    <p className="mt-1 leading-relaxed text-muted-foreground">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="overflow-hidden py-16 md:py-24 lg:py-32">
        <div className="container grid items-center gap-10 md:grid-cols-2 md:gap-12">
          <div>
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.24em] text-muted-foreground">WANA Energy Solutions</p>
            <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
              Powering Life, <br />Protecting Nature.
            </h2>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
              WES GAS combines clean cooking, renewable power and affordable payment models to make clean energy accessible and affordable to all Ugandans.
            </p>
            <Button asChild className="mt-10 rounded-xl bg-[#F6E91A] text-zinc-950 hover:bg-[#F6E91A]/90">
              <Link href="/contact">Talk to WES GAS <ArrowUpRight className="h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="relative">
            <div className="absolute -right-12 -top-12 -z-10 h-64 w-64 rounded-full bg-[#1D8B43]/10 blur-3xl" />
            <div className="relative h-[460px] overflow-hidden rounded-[24px] shadow-[0_8px_24px_rgba(0,0,0,0.04),0_2px_4px_rgba(0,0,0,0.02)] md:h-[600px]">
              <Image
                src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1200&h=1400&fit=crop&q=80"
                alt="Clean energy installation"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
