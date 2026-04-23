"use client";

import Link from "next/link";
import { Mail, LinkedinIcon } from "lucide-react";
import { NavLink } from "./nav-link";
import { LogoMark } from "./logo-mark";
import { navLinks } from "@/lib/constants/navigation";
import { contactInfo } from "@/lib/constants/contact";

export function Navigation() {
  return (
    <nav className="sticky top-0 z-20 border-b border-foreground bg-background/85 backdrop-blur-sm">
      <div className="mx-auto grid max-w-[1400px] grid-cols-[1fr_auto_1fr] items-center gap-6 px-6 py-4 md:px-10">
        <Link
          href="/"
          className="eyebrow hidden items-center gap-3 text-foreground md:inline-flex"
        >
          <LogoMark className="h-5 w-5" />
          <span>Portfolio · 2026</span>
        </Link>

        <div className="col-span-3 flex items-center justify-center gap-8 md:col-span-1">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center justify-end gap-5 md:flex">
          <a
            href={`mailto:${contactInfo.email}`}
            className="eyebrow link-slide text-muted-foreground transition-colors hover:text-foreground"
          >
            <Mail className="mr-1.5 inline h-3 w-3" />
            Email
          </a>
          <a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="eyebrow link-slide text-muted-foreground transition-colors hover:text-foreground"
          >
            <LinkedinIcon className="mr-1.5 inline h-3 w-3" />
            LinkedIn
          </a>
        </div>
      </div>
    </nav>
  );
}
