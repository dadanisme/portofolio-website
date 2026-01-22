import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Project } from "@/types/content";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { slug, frontmatter } = project;

  return (
    <Link href={`/projects/${slug}`} className="block group">
      <article className="border border-border p-6 transition-colors hover:bg-muted/50">
        <div className="space-y-3">
          <h2 className="text-xl font-semibold group-hover:text-muted-foreground transition-colors">
            {frontmatter.title}
          </h2>
          <p className="text-muted-foreground line-clamp-2">
            {frontmatter.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {frontmatter.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            {new Date(frontmatter.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </article>
    </Link>
  );
}
