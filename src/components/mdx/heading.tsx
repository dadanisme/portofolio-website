"use client";

import { Link as LinkIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { createElement } from "react";

interface HeadingProps {
  level: 1 | 2 | 3;
  children: React.ReactNode;
  className?: string;
}

function generateId(children: React.ReactNode): string {
  const text = typeof children === "string" ? children : "";
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function Heading({ level, children, className }: HeadingProps) {
  const id = generateId(children);

  const baseStyles = "group relative scroll-mt-20";
  const levelStyles = {
    1: "text-3xl font-bold tracking-tight",
    2: "text-2xl font-semibold tracking-tight mt-10 mb-4",
    3: "text-xl font-semibold mt-8 mb-3",
  };

  return createElement(
    `h${level}`,
    { id, className: cn(baseStyles, levelStyles[level], className) },
    <>
      {children}
      <a
        href={`#${id}`}
        className="absolute -left-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-foreground"
        aria-label={`Link to ${children}`}
      >
        <LinkIcon className="h-4 w-4" />
      </a>
    </>
  );
}

export function H1({ children }: { children: React.ReactNode }) {
  return <Heading level={1}>{children}</Heading>;
}

export function H2({ children }: { children: React.ReactNode }) {
  return <Heading level={2}>{children}</Heading>;
}

export function H3({ children }: { children: React.ReactNode }) {
  return <Heading level={3}>{children}</Heading>;
}
