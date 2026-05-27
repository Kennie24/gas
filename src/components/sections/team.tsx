"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin, Mail, Twitter, Users, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { LEADERSHIP, TEAM, TEAM_STATS, type TeamMember } from "@/data/team";
import { cn } from "@/lib/utils";

const departments = ["All", "Leadership", "Operations", "Engineering", "Commercial", "Impact"] as const;
type Department = (typeof departments)[number];

function MemberCard({ m, large = false }: { m: TeamMember; large?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-border bg-card",
        large ? "md:col-span-2" : ""
      )}
    >
      <div className={cn("relative w-full overflow-hidden", large ? "aspect-[5/4]" : "aspect-[4/5]")}>
        <Image
          src={m.image}
          alt={m.name}
          fill
          sizes="(max-width:768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
          <p className="text-[10px] uppercase tracking-[0.25em] text-white/70 mb-2">{m.department}</p>
          <h3 className="text-xl md:text-2xl font-display font-semibold text-white">{m.name}</h3>
          <p className="mt-1 text-sm text-white/80">{m.role}</p>

          <p
            className={cn(
              "text-sm text-white/70 leading-relaxed mt-3 max-w-md transition-all duration-500",
              "opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40"
            )}
          >
            {m.bio}
          </p>

          {m.socials ? (
            <div className="mt-4 flex items-center gap-2">
              {m.socials.linkedin ? (
                <a
                  href={m.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${m.name} on LinkedIn`}
                  className="grid h-8 w-8 place-items-center rounded-full border border-white/30 text-white hover:bg-white hover:text-wes-700 transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              ) : null}
              {m.socials.twitter ? (
                <a
                  href={m.socials.twitter}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${m.name} on X/Twitter`}
                  className="grid h-8 w-8 place-items-center rounded-full border border-white/30 text-white hover:bg-white hover:text-wes-700 transition-colors"
                >
                  <Twitter className="h-4 w-4" />
                </a>
              ) : null}
              {m.socials.email ? (
                <a
                  href={`mailto:${m.socials.email}`}
                  aria-label={`Email ${m.name}`}
                  className="grid h-8 w-8 place-items-center rounded-full border border-white/30 text-white hover:bg-white hover:text-wes-700 transition-colors"
                >
                  <Mail className="h-4 w-4" />
                </a>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
}

export function Team() {
  const [filter, setFilter] = React.useState<Department>("All");

  const filtered = React.useMemo(
    () => (filter === "All" ? TEAM : TEAM.filter((m) => m.department === filter)),
    [filter]
  );

  return (
    <>
      {/* Stats strip */}
      <section className="section pb-0">
        <div className="container">
          <div className="rounded-3xl border border-border bg-card/60 backdrop-blur-sm">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-border">
              {TEAM_STATS.map((s) => (
                <div key={s.label} className="p-6 md:p-8 text-center">
                  <p className="font-display text-3xl md:text-4xl font-bold text-wes-600">{s.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Founders"
            eyebrowIcon={<Sparkles className="h-3.5 w-3.5" />}
            title={
              <>
                Built by Ugandans, for <span className="text-gradient-eco">Uganda</span>.
              </>
            }
            description="Two co-founders. One mission. Powering life and protecting nature across the country since 2008."
            align="left"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {LEADERSHIP.map((m) => (
              <MemberCard key={m.name} m={m} />
            ))}
          </div>
        </div>
      </section>

      {/* Department filter + grid */}
      <section className="section pt-0">
        <div className="container">
          <SectionHeading
            eyebrow="Leadership Team"
            eyebrowIcon={<Users className="h-3.5 w-3.5" />}
            title={
              <>
                The people powering <span className="text-gradient-eco">WES GAS</span>.
              </>
            }
            description="From cylinder logistics to solar engineering to climate finance — meet the leaders behind every household we serve."
            align="left"
          />

          <div className="mt-8 flex flex-wrap items-center gap-2">
            {departments.map((d) => (
              <button
                key={d}
                onClick={() => setFilter(d)}
                className={cn(
                  "inline-flex items-center rounded-full border px-4 py-1.5 text-xs font-medium transition-colors",
                  filter === d
                    ? "border-wes-600 bg-wes-600 text-white"
                    : "border-border bg-card text-muted-foreground hover:text-foreground"
                )}
              >
                {d}
              </button>
            ))}
            <span className="ml-auto text-xs text-muted-foreground">
              {filtered.length} {filtered.length === 1 ? "person" : "people"}
            </span>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((m) => (
              <MemberCard key={m.name} m={m} />
            ))}
          </div>
        </div>
      </section>

      {/* Join us */}
      <section className="section pt-0">
        <div className="container">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-wes-600 to-wes-700 p-10 md:p-14 text-white">
            <div className="relative z-10 max-w-2xl">
              <Badge className="border-white/20 bg-white/10 text-white">We&rsquo;re hiring</Badge>
              <h3 className="mt-4 font-display text-3xl md:text-4xl font-semibold">
                Join a team rewriting Africa&rsquo;s clean-energy story.
              </h3>
              <p className="mt-4 text-white/85">
                Engineers, field agents, climate-finance specialists and community organisers — we want to hear from you.
              </p>
              <a
                href="mailto:careers@wanaenergy.com"
                className="mt-6 inline-flex h-11 items-center rounded-full bg-[#F6E91A] px-6 text-sm font-bold text-zinc-900 hover:brightness-95 transition"
              >
                See open roles →
              </a>
            </div>
            <div className="pointer-events-none absolute -right-10 -bottom-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          </div>
        </div>
      </section>
    </>
  );
}
