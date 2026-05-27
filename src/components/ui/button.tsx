"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "btn-magnetic group/btn relative overflow-hidden whitespace-nowrap",
  {
    variants: {
      variant: {
        primary:
          "bg-[#F6E91A] text-zinc-900 hover:bg-[#ede213] shadow-[0_8px_32px_-8px_rgba(246,233,26,0.5)] hover:shadow-[0_20px_60px_-10px_rgba(246,233,26,0.6)] active:scale-[0.98]",
        gradient:
          "text-zinc-900 bg-[#F6E91A] hover:bg-[#ede213] shadow-[0_8px_32px_-8px_rgba(246,233,26,0.5)] active:scale-[0.98]",
        ghost:
          "bg-transparent text-foreground hover:bg-wes-500/10 hover:text-wes-600 dark:hover:text-wes-400",
        glass:
          "glass text-foreground hover:bg-white/80 dark:hover:bg-white/[0.08]",
        outline:
          "border border-wes-500/40 text-foreground hover:border-wes-500 hover:bg-wes-500/5",
        link: "text-wes-600 dark:text-wes-400 underline-offset-4 hover:underline px-0",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-sm",
        lg: "h-14 px-8 text-base",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(
          buttonVariants({ variant, size }),
          "after:pointer-events-none after:absolute after:inset-0 after:-translate-x-full after:bg-gradient-to-r after:from-transparent after:via-white/20 after:to-transparent after:transition-transform after:duration-700 after:ease-out hover:after:translate-x-full",
          className
        )}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { buttonVariants };
