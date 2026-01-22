"use client";

import { Mail, LinkedinIcon } from "lucide-react";
import { NavLink } from "./nav-link";
import { navLinks } from "@/lib/constants/navigation";
import { contactInfo } from "@/lib/constants/contact";

export function Navigation() {
  return (
    <nav className="border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center sm:justify-between">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden sm:flex items-center gap-4 text-sm text-muted-foreground">
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">{contactInfo.email}</span>
            </a>
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <LinkedinIcon className="h-4 w-4" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
