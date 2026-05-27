"use client";

import * as React from "react";
import { MessageSquareHeart } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { TestimonialsSplit } from "@/components/ui/split-testimonial";
import type { SplitTestimonialItem } from "@/components/ui/split-testimonial";

const TESTIMONIALS: SplitTestimonialItem[] = [
  {
    id: 1,
    quote:
      "Switching our restaurant to Wesgas LPG was the best decision. The cylinders arrive on time, the staff are professional, and our kitchen is faster and cleaner than ever.",
    name: "Aisha Nabatanzi",
    role: "Commercial LPG Customer · Entebbe",
    company: "WES GAS Customer",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=500&fit=crop&q=80",
  },
  {
    id: 2,
    quote:
      "For three years we have only used Wesgas in our home. Pay-As-You-Cook means I never run out, and the savings compared to charcoal are real — my children also breathe much better.",
    name: "Nakato Grace",
    role: "WANA LPG Customer · 3 years · Kampala",
    company: "Pay-As-You-Cook",
    image:
      "https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=400&h=500&fit=crop&q=80",
  },
  {
    id: 3,
    quote:
      "Our solar system powers lights, phones and a small fridge for the shop. The PAYGo daily plan made it possible for us to own real clean energy without a big loan.",
    name: "Ssegawa Robert",
    role: "Solar Home System Customer · Mukono",
    company: "PAYGo Solar",
    image:
      "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=400&h=500&fit=crop&q=80",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="section relative">
      <div className="container">
        <SectionHeading
          eyebrow="Customer Stories"
          eyebrowIcon={<MessageSquareHeart className="h-3.5 w-3.5" />}
          title={
            <>
              Trusted across Uganda by{" "}
              <span className="text-wes-500">families and businesses</span>.
            </>
          }
          description="Real stories from real WES GAS customers — at home, in the kitchen, and behind the counter."
          align="center"
        />

        <TestimonialsSplit testimonials={TESTIMONIALS} />
      </div>
    </section>
  );
}
