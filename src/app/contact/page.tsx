import type { Metadata } from "next";
import { Mail, LinkedinIcon, Github, Instagram, MapPin } from "lucide-react";
import { contactInfo } from "@/lib/constants/contact";

export const metadata: Metadata = {
  title: "Contact | Muhammad Ramdan",
  description: "Get in touch with Muhammad Ramdan",
};

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
    description: "Send me a message",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/dadanisme",
    href: contactInfo.linkedin,
    description: "Connect with me",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/dadanisme",
    href: contactInfo.github,
    description: "Check out my code",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@dadanisme",
    href: contactInfo.instagram,
    description: "Follow my journey",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl space-y-8">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight">Contact</h1>
            <p className="text-xl text-muted-foreground">Get in touch</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={
                  link.href.startsWith("mailto")
                    ? undefined
                    : "noopener noreferrer"
                }
                className="group border border-border p-6 transition-colors hover:bg-muted/50"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 border border-border group-hover:border-foreground/20 transition-colors">
                    <link.icon className="h-6 w-6 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold group-hover:text-muted-foreground transition-colors">
                      {link.label}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {link.description}
                    </p>
                    <p className="text-sm text-muted-foreground font-mono">
                      {link.value}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="border border-border p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 border border-border">
                <MapPin className="h-6 w-6 text-muted-foreground" />
              </div>
              <div className="space-y-1">
                <p className="font-semibold">Location</p>
                <p className="text-sm text-muted-foreground">
                  Based in {contactInfo.location}
                </p>
                <p className="text-sm text-muted-foreground">
                  Open to remote work worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
