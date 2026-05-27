"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Map as MapGL, MapMarker, MarkerContent, MarkerPopup, type MapRef } from "@/components/ui/map";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { BorderBeam } from "@/components/ui/border-beam";
import { MagicCard } from "@/components/ui/magic-card";
import { ShineBorder } from "@/components/ui/shine-border";
import { Spotlight } from "@/components/ui/spotlight";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  MapPin, Phone, Mail, Send, MessageCircle,
  Facebook, Twitter, Linkedin, Clock,
  Layers, CheckCircle2, ChevronRight, Building2,
} from "lucide-react";
import { COMPANY } from "@/data/company";
import { cn } from "@/lib/utils";

// ─── Data ─────────────────────────────────────────────────────────────────────

const BRANCHES = [
  { name: "Head Office", city: "Seguku, Kampala", note: "HQ · 24/7 support", region: "Central" },
  { name: "Entebbe Branch", city: "Wakiso", note: "Showroom · Refills", region: "Central" },
  { name: "Mukono Branch", city: "Mukono", note: "Solar & LPG", region: "Central" },
  { name: "Mbarara Branch", city: "Mbarara", note: "Western region hub", region: "Western" },
  { name: "Mbale Branch", city: "Mbale", note: "Eastern region hub", region: "Eastern" },
  { name: "Gulu Branch", city: "Gulu", note: "Northern region hub", region: "Northern" },
];

const CHANNELS = [
  {
    icon: Phone,
    label: "Call us",
    value: COMPANY.phone,
    href: `tel:${COMPANY.phoneRaw}`,
    description: "Mon – Sat, 8am – 6pm EAT",
  },
  {
    icon: Mail,
    label: "Email us",
    value: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
    description: "Response within 1 business day",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat with us",
    href: `https://wa.me/${COMPANY.phoneRaw.replace("+", "")}`,
    description: "Fastest response channel",
  },
];

const HQ_LNG = 32.562;
const HQ_LAT  = 0.238;

const MAP_STYLES = {
  default:       undefined,
  openstreetmap: "https://tiles.openfreemap.org/styles/bright",
  liberty3d:     "https://tiles.openfreemap.org/styles/liberty",
} as const;
type StyleKey = keyof typeof MAP_STYLES;

