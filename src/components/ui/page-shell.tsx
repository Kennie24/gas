"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, Home } from "lucide-react";
import { Badge } from "./badge";
import { cn } from "@/lib/utils";

interface PageShellProps {
  eyebrow?: string;
  eyebrowIcon?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  breadcrumb: string;
  heroImage: string;
  heroFixed?: boolean;
  heroClassName?: string;
  heroHeightClassName?: string;
  heroMinHeight?: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * Wrapper for every non-home route.
 * Full-width hero with background image + overlay, then page sections below.
 */
export function PageShell({
  eyebrow,
  eyebrowIcon,
  title,
  description,
  breadcrumb,
  heroImage,
  heroFixed = false,
  heroClassName,
  heroHeightClassName = "min-h-[58vh]",
  heroMinHeight,
  children,
  className,
}: PageShellProps) {
  return (
    <div className={cn("relative isolate", className)}>
      {/* ── Full-width hero ── */}
      <div
        className={cn("relative w-full flex flex-col justify-end overflow-hidden", heroHeightClassName, heroClassName)}
        style={heroMinHeight ? { minHeight: heroMinHeight } : undefined}
      >
        {/* Background image */}
        {heroFixed ? (
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{ backgroundImage: `url("${heroImage}")` }}
          />
        ) : (
          <Image
            src={heroImage}
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        )}

        {/* Gradient overlays for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Content pinned to bottom of hero */}
      <div className="container relative z-10 pt-48 md:pt-64 pb-12 md:pb-16">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-xs text-white/70 mb-6"
          >
            <Link href="/" className="inline-flex items-center gap-1 hover:text-white transition-colors">
              <Home className="h-3.5 w-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="h-3.5 w-3.5 opacity-50" />
            <span className="text-white/90 font-medium">{breadcrumb}</span>
          </motion.nav>

          {eyebrow ? (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              <Badge icon={eyebrowIcon} className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
                {eyebrow}
              </Badge>
            </motion.div>
          ) : null}

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 font-display text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-balance max-w-4xl text-white"
          >
            {title}
          </motion.h1>

          {description ? (
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 max-w-2xl text-base md:text-lg text-white/75 leading-relaxed"
            >
              {description}
            </motion.p>
          ) : null}
        </div>
      </div>

      {/* ── Page sections ── */}
      <div className="relative">{children}</div>
    </div>
  );
}
