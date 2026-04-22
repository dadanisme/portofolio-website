"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function NavLink({ href, children, className }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={cn(
        "eyebrow relative inline-flex items-center gap-2 transition-colors",
        isActive
          ? "text-foreground"
          : "text-muted-foreground hover:text-foreground",
        className
      )}
    >
      <span
        aria-hidden
        className={cn(
          "inline-block h-px w-4 bg-current transition-[width] duration-300",
          isActive ? "w-4" : "w-0 group-hover:w-4"
        )}
      />
      <span className="link-slide">{children}</span>
    </Link>
  );
}
