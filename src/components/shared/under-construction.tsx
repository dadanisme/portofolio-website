"use client";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Wrench, Sparkles, Clock } from "lucide-react";

export function UnderConstruction() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-16">
      <div className="w-full max-w-lg space-y-6 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 animate-icon-in">
          <Wrench className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-3xl font-bold animate-title-in">
          Under Construction
        </h1>
        <p className="text-base text-muted-foreground animate-description-in">
          We&apos;re building something amazing
        </p>
        <div className="flex items-center justify-center gap-2 animate-badge-in">
          <Badge variant="secondary" className="animate-pulse">
            <Sparkles className="mr-1 h-3 w-3" />
            Coming Soon
          </Badge>
        </div>
        <Separator className="animate-separator-in" />
        <div className="space-y-3">
          <p className="text-muted-foreground text-sm leading-relaxed animate-text-in">
            Our website is currently under construction. We&apos;re working hard
            to bring you an incredible experience.
          </p>
          <div className="flex items-center justify-center gap-2 text-muted-foreground text-xs animate-footer-in">
            <Clock className="h-4 w-4" />
            <span>Check back soon!</span>
          </div>
        </div>
      </div>
    </div>
  );
}
