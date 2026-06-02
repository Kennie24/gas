"use client";

import * as React from "react";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Send,
  Leaf,
} from "lucide-react";
import Image from "next/image";
import { FloatingPaths } from "@/components/ui/background-paths";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/data/company";

const QUICK = [
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/paygo", label: "PAYGo / PACo" },
  { href: "/impact", label: "Impact" },
  { href: "/investors", label: "Investors" },
  { href: "/contact", label: "Contact" },
];

const PRODUCTS = [
  { href: "/products#lpg", label: "LPG Cylinders" },
  { href: "/products#solar", label: "Solar Home Systems" },
  { href: "/products#freezer", label: "Solar Freezers" },
  { href: "/products#epc", label: "Electric Pressure Cookers" },
];

export function Footer() {
  return (
    <footer className="relative mt-12 overflow-hidden bg-[#EBCA30]">
      {/* Top accent line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-black/20" />

      {/* Animated background paths — rendered above bg, below content */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      {/* Eco blob */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -bottom-40 left-1/2 h-[40rem] w-[60rem] -translate-x-1/2 rounded-full bg-wes-500/5 blur-3xl" />
      </div>

      <div className="container relative z-10 py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand + Mission */}
          <div className="lg:col-span-5">
            <Image
              src="/logo.png"
              alt="WANA Energy Solutions — WES GAS"
              width={160}
              height={56}
              style={{ width: "auto", height: "56px" }}
              priority
            />
            <p className="mt-5 max-w-md text-sm text-zinc-900/75 leading-relaxed">
              {COMPANY.legalName} ({COMPANY.tradingName}) — {COMPANY.mission}
            </p>

            <div className="mt-6 space-y-2.5 text-sm">
              <p className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 text-zinc-950/80 shrink-0" />
                <span className="text-zinc-900/75">{COMPANY.address}</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-zinc-950/80 shrink-0" />
                <a href={`tel:${COMPANY.phoneRaw}`} className="text-zinc-900/75 hover:text-zinc-950">
                  {COMPANY.phone}
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-zinc-950/80 shrink-0" />
                <a href={`mailto:${COMPANY.email}`} className="text-zinc-900/75 hover:text-zinc-950">
                  {COMPANY.email}
                </a>
              </p>
            </div>

            {/* Socials */}
            <div className="mt-6 flex gap-2">
              {[
                { Icon: Facebook, href: COMPANY.socials.facebook, label: "Facebook" },
                { Icon: Twitter, href: COMPANY.socials.twitter, label: "Twitter / X" },
                { Icon: Linkedin, href: COMPANY.socials.linkedin, label: "LinkedIn" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-black/25 text-zinc-950/75 transition-colors hover:border-black hover:text-zinc-950"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-950">
              Company
            </p>
            <ul className="mt-4 space-y-2.5">
              {QUICK.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-zinc-900/75 transition-colors hover:text-zinc-950"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-950">
              Products
            </p>
            <ul className="mt-4 space-y-2.5">
              {PRODUCTS.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-zinc-900/75 transition-colors hover:text-zinc-950"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-950">
              Stay in the loop
            </p>
            <p className="mt-3 text-sm text-zinc-900/75">
              Quarterly notes on clean energy access, climate impact and PayGo
              innovations.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-4 relative"
            >
              <input
                type="email"
                placeholder="you@example.com"
                className="h-12 w-full rounded-full border border-black/25 bg-white/25 pl-4 pr-32 text-sm text-zinc-950 placeholder:text-zinc-900/45 outline-none focus:border-black/50 focus:ring-2 focus:ring-black/10"
              />
              <Button
                type="submit"
                variant="ghost"
                size="sm"
                className="absolute right-1.5 top-1.5 rounded-full bg-[#1D8B43] font-semibold text-white hover:bg-[#166b35]"
              >
                Subscribe
                <Send className="h-3.5 w-3.5" />
              </Button>
            </form>
            <p className="mt-4 inline-flex items-center gap-2 text-[11px] text-zinc-900/65">
              <Leaf className="h-3.5 w-3.5 text-[#1D8B43]" />
              Climate-positive operations · Carbon reporting available
            </p>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-black/20 pt-6 text-xs text-zinc-950">
          <p>
            © {new Date().getFullYear()} {COMPANY.legalName}. All rights reserved. Trading as {COMPANY.tradingName}.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <Link href="#" className="hover:text-zinc-700">Privacy</Link>
            <Link href="#" className="hover:text-zinc-700">Terms</Link>
            <Link href="#" className="hover:text-zinc-700">Cookies</Link>
            <a href={COMPANY.websiteUrl} className="hover:text-zinc-700">
              {COMPANY.website}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
