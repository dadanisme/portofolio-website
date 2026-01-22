import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export function Hero() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Muhammad Ramdan</h1>
        <p className="text-xl text-muted-foreground">Software Engineer</p>
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
