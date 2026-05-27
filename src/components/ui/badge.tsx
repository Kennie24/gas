import * as React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  icon?: React.ReactNode;
}

export function Badge({ className, icon, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-wes-500/30",
        "bg-wes-500/5 dark:bg-wes-500/10 px-3 py-1 text-xs font-medium",
        "text-wes-700 dark:text-wes-300 backdrop-blur",
        className
      )}
      {...props}
    >
      {icon ? <span className="text-wes-500">{icon}</span> : null}
      {children}
    </span>
  );
}
