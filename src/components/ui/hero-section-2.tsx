"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Globe, Phone, MapPin, ArrowUpRight } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface CallToAction {
  text: string;
  href: string;
}

export interface ContactInfo {
  website?: string;
  phone?: string;
  address?: string;
}

export interface HeroSection2Props {
  /** Light-mode logo src — omit to hide */
  logo?: string;
  /** Dark-mode logo src */
  logoDark?: string;
  /** Small eyebrow / slogan above the title */
  slogan?: string;
  /** Main heading */
  title: React.ReactNode;
  /** Subtitle paragraph */
  subtitle?: string;
  /** Primary CTA */
  callToAction?: CallToAction;
  /** Background image for the right panel */
  backgroundImage: string;
  /** Optional contact info row at the bottom */
  contactInfo?: ContactInfo;
  /** Optional children rendered below the CTA */
  children?: React.ReactNode;
}

// ─── Component ────────────────────────────────────────────────────────────────

export function HeroSection2({
  logo,
  logoDark,
  slogan,
  title,
  subtitle,
  callToAction,
  backgroundImage,
  contactInfo,
  children,
}: HeroSection2Props) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate flex min-h-svh flex-col overflow-hidden bg-background">
      <div className="relative flex min-h-svh w-full flex-col lg:flex-row">

        {/* ── LEFT PANEL ──────────────────────────────────────────────────── */}
        <div className="relative z-10 flex flex-1 flex-col justify-between px-6 pb-10 pt-44 sm:px-10 lg:max-w-[55%] lg:px-14 md:pt-64 xl:px-20">

          {/* Logo — only rendered when prop is provided */}
          {logo && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="flex items-center mb-4"
            >
              <Link href="/" className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wes-500 rounded-md">
                {logoDark ? (
                  <>
                    <Image src={logo} alt="WES GAS logo" width={140} height={48} className="h-10 w-auto object-contain dark:hidden" priority />
                    <Image src={logoDark} alt="WES GAS logo" width={140} height={48} className="h-10 w-auto object-contain hidden dark:block" priority />
                  </>
                ) : (
                  <Image src={logo} alt="WES GAS logo" width={140} height={48} className="h-10 w-auto object-contain" priority />
                )}
              </Link>
            </motion.div>
          )}

          {/* Main content */}
          <div className="my-auto flex flex-col gap-6 py-10 lg:py-16">
            {slogan && (
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
                className="text-xs font-semibold uppercase tracking-[0.2em] text-wes-500"
              >
                {slogan}
              </motion.p>
            )}

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-display text-[2.4rem] font-semibold leading-[1.06] tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-[4.25rem] [&_em]:not-italic [&_em]:text-wes-500"
            >
              {title}
            </motion.h1>

            {/* Green accent rule */}
            <motion.span
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.55, delay: 0.3, ease: "easeOut" }}
              className="block h-[3px] w-20 origin-left rounded-full bg-wes-500"
            />

            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
                className="max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg"
              >
                {subtitle}
              </motion.p>
            )}

            {callToAction && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.45, ease: "easeOut" }}
              >
                <Link
                  href={callToAction.href}
                  className="group inline-flex items-center gap-2 rounded-full bg-[#F6E91A] px-7 py-3.5 text-sm font-semibold text-zinc-900 shadow-lg shadow-[#F6E91A]/30 transition-all duration-200 hover:bg-[#ede213] hover:shadow-[#F6E91A]/40 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F6E91A]"
                >
                  {callToAction.text}
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </motion.div>
            )}

            {children && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.55, delay: 0.55 }}
              >
                {children}
              </motion.div>
            )}
          </div>

          {/* Contact footer row */}
          {contactInfo && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.6, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-border/50 pt-6 text-xs text-muted-foreground"
            >
              {contactInfo.website && (
                <a href={`https://${contactInfo.website}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 transition-colors hover:text-wes-500">
                  <Globe className="h-3.5 w-3.5 text-wes-500" strokeWidth={1.5} />
                  {contactInfo.website}
                </a>
              )}
              {contactInfo.phone && (
                <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-1.5 transition-colors hover:text-wes-500">
                  <Phone className="h-3.5 w-3.5 text-wes-500" strokeWidth={1.5} />
                  {contactInfo.phone}
                </a>
              )}
              {contactInfo.address && (
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-wes-500 shrink-0" strokeWidth={1.5} />
                  {contactInfo.address}
                </span>
              )}
            </motion.div>
          )}
        </div>

        {/* ── RIGHT PANEL — clipped image (desktop only) ───────────────────── */}
        <div className="relative hidden lg:block lg:flex-1">
          <motion.div
            initial={reduceMotion ? false : { clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)" }}
            animate={{ clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)" }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-0 will-change-[clip-path]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={backgroundImage}
              alt=""
              aria-hidden
              loading="eager"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/35 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
          </motion.div>
        </div>

        {/* ── Mobile background ────────────────────────────────────────────── */}
        <div className="absolute inset-0 -z-10 lg:hidden" aria-hidden>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={backgroundImage} alt="" className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-background/65" />
        </div>
      </div>
    </section>
  );
}
