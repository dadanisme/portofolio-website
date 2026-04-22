import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center gap-1.5 border px-2.5 py-1 eyebrow whitespace-nowrap shrink-0 [&>svg]:size-3 [&>svg]:pointer-events-none transition-colors",
  {
    variants: {
      variant: {
        default:
          "border-foreground bg-foreground text-background [a&]:hover:bg-accent [a&]:hover:border-accent",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-muted",
        destructive:
          "border-destructive bg-destructive text-destructive-foreground",
        outline:
          "border-foreground/60 text-foreground [a&]:hover:border-accent [a&]:hover:text-accent",
      },
    },
    defaultVariants: {
      variant: "outline",
    },
  }
);

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
