import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Mail, Linkedin } from "lucide-react";

export function Hero() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Muhammad Ramdan</h1>
        <p className="text-xl text-muted-foreground">Software Engineer</p>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
        <a
          href="mailto:huntercitation@gmail.com"
          className="flex items-center gap-1.5 hover:text-foreground transition-colors"
        >
          <Mail className="h-4 w-4" />
          huntercitation@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/dadanisme/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 hover:text-foreground transition-colors"
        >
          <Linkedin className="h-4 w-4" />
          LinkedIn
        </a>
      </div>

      <Separator />

      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Overview</h2>
        <p className="text-muted-foreground leading-relaxed">
          A Software Engineer with 5+ years of experience across startups,
          research, and global teams. Skilled in leading engineering teams,
          mentoring peers, and shipping high quality software. Proven track
          record in web and mobile development, AI-driven products, and
          cloud-native solutions. Strong balance of technical depth and
          leadership.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        <Badge variant="secondary">TypeScript</Badge>
        <Badge variant="secondary">React</Badge>
        <Badge variant="secondary">Node.js</Badge>
        <Badge variant="secondary">Python</Badge>
        <Badge variant="secondary">Swift</Badge>
      </div>
    </section>
  );
}
