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
  backgroundImage?: string;
  /** Optional image slider for the right panel / mobile background */
  backgroundImages?: string[];
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
  backgroundImages,
  contactInfo,
  children,
}: HeroSection2Props) {
  const reduceMotion = useReducedMotion();
  const slides = React.useMemo(
    () => (backgroundImages?.length ? backgroundImages : backgroundImage ? [backgroundImage] : []),
    [backgroundImage, backgroundImages]
  );
  const [activeSlide, setActiveSlide] = React.useState(0);

  React.useEffect(() => {
    if (slides.length <= 1 || reduceMotion) return;

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, [reduceMotion, slides.length]);

  return (
    <section className="relative isolate mt-[150px] flex min-h-[calc(100svh-150px)] flex-col overflow-hidden bg-background md:mt-[188px] md:min-h-[calc(100svh-188px)] lg:mt-[184px] lg:min-h-[calc(100svh-184px)]">
      {/* ── FULL-WIDTH HERO IMAGE SLIDER ─────────────────────────────────── */}
      <div className="absolute inset-0 -z-10 bg-black" aria-hidden>
        {slides.map((src, index) => (
          <motion.img
            key={src}
            src={src}
            alt=""
            loading={index === 0 ? "eager" : "lazy"}
            className="absolute inset-0 h-full w-full object-contain"
            initial={false}
            animate={{
              opacity: activeSlide === index ? 1 : 0,
              scale: activeSlide === index ? 1.06 : 1,
            }}
            transition={{ duration: reduceMotion ? 0 : 1.15, ease: "easeOut" }}
          />
        ))}
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="relative flex min-h-[calc(100svh-150px)] w-full flex-col md:min-h-[calc(100svh-188px)] lg:min-h-[calc(100svh-184px)]">

        {/* ── CONTENT PANEL ───────────────────────────────────────────────── */}
        <div className="relative z-10 flex min-h-[calc(100svh-150px)] flex-1 flex-col justify-between px-5 pb-8 pt-10 text-white sm:px-10 md:min-h-[calc(100svh-188px)] md:pt-20 lg:min-h-[calc(100svh-184px)] lg:px-14 xl:px-20">

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
          <div className="my-auto flex flex-col gap-4 py-8 sm:gap-6 lg:py-16">
            {slogan && (
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
                className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#F6E91A] sm:text-xs sm:tracking-[0.2em]"
              >
                {slogan}
              </motion.p>
            )}

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="max-w-5xl font-display text-[clamp(2rem,12vw,3.15rem)] font-semibold leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[4.25rem] [&_em]:not-italic [&_em]:text-[#F6E91A]"
            >
              {title}
            </motion.h1>

            {/* Green accent rule */}
            <motion.span
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.55, delay: 0.3, ease: "easeOut" }}
              className="block h-[3px] w-20 origin-left rounded-full bg-[#F6E91A]"
            />

            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
                className="max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base md:text-lg"
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
                  className="group inline-flex items-center gap-2 rounded-full bg-[#F6E91A] px-5 py-3 text-xs font-semibold text-zinc-900 shadow-lg shadow-[#F6E91A]/30 transition-all duration-200 hover:bg-[#ede213] hover:shadow-[#F6E91A]/40 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F6E91A] sm:px-7 sm:py-3.5 sm:text-sm"
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
              className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/20 pt-6 text-xs text-white/70"
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

        {slides.length > 1 && (
          <div className="absolute bottom-5 left-5 z-20 flex items-center gap-2 rounded-full border border-white/20 bg-black/25 px-3 py-2 backdrop-blur-md sm:bottom-10 sm:left-10 lg:left-14 xl:left-20">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveSlide(index)}
                aria-label={`Show hero image ${index + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeSlide === index ? "w-8 bg-[#F6E91A]" : "w-2 bg-white/60 hover:bg-white"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
