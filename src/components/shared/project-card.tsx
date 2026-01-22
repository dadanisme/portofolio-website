import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Project } from "@/types/content";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { slug, frontmatter } = project;

  return (
    <Link href={`/projects/${slug}`} className="block group">
      <article className="border border-border transition-colors hover:bg-muted/50 overflow-hidden">
        {frontmatter.image && (
          <div className="relative w-full overflow-hidden">
            <Image
              src={frontmatter.image}
              alt={frontmatter.title}
              width={600}
              height={315}
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}
        <div className="p-6 space-y-3">
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
