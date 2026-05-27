"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Testimonial } from "@/components/ui/testimonial";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const CUSTOMERS = [
  {
    quote:
      "Switching to Wesgas LPG transformed our restaurant kitchen — faster cooking, cleaner air and predictable costs every single day.",
    highlight: "Wesgas LPG",
    authorName: "Aisha Nabatanzi",
    authorPosition: "Commercial LPG Customer · Entebbe",
    authorImage:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&q=80",
  },
  {
    quote:
      "I have been a WANA LPG customer for 3 years. The refills are reliable, the agents are friendly and Pay-As-You-Cook fits my family budget.",
    highlight: "WANA LPG",
    authorName: "Nakato Grace",
    authorPosition: "WANA LPG Customer · Kampala",
    authorImage:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop&q=80",
  },
  {
    quote:
      "Our Solar Home System keeps the lights on, charges our phones and powers the radio every night — even when the grid is down.",
    highlight: "Solar Home System",
    authorName: "Ssegawa Robert",
    authorPosition: "Solar Home System Customer · Mukono",
    authorImage:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&q=80",
  },
];

export function ProductTestimonials() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % CUSTOMERS.length);
    }, 6500);
    return () => clearInterval(id);
  }, []);

  const active = CUSTOMERS[index];

  const next = () => setIndex((i) => (i + 1) % CUSTOMERS.length);
  const prev = () => setIndex((i) => (i - 1 + CUSTOMERS.length) % CUSTOMERS.length);

  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#1D8B43] text-white py-20 md:py-28">
      {/* subtle highlight */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="container">
        <div className="mb-8 flex flex-col items-center gap-4 text-center">
          <Badge icon={<Quote className="h-3.5 w-3.5" />} className="border-white/20 bg-white/10 text-white">Customer stories</Badge>
          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight text-white">
            Trusted in homes, restaurants and{" "}
            <span className="text-[#F6E91A]">communities</span>.
          </h2>
          <p className="max-w-2xl text-base md:text-lg text-white/75">
            Real Ugandan families and businesses who power their lives with WES GAS clean energy products.
          </p>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <Testimonial
                quote={active.quote}
                highlightedText={active.highlight}
                authorName={active.authorName}
                authorPosition={active.authorPosition}
                authorImage={active.authorImage}
                className="!py-8 [&_p]:text-white/90 [&_strong]:text-white [&_h5:first-of-type]:text-white [&_h5:nth-of-type(2)]:text-white/60"
              />
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="mt-2 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/30 bg-white/10 text-white transition-all hover:bg-white hover:text-[#1D8B43]"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-2">
              {CUSTOMERS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Show testimonial ${i + 1}`}
                  className={cn(
                    "h-1.5 rounded-full transition-all",
                    i === index ? "w-8 bg-[#F6E91A]" : "w-2.5 bg-white/30 hover:bg-white/60",
                  )}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/30 bg-white/10 text-white transition-all hover:bg-white hover:text-[#1D8B43]"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
