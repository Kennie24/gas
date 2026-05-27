"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import SkyToggle from "@/components/ui/sky-toggle";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <SkyToggle
      className={className}
      checked={isDark}
      onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
      aria-label="Toggle dark and light mode"
    />
  );
}
