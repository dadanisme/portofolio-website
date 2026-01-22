import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { hero } from "@/content/homepage";

export function Hero() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">{hero.name}</h1>
        <p className="text-xl text-muted-foreground">{hero.title}</p>
      </div>

      <Separator />

      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Overview</h2>
        <p className="text-muted-foreground leading-relaxed">{hero.overview}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {hero.primarySkills.map((skill) => (
          <Badge key={skill} variant="secondary">
            {skill}
          </Badge>
        ))}
      </div>
    </section>
  );
}
