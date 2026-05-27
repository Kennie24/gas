import { Hero } from "@/components/sections/hero";
import { ExploreGrid } from "@/components/sections/explore-grid";
import { Awards } from "@/components/sections/awards";
import { Testimonials } from "@/components/sections/testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ExploreGrid />
      <Awards />
      <Testimonials />
    </>
  );
}