// ─── Main section ─────────────────────────────────────────────────────────────

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden pb-0">
      <Spotlight className="-top-20 left-1/3" fill="rgba(34,197,94,0.12)" />

      <div className="container py-12">

        {/* ── Quick-channel strip ───────────────────────────────────────── */}
        <div className="grid gap-4 sm:grid-cols-3 mb-10">
          {CHANNELS.map((ch) => (
            <a key={ch.label} href={ch.href} target={ch.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
              <MagicCard
                gradientColor="#16a34a"
                gradientOpacity={0.15}
                className="!rounded-2xl border-border bg-card p-5 w-full cursor-pointer hover:border-wes-500/40 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-wes-500/10 text-wes-600 dark:text-wes-400">
                    <ch.icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[11px] uppercase tracking-widest text-muted-foreground">{ch.label}</p>
                    <p className="mt-0.5 font-semibold text-foreground truncate">{ch.value}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{ch.description}</p>
                  </div>
                  <ChevronRight className="ml-auto h-4 w-4 shrink-0 text-muted-foreground/50 self-center" />
                </div>
              </MagicCard>
            </a>
          ))}
        </div>

        {/* ── Main grid: beam hub + form ────────────────────────────────── */}
        <div className="grid gap-6 lg:grid-cols-[1fr_1.15fr] items-start">

          {/* Left column */}
          <div className="flex flex-col gap-6">
            {/* AnimatedBeam hub */}
            <BeamHub />

            {/* Company details */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <Badge icon={<Building2 className="h-3.5 w-3.5" />}>Head Office</Badge>
              <div className="mt-4 space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-wes-500 mt-0.5 shrink-0" />
                  <span className="text-muted-foreground leading-relaxed">{COMPANY.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-wes-500 shrink-0" />
                  <span className="text-muted-foreground">Mon – Sat · 8:00 – 18:00 EAT</span>
                </div>
              </div>

              {/* Social row */}
              <div className="mt-5 flex items-center gap-2 pt-4 border-t border-border">
                <span className="text-[11px] uppercase tracking-widest text-muted-foreground mr-1">Follow</span>
                {[
                  { Icon: Facebook, href: COMPANY.socials.facebook, label: "Facebook" },
                  { Icon: Twitter,  href: COMPANY.socials.twitter,  label: "Twitter"  },
                  { Icon: Linkedin, href: COMPANY.socials.linkedin, label: "LinkedIn" },
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="grid h-9 w-9 place-items-center rounded-xl border border-border text-muted-foreground hover:border-wes-500/50 hover:text-wes-600 transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right column — form */}
          <ContactForm />
        </div>

        {/* ── Branch grid ───────────────────────────────────────────────── */}
        <div className="mt-10">
          <div className="flex items-center justify-between mb-5">
            <p className="font-display text-lg font-semibold">Our branches</p>
            <span className="text-xs text-muted-foreground">9 branches · 20 points of sale</span>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {BRANCHES.map((b) => (
              <MagicCard
                key={b.name}
                gradientColor="#16a34a"
                gradientOpacity={0.12}
                className="!rounded-xl border-border bg-card p-4 w-full"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-wes-500/10 text-wes-600 dark:text-wes-400">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium truncate">{b.name}</p>
                    <p className="text-[11px] text-muted-foreground">{b.city}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-wes-500/10 px-2 py-0.5 text-[10px] font-medium text-wes-600 dark:text-wes-400">
                    {b.region}
                  </span>
                </div>
                <p className="mt-2 text-[11px] text-muted-foreground pl-12">{b.note}</p>
              </MagicCard>
            ))}
          </div>
        </div>
      </div>

      {/* ── Full-width map ─────────────────────────────────────────────── */}
      <div className="mt-10">
        <ContactMap />
      </div>
    </section>
  );
}

// ─── AnimatedBeam hub ─────────────────────────────────────────────────────────

function BeamHub() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const centerRef    = React.useRef<HTMLDivElement>(null);
  const phoneRef     = React.useRef<HTMLDivElement>(null);
  const emailRef     = React.useRef<HTMLDivElement>(null);
  const waRef        = React.useRef<HTMLDivElement>(null);
  const mapsRef      = React.useRef<HTMLDivElement>(null);

  const NodeIcon = ({ icon: Icon, nodeRef, label }: { icon: React.ElementType; nodeRef: React.RefObject<HTMLDivElement | null>; label: string }) => (
    <div ref={nodeRef as React.Ref<HTMLDivElement>} className="flex flex-col items-center gap-1.5">
      <div className="grid h-12 w-12 place-items-center rounded-2xl border border-border bg-card shadow-sm">
        <Icon className="h-5 w-5 text-wes-500" />
      </div>
      <span className="text-[10px] text-muted-foreground">{label}</span>
    </div>
  );

  return (
    <div
      ref={containerRef}
      className="relative rounded-2xl border border-border bg-card p-6 overflow-hidden"
    >
      <p className="text-[11px] uppercase tracking-widest text-muted-foreground mb-6">Connect with us</p>

      {/* Node layout */}
      <div className="flex items-center justify-between px-2">
        <div className="flex flex-col gap-8">
          <NodeIcon icon={Phone}          nodeRef={phoneRef} label="Call"      />
          <NodeIcon icon={MessageCircle}  nodeRef={waRef}    label="WhatsApp"  />
        </div>

        {/* Centre node */}
        <div ref={centerRef} className="flex flex-col items-center gap-1.5">
          <div className="relative grid h-16 w-16 place-items-center rounded-2xl bg-wes-600 text-white shadow-eco">
            <Building2 className="h-7 w-7" />
            <span className="absolute -top-1 -right-1 h-3.5 w-3.5 rounded-full border-2 border-card bg-green-400" />
          </div>
          <span className="text-[10px] text-muted-foreground font-medium">WES GAS HQ</span>
        </div>

        <div className="flex flex-col gap-8">
          <NodeIcon icon={Mail}    nodeRef={emailRef} label="Email" />
          <NodeIcon icon={MapPin}  nodeRef={mapsRef}  label="Visit" />
        </div>
      </div>

      {/* Beams */}
      <AnimatedBeam containerRef={containerRef as React.RefObject<HTMLElement>} fromRef={phoneRef as React.RefObject<HTMLElement>} toRef={centerRef as React.RefObject<HTMLElement>} gradientStartColor="#22c55e" gradientStopColor="#16a34a" pathColor="#22c55e" pathOpacity={0.15} curvature={30}  duration={4} />
      <AnimatedBeam containerRef={containerRef as React.RefObject<HTMLElement>} fromRef={waRef    as React.RefObject<HTMLElement>} toRef={centerRef as React.RefObject<HTMLElement>} gradientStartColor="#22c55e" gradientStopColor="#16a34a" pathColor="#22c55e" pathOpacity={0.15} curvature={-30} duration={4} delay={0.8} />
      <AnimatedBeam containerRef={containerRef as React.RefObject<HTMLElement>} fromRef={emailRef as React.RefObject<HTMLElement>} toRef={centerRef as React.RefObject<HTMLElement>} gradientStartColor="#22c55e" gradientStopColor="#16a34a" pathColor="#22c55e" pathOpacity={0.15} curvature={-30} duration={4} delay={1.6} />
      <AnimatedBeam containerRef={containerRef as React.RefObject<HTMLElement>} fromRef={mapsRef  as React.RefObject<HTMLElement>} toRef={centerRef as React.RefObject<HTMLElement>} gradientStartColor="#22c55e" gradientStopColor="#16a34a" pathColor="#22c55e" pathOpacity={0.15} curvature={30}  duration={4} delay={2.4} />
    </div>
  );
}

// ─── Contact form ─────────────────────────────────────────────────────────────

function ContactForm() {
  const [sent, setSent] = React.useState(false);

  return (
    <div className="relative rounded-2xl border border-border bg-card overflow-hidden">
      <BorderBeam size={220} duration={9} colorFrom="#22C55E" colorTo="#16A34A" borderWidth={1.5} />

      <div className="p-7 lg:p-8">
        <AnimatePresence mode="wait">
          {sent ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="flex flex-col items-center justify-center py-16 text-center gap-4"
            >
              <span className="grid h-16 w-16 place-items-center rounded-full bg-wes-500/10">
                <CheckCircle2 className="h-8 w-8 text-wes-500" />
              </span>
              <p className="font-display text-2xl font-semibold">Message sent!</p>
              <p className="max-w-xs text-sm text-muted-foreground">
                Thanks for reaching out. Our team will get back to you within one business day.
              </p>
              <Button variant="glass" size="sm" className="rounded-full mt-2" onClick={() => setSent(false)}>
                Send another message
              </Button>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <p className="text-[11px] uppercase tracking-widest text-wes-600 dark:text-wes-400">Get in touch</p>
              <p className="mt-1 font-display text-2xl font-semibold tracking-tight">Tell us how we can help.</p>

              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="mt-6 grid gap-4"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <FloatField label="Full name"   id="name"  type="text"  placeholder="Jane Nakato"       />
                  <FloatField label="Email"        id="email" type="email" placeholder="you@example.com"   />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <FloatField label="Phone"        id="phone" type="tel"   placeholder="(+256) 7XX XXXXXX" />
                  <FloatSelect
                    label="I'm interested in"
                    id="interest"
                    options={[
                      "LPG for my home",
                      "Commercial LPG supply",
                      "Solar Home System",
                      "Solar Freezer",
                      "Electric Pressure Cooker",
                      "Partnership / Investment",
                    ]}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="msg" className="text-xs font-medium text-muted-foreground">Message</label>
                  <textarea
                    id="msg"
                    rows={4}
                    placeholder="Briefly describe what you need…"
                    className="resize-none rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition focus:border-wes-500/60 focus:ring-2 focus:ring-wes-500/20 placeholder:text-muted-foreground/50"
                  />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                  <p className="text-[11px] text-muted-foreground">
                    We respond within one business day.
                  </p>
                  <Button type="submit" variant="gradient" className="rounded-full">
                    Send message
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// ─── Floating-label input ─────────────────────────────────────────────────────

function FloatField({ label, id, type, placeholder }: { label: string; id: string; type: string; placeholder: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-xs font-medium text-muted-foreground">{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="h-11 rounded-xl border border-border bg-background/60 px-4 text-sm outline-none transition focus:border-wes-500/60 focus:ring-2 focus:ring-wes-500/20 placeholder:text-muted-foreground/50"
      />
    </div>
  );
}

function FloatSelect({ label, id, options }: { label: string; id: string; options: string[] }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-xs font-medium text-muted-foreground">{label}</label>
      <select
        id={id}
        defaultValue=""
        className="h-11 rounded-xl border border-border bg-background/60 px-3 text-sm outline-none transition focus:border-wes-500/60 focus:ring-2 focus:ring-wes-500/20"
      >
        <option value="" disabled>Select…</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}

// ─── Map ──────────────────────────────────────────────────────────────────────

function ContactMap() {
  const mapRef = React.useRef<MapRef>(null);
  const [style, setStyle] = React.useState<StyleKey>("default");
  const selectedStyle = MAP_STYLES[style];
  const is3D = style === "liberty3d";

  React.useEffect(() => {
    mapRef.current?.easeTo({ pitch: is3D ? 58 : 0, duration: 600 });
  }, [is3D]);

  return (
    <div className="relative h-[520px] w-full">
      <MapGL
        ref={mapRef}
        center={[HQ_LNG, HQ_LAT]}
        zoom={14}
        styles={selectedStyle ? { light: selectedStyle, dark: selectedStyle } : undefined}
      >
        <MapMarker longitude={HQ_LNG} latitude={HQ_LAT}>
          <MarkerContent>
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <span className="absolute -inset-5 rounded-full bg-wes-500/25 blur-xl" />
              <span className="relative grid h-11 w-11 place-items-center rounded-full bg-wes-600 text-white shadow-eco ring-2 ring-white/40">
                <MapPin className="h-5 w-5" />
              </span>
            </motion.div>
          </MarkerContent>
          <MarkerPopup>
            <div className="min-w-[180px] rounded-xl border border-border bg-background/95 p-3 shadow-lg backdrop-blur text-sm">
              <p className="font-semibold text-foreground">WES GAS HQ</p>
              <p className="mt-0.5 text-[11px] text-muted-foreground leading-relaxed">
                Plot 212 WANA Close<br />
                Entebbe Road, Seguku<br />
                Kampala, Uganda
              </p>
            </div>
          </MarkerPopup>
        </MapMarker>
      </MapGL>

      {/* Style switcher */}
      <div className="absolute right-3 top-3 z-10">
        <div className="flex items-center gap-1.5 rounded-xl border border-border bg-background/90 px-2.5 py-1.5 shadow-md backdrop-blur">
          <Layers className="h-3.5 w-3.5 text-wes-500 shrink-0" />
          <select
            value={style}
            onChange={(e) => setStyle(e.target.value as StyleKey)}
            className="bg-transparent text-foreground text-xs outline-none cursor-pointer pr-1"
          >
            <option value="default">Default (Carto)</option>
            <option value="openstreetmap">OpenStreetMap</option>
            <option value="liberty3d">3D Liberty</option>
          </select>
        </div>
      </div>
    </div>
  );
}
