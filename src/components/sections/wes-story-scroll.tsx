"use client";

import FlowArt, { FlowSection } from "@/components/ui/story-scroll";

function Rule({ light = true }: { light?: boolean }) {
  return <hr className={`my-[2vw] border-none border-t ${light ? "border-white/55" : "border-black/35"}`} />;
}

function Metric({ label, text }: { label: string; text: string }) {
  return (
    <div className="min-w-[140px] flex-1 rounded-xl border border-current/15 p-3 md:min-w-[180px] md:border-0 md:p-0">
      <p className="mb-1.5 text-xs font-bold uppercase tracking-wider md:mb-2 md:text-sm">{label}</p>
      <p className="text-sm leading-relaxed opacity-75 md:text-[clamp(0.85rem,1.3vw,1.05rem)]">{text}</p>
    </div>
  );
}

export function WESStoryScroll() {
  return (
    <FlowArt aria-label="WES GAS clean energy story" className="relative">
      <FlowSection aria-label="Powering life" style={{ backgroundColor: "#1D8B43", color: "#fff" }}>
        <p className="text-xs font-bold uppercase tracking-[0.2em]">01 — Powering life</p>
        <Rule />
        <div>
          <h2 className="text-[clamp(2.65rem,16vw,5rem)] font-black uppercase leading-[0.88] tracking-tight md:text-[clamp(3.2rem,11vw,13rem)]">
            Clean
            <br />
            Energy
            <br />
            For All
          </h2>
        </div>
        <Rule />
        <p className="mt-auto max-w-[58ch] text-base font-normal leading-relaxed sm:text-lg md:text-[clamp(1rem,2.35vw,2rem)]">
          WANA Energy Solutions makes LPG, solar power, solar cold storage and electric cooking accessible to Ugandan homes, businesses and communities.
        </p>
      </FlowSection>

      <FlowSection aria-label="Clean cooking mission" style={{ backgroundColor: "#0F172A", color: "#fff" }}>
        <p className="text-xs font-bold uppercase tracking-[0.2em]">02 — Clean cooking utility</p>
        <Rule />
        <div>
          <h2 className="text-[clamp(2.65rem,16vw,5rem)] font-black uppercase leading-[0.88] tracking-tight md:text-[clamp(3.2rem,11vw,13rem)]">
            Cook
            <br />
            Cleaner
            <br />
            Daily
          </h2>
        </div>
        <Rule />
        <p className="max-w-[58ch] text-base leading-relaxed sm:text-lg md:text-[clamp(1rem,2.35vw,2rem)]">
          Pay-As-You-Cook brings affordable LPG access to families and restaurants, reducing smoke exposure and helping households move away from charcoal.
        </p>
        <Rule />
        <div className="grid gap-3 sm:grid-cols-3 md:flex md:flex-wrap md:gap-[3vw]">
          <Metric label="120,000+" text="Households served with cleaner energy solutions." />
          <Metric label="UGX 1,500/day" text="Daily access model designed for affordability." />
          <Metric label="Health" text="Less indoor smoke for women, children and kitchens." />
        </div>
      </FlowSection>

      <FlowSection aria-label="Renewable power" style={{ backgroundColor: "#F6E91A", color: "#0F172A" }}>
        <p className="text-xs font-bold uppercase tracking-[0.2em]">03 — Renewable power</p>
        <Rule light={false} />
        <div>
          <h2 className="text-[clamp(2.65rem,16vw,5rem)] font-black uppercase leading-[0.88] tracking-tight md:text-[clamp(3.2rem,11vw,13rem)]">
            Solar
            <br />
            That
            <br />
            Works
          </h2>
        </div>
        <Rule light={false} />
        <p className="max-w-[58ch] text-base leading-relaxed sm:text-lg md:text-[clamp(1rem,2.35vw,2rem)]">
          Solar Home Systems and Solar Freezers support lighting, phone charging, cold storage, food preservation and off-grid operation across underserved districts.
        </p>
        <Rule light={false} />
        <div className="grid gap-3 sm:grid-cols-3 md:flex md:flex-wrap md:gap-[3vw]">
          <Metric label="76 districts" text="Clean energy coverage across Uganda." />
          <Metric label="Solar freezers" text="Cold-chain support for food, vaccines and rural trade." />
          <Metric label="PAYGo" text="Mobile-money payments make ownership possible." />
        </div>
      </FlowSection>

      <FlowSection aria-label="Climate impact" style={{ backgroundColor: "#ffffff", color: "#0F172A" }}>
        <p className="text-xs font-bold uppercase tracking-[0.2em]">04 — Climate impact</p>
        <Rule light={false} />
        <div>
          <h2 className="text-[clamp(2.65rem,16vw,5rem)] font-black uppercase leading-[0.88] tracking-tight md:text-[clamp(3.2rem,11vw,13rem)]">
            Protect
            <br />
            Nature
          </h2>
        </div>
        <Rule light={false} />
        <p className="max-w-[58ch] text-base leading-relaxed sm:text-lg md:text-[clamp(1rem,2.35vw,2rem)]">
          WES GAS connects clean cooking, renewable power and inclusive financing into one measurable ESG platform for climate, health and rural livelihoods.
        </p>
        <Rule light={false} />
        <div className="grid gap-3 sm:grid-cols-3 md:flex md:flex-wrap md:gap-[3vw]">
          <Metric label="280,000+" text="Trees protected per year through clean energy adoption." />
          <Metric label="38,000 tCO₂" text="Avoided per year through cleaner fuel transitions." />
          <Metric label="FUSE" text="Environmental Social Enterprise of the Year recognition." />
        </div>
      </FlowSection>
    </FlowArt>
  );
}
