# WANA Energy Solutions (WES GAS) — Website

> **Powering Life, Protecting Nature.**
> Production-grade marketing site for [WANA Energy Solutions](https://www.wanaenergy.com)
> (trading as **Wesgas**), Uganda's leading clean energy social enterprise.

Built as a real, investor-ready enterprise platform — not a template.

---

## ✨ Stack

| Layer        | Tech                                                |
| ------------ | --------------------------------------------------- |
| Framework    | **Next.js 15** (App Router, RSC, Server Actions)    |
| Language     | TypeScript (strict)                                 |
| Styling      | TailwindCSS + shadcn/ui design tokens               |
| Motion       | Framer Motion + GSAP-ready scroll primitives        |
| Icons        | Lucide React                                        |
| Themes       | `next-themes` (Dark + Light)                        |
| Fonts        | Inter (UI) · Sora (display) · JetBrains Mono (code) |
| Architecture | Component-driven, mobile-first, fully accessible    |

## 🎨 Design system

- **Brand palette** — `#16A34A`, `#22C55E`, `#0F172A`, white
- Eco-green gradients · soft shadows · glassmorphism · animated particles
- Bento grids · magnetic buttons · scroll-progress · parallax stat counters
- Premium aesthetic blending **Tesla Energy · Stripe · Apple · climate-tech**

## 🏗 Structure

```
src/
├─ app/
│  ├─ layout.tsx        # Root layout, metadata, theme provider
│  ├─ page.tsx          # Homepage composition
│  └─ globals.css       # Design tokens, glass utilities
├─ components/
│  ├─ nav/navbar.tsx
│  ├─ ui/               # Primitives (Button, GlassCard, MagneticButton…)
│  └─ sections/         # Hero, About, Products, PayGo, Impact,
│                       # Testimonials, Awards, Investors, Contact, Footer
├─ data/company.ts      # Single source of truth: company copy + timeline
└─ lib/utils.ts
```

## 🚀 Getting started

```bash
# install deps
npm install

# run dev server
npm run dev

# open
http://localhost:3000
```

## 📦 Production

```bash
npm run build
npm run start
```

## 🌍 Company facts (used in code, not placeholders)

- **Founded:** 2008
- **Founders:** Emmy Wasirwa & Margaret N Nakigudde
- **HQ:** Plot 212 WANA Close, Entebbe Road, Seguku, Kampala, Uganda
- **Phone:** (+256) 777 704 397
- **Email:** info@wanaenergy.com
- **Coverage:** 76 districts · 9 branches · 20 points of sale
- **Households served:** 120,000+
- **Award:** Environmental Social Enterprise of the Year — FUSE

## 🧭 Sections shipped

1. **Hero** — cinematic LPG + solar visual, animated stat counters, particles
2. **About** — interactive 2008–2025 timeline, mission, founder cards
3. **Products** — LPG, Solar, Freezers, Electric Pressure Cookers (bento grid)
4. **PAYGo / PACo** — fintech-style phone mockup, Pay-As-You-Cook UI
5. **Impact** — bento metrics + animated Uganda coverage map
6. **Testimonials** — carousel of real customer voices
7. **Awards** — FUSE Environmental Social Enterprise of the Year
8. **Investors** — ESG pillars + animated growth chart
9. **Contact** — form, branch locator, WhatsApp CTA, stylized map
10. **Footer** — newsletter, quick links, socials, mission

## ♿ Accessibility & Performance

- Semantic landmarks, ARIA labels, focus-visible rings
- Reduced-motion-respecting animations where applicable
- Next/font with `display: swap`
- `optimizePackageImports` for `lucide-react` & `framer-motion`
- Image formats: AVIF / WebP

---

© WANA Energy Solutions · Trading as Wesgas.
