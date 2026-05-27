"use client";

import * as React from "react";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";
import { WesLogo } from "@/components/ui/wes-logo";
import { SocialTooltip, type SocialItem } from "@/components/ui/social-media";
import { COMPANY } from "@/data/company";

const SOCIAL_LINKS: SocialItem[] = [
  {
    href: COMPANY.socials.facebook,
    ariaLabel: "WES GAS on Facebook",
    tooltip: "Facebook",
    color: "#1877F2",
    icon: <Facebook className="h-full w-full stroke-[1.7]" />,
  },
  {
    href: COMPANY.socials.twitter,
    ariaLabel: "WES GAS on X",
    tooltip: "X / Twitter",
    color: "#111111",
    icon: <Twitter className="h-full w-full stroke-[1.7]" />,
  },
  {
    href: COMPANY.socials.linkedin,
    ariaLabel: "WES GAS on LinkedIn",
    tooltip: "LinkedIn",
    color: "#0A66C2",
    icon: <Linkedin className="h-full w-full stroke-[1.7]" />,
  },
];

const CONTACT_ITEMS = [
  {
    icon: <Phone className="h-5 w-5" />,
    label: "Telephone",
    value: COMPANY.phone,
    href: `tel:${COMPANY.phoneRaw}`,
  },
  {
    icon: <Mail className="h-5 w-5" />,
    label: "Email",
    value: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    label: "Address",
    value: "Plot 212 WANA Close, Entebbe Rd, Kampala",
    href: null,
  },
];

export function TopBar() {
  return (
    <div className="w-full bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-2.5 md:py-4 flex items-center justify-between gap-4 md:gap-8">
        {/* Logo on the left (always visible) */}
        <div className="shrink-0">
          <WesLogo forceVariant="light" />
        </div>

        {/* Mobile: compact action icons */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={`tel:${COMPANY.phoneRaw}`}
            aria-label="Call WES GAS"
            className="grid h-10 w-10 place-items-center rounded-full bg-[#1D8B43]/10 text-[#1D8B43] active:scale-95 transition"
          >
            <Phone className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${COMPANY.email}`}
            aria-label="Email WES GAS"
            className="grid h-10 w-10 place-items-center rounded-full bg-[#1D8B43]/10 text-[#1D8B43] active:scale-95 transition"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>

        {/* Desktop: full contact blocks + socials */}
        <div className="hidden md:flex flex-wrap items-center gap-6 lg:gap-10">
          {CONTACT_ITEMS.map((item) => {
            const inner = (
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1D8B43]/10 text-[#1D8B43]">
                  {item.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                    {item.label}
                  </span>
                  <span className="text-sm font-bold leading-tight text-gray-900">
                    {item.value}
                  </span>
                </div>
              </div>
            );

            return item.href ? (
              <a
                key={item.label}
                href={item.href}
                className="transition-opacity hover:opacity-75"
              >
                {inner}
              </a>
            ) : (
              <div key={item.label}>{inner}</div>
            );
          })}

          <SocialTooltip
            items={SOCIAL_LINKS}
            className="relative z-[80] ml-1 gap-2 [&_a]:h-9 [&_a]:w-9 [&_span]:h-5 [&_span]:w-5 [&_a]:bg-[#1D8B43]/10 [&_div:last-child]:text-[11px]"
          />
        </div>
      </div>
    </div>
  );
}
