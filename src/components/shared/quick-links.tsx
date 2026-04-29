import {
  AppWindow,
  ArrowUpRight,
  ExternalLink,
  FileText,
  Github,
  Globe,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import type { ProjectLink } from "@/types/content";

function getIcon(link: ProjectLink): LucideIcon {
  const text = `${link.label} ${link.url}`.toLowerCase();
  if (text.includes("github") || text.includes("gitlab")) return Github;
  if (
    text.includes("app store") ||
    text.includes("apps.apple") ||
    text.includes("testflight")
  )
    return AppWindow;
  if (text.includes("play.google") || text.includes("play store"))
    return Smartphone;
  if (text.includes("docs") || text.includes("paper") || text.includes("blog"))
    return FileText;
  if (
    text.includes("demo") ||
    text.includes("website") ||
    text.includes("live") ||
    text.includes("site")
  )
    return Globe;
  return ExternalLink;
}

export function QuickLinks({ links }: { links: ProjectLink[] }) {
  if (links.length === 0) return null;

  return (
    <nav className="space-y-4">
      <p className="eyebrow text-muted-foreground">Quick Links</p>
      <ul className="space-y-2">
        {links.map((link) => {
          const Icon = getIcon(link);
          return (
            <li key={link.url}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group meta inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Icon className="h-3.5 w-3.5 text-accent" aria-hidden />
                <span>{link.label}</span>
                <ArrowUpRight
                  className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden
                />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
