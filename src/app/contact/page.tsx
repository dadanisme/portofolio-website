import type { Metadata } from "next";
import { contactInfo } from "@/lib/constants/contact";

export const metadata: Metadata = {
  title: "Contact | Muhammad Ramdan",
  description: "Get in touch with Muhammad Ramdan",
};

const contactLinks = [
  {
    label: "Email",
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
    note: "Correspondence",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/dadanisme",
    href: contactInfo.linkedin,
    note: "Professional",
  },
  {
    label: "GitHub",
    value: "github.com/dadanisme",
    href: contactInfo.github,
    note: "Practice",
  },
  {
    label: "Instagram",
    value: "@dadanis.me",
    href: contactInfo.instagram,
    note: "Incidental",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <section className="grid grid-cols-12 gap-x-6 gap-y-10 pt-16 pb-24 md:pt-24">
          <div className="col-span-12 flex items-center justify-between">
            <span className="eyebrow">Contact</span>
            <span className="eyebrow text-muted-foreground">
              {contactInfo.location}
            </span>
          </div>

          <hr className="col-span-12 rule animate-rule" />

          <div className="col-span-12 md:col-span-10 md:col-start-2">
            <h1 className="display-serif text-[clamp(3.5rem,13vw,10rem)]">
              <span className="block animate-rise">Get in</span>
              <span className="block pl-[6%] animate-rise delay-200">
                <span className="text-accent">/</span>touch
                <span className="text-accent">/</span>
              </span>
            </h1>
          </div>

          <div className="col-span-12 grid grid-cols-12 gap-x-6">
            <p className="col-span-12 md:col-span-7 md:col-start-6 font-serif text-xl leading-[1.45] text-foreground md:text-[1.5rem] md:leading-[1.3] animate-rise delay-300">
              Consulting, collaborations, mentorship, or a coffee when you pass
              through Bandung — I read every note.
            </p>
          </div>

          <hr className="col-span-12 rule animate-rule delay-400" />

          <ol className="col-span-12 divide-y divide-border">
            {contactLinks.map((link, i) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={
                    link.href.startsWith("mailto")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="group grid grid-cols-12 items-baseline gap-x-6 gap-y-2 py-8 transition-colors hover:text-accent"
                >
                  <span className="folio col-span-2 md:col-span-1">
                    {(i + 1).toString().padStart(2, "0")}
                  </span>
                  <span className="eyebrow col-span-10 md:col-span-2 text-muted-foreground group-hover:text-foreground">
                    {link.note}
                  </span>
                  <h2 className="display-serif col-span-12 md:col-span-6 not-italic text-3xl md:text-5xl">
                    <span className="link-slide italic">{link.label}</span>
                  </h2>
                  <span className="meta col-span-12 md:col-span-3 md:text-right text-muted-foreground group-hover:text-accent">
                    {link.value} <span aria-hidden>→</span>
                  </span>
                </a>
              </li>
            ))}
          </ol>

          <div className="col-span-12 grid grid-cols-12 gap-x-6 border-t border-foreground pt-8 mt-8">
            <span className="folio col-span-12 md:col-span-2">Location</span>
            <p className="col-span-12 md:col-span-10 font-serif text-xl italic md:text-2xl">
              Based in {contactInfo.location} · Open to remote work worldwide
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
