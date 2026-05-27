"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
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
              ? "glass-strong h-14 shadow-lg"
              : "h-16 bg-black/30 backdrop-blur-md border-y border-white/10"
          )}
        >
          {/* desktop links */}
          <ul className="hidden md:flex items-center justify-center gap-0.5 lg:gap-1">
            {NAV_LINKS.map((l) => {
              const active = pathname === l.href || (l.href !== "/" && pathname?.startsWith(l.href));
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={cn(
                      "group relative inline-flex h-9 items-center rounded-full px-2.5 lg:px-4 text-xs lg:text-sm font-medium transition-colors",
                      scrolled
                        ? active ? "text-wes-600 dark:text-wes-400" : "text-muted-foreground hover:text-foreground"
                        : active ? "text-white" : "text-white/75 hover:text-white"
                    )}
                  >
                    <span className="relative z-10">{l.label}</span>
                    <span
                      className={cn(
                        "absolute inset-0 -z-0 rounded-full bg-wes-500/10 transition-all duration-300",
                        active
                          ? "scale-100 opacity-100"
                          : "scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100"
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
              className={cn("grid h-10 w-10 place-items-center rounded-full border backdrop-blur", scrolled ? "border-border bg-background/50" : "border-white/20 bg-white/10 text-white")}
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
                  const active = pathname === l.href || (l.href !== "/" && pathname?.startsWith(l.href));
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
