"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { WesLogo } from "@/components/ui/wes-logo";
// WesLogo used in mobile drawer header
import { NAV_LINKS, COMPANY } from "@/data/company";
import { Ticker } from "@/components/sections/ticker";
import { TopBar } from "@/components/nav/top-bar";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const aboutActive = pathname === "/about" || pathname?.startsWith("/team") || pathname?.startsWith("/investors") || pathname?.startsWith("/impact");

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500"
      )}
    >
      <Ticker />
      <TopBar />
      <div className="w-full transition-all duration-500">
        <nav
          className={cn(
            "relative flex items-center justify-center gap-4 px-4 md:px-8 transition-all duration-500",
            scrolled
              ? "h-14 border-y border-black/15 bg-[#EBCA30] shadow-lg"
              : "h-16 border-y border-black/15 bg-[#EBCA30]"
          )}
        >
          {/* desktop links */}
          <ul className="hidden md:flex items-center justify-center gap-0.5 lg:gap-1">
            {NAV_LINKS.map((l) => {
              const active = l.href === "/about"
                ? aboutActive
                : pathname === l.href || (l.href !== "/" && pathname?.startsWith(l.href));

              if (l.href === "/about") {
                return (
                  <li key={l.href} className="group relative">
                    <Link
                      href={l.href}
                      className={cn(
                        "group/link relative inline-flex h-9 items-center gap-1 rounded-full px-2.5 text-xs font-medium transition-colors lg:px-4 lg:text-sm",
                        scrolled
                          ? active ? "text-zinc-950" : "text-zinc-900/75 hover:text-zinc-950"
                          : active ? "text-zinc-950" : "text-zinc-900/75 hover:text-zinc-950"
                      )}
                    >
                      <span className="relative z-10">{l.label}</span>
                      <ChevronDown className="relative z-10 h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                      <span
                        className={cn(
                          "absolute inset-0 -z-0 rounded-full bg-wes-500/10 transition-all duration-300",
                          active
                            ? "scale-100 bg-black/10 opacity-100"
                            : "scale-90 bg-black/10 opacity-0 group-hover/link:scale-100 group-hover/link:opacity-100"
                        )}
                      />
                    </Link>

                    <div className="invisible absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 translate-y-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-2 group-hover:opacity-100">
                      <div className="overflow-hidden rounded-sm border border-white/10 bg-background/95 p-2 shadow-2xl shadow-black/20 backdrop-blur-xl dark:bg-ink-950/95">
                        <Link
                          href="/about"
                          className="block rounded-sm px-3 py-2.5 text-sm font-medium text-foreground hover:bg-wes-500/10 hover:text-wes-600 dark:hover:text-wes-400"
                        >
                          About WES GAS
                        </Link>
                        <Link
                          href="/team"
                          className="block rounded-sm px-3 py-2.5 text-sm font-medium text-foreground hover:bg-wes-500/10 hover:text-wes-600 dark:hover:text-wes-400"
                        >
                          Team
                        </Link>
                        <Link
                          href="/impact"
                          className="block rounded-sm px-3 py-2.5 text-sm font-medium text-foreground hover:bg-wes-500/10 hover:text-wes-600 dark:hover:text-wes-400"
                        >
                          Impact
                        </Link>
                        <Link
                          href="/investors"
                          className="block rounded-sm px-3 py-2.5 text-sm font-medium text-foreground hover:bg-wes-500/10 hover:text-wes-600 dark:hover:text-wes-400"
                        >
                          Investors
                        </Link>
                      </div>
                    </div>
                  </li>
                );
              }

              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={cn(
                      "group relative inline-flex h-9 items-center rounded-full px-2.5 lg:px-4 text-xs lg:text-sm font-medium transition-colors",
                      scrolled
                        ? active ? "text-zinc-950" : "text-zinc-900/75 hover:text-zinc-950"
                        : active ? "text-zinc-950" : "text-zinc-900/75 hover:text-zinc-950"
                    )}
                  >
                    <span className="relative z-10">{l.label}</span>
                    <span
                      className={cn(
                        "absolute inset-0 -z-0 rounded-full bg-wes-500/10 transition-all duration-300",
                        active
                          ? "scale-100 bg-black/10 opacity-100"
                          : "scale-90 bg-black/10 opacity-0 group-hover:scale-100 group-hover:opacity-100"
                      )}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="absolute right-4 hidden items-center md:right-6 lg:right-8 md:flex">
            <ThemeToggle />
          </div>

          {/* mobile trigger */}
          <div className="absolute right-4 flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              aria-label="Open menu"
              onClick={() => setOpen((v) => !v)}
              className={cn("grid h-10 w-10 place-items-center rounded-full border backdrop-blur", "border-black/20 bg-black/5 text-zinc-950")}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="container mt-3 md:hidden"
          >
            <div className="glass-strong rounded-2xl p-4">
              <div className="mb-3 flex items-center justify-between border-b border-border pb-3">
                <WesLogo />
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Menu</span>
              </div>
              <ul className="flex flex-col">
                {NAV_LINKS.map((l) => {
                  const active = l.href === "/about"
                    ? aboutActive
                    : pathname === l.href || (l.href !== "/" && pathname?.startsWith(l.href));
                  return (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium hover:bg-wes-500/10",
                          active ? "text-wes-600 dark:text-wes-400 bg-wes-500/10" : "text-foreground"
                        )}
                      >
                        <span>{l.label}</span>
                        <span className="text-wes-500">→</span>
                      </Link>

                      {l.href === "/about" && (
                        <div className="ml-4 mt-1 space-y-1">
                          <Link
                            href="/team"
                            onClick={() => setOpen(false)}
                            className={cn(
                              "flex items-center justify-between rounded-sm px-3 py-2.5 text-sm font-medium hover:bg-wes-500/10",
                              pathname?.startsWith("/team") ? "text-wes-600 dark:text-wes-400 bg-wes-500/10" : "text-muted-foreground"
                            )}
                          >
                            <span>Team</span>
                            <span className="text-wes-500">→</span>
                          </Link>
                          <Link
                            href="/impact"
                            onClick={() => setOpen(false)}
                            className={cn(
                              "flex items-center justify-between rounded-sm px-3 py-2.5 text-sm font-medium hover:bg-wes-500/10",
                              pathname?.startsWith("/impact") ? "text-wes-600 dark:text-wes-400 bg-wes-500/10" : "text-muted-foreground"
                            )}
                          >
                            <span>Impact</span>
                            <span className="text-wes-500">→</span>
                          </Link>
                          <Link
                            href="/investors"
                            onClick={() => setOpen(false)}
                            className={cn(
                              "flex items-center justify-between rounded-sm px-3 py-2.5 text-sm font-medium hover:bg-wes-500/10",
                              pathname?.startsWith("/investors") ? "text-wes-600 dark:text-wes-400 bg-wes-500/10" : "text-muted-foreground"
                            )}
                          >
                            <span>Investors</span>
                            <span className="text-wes-500">→</span>
                          </Link>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>

            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
