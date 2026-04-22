import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Project } from "@/types/content";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { slug, frontmatter } = project;
  const year = new Date(frontmatter.publishedAt).getFullYear();

  return (
    <Link href={`/projects/${slug}`} className="group block">
      <article className="grid grid-cols-12 gap-x-6 gap-y-4 border-t border-border py-10 transition-colors first:border-t-0 hover:[&_h2]:text-accent">
        <div className="col-span-12 flex items-baseline gap-4 md:col-span-2">
          <span className="meta text-muted-foreground">
            {typeof index === "number"
              ? (index + 1).toString().padStart(2, "0")
              : "—"}
          </span>
          <span className="meta text-muted-foreground">{year}</span>
        </div>

        <div className="col-span-12 space-y-4 md:col-span-7">
          <h2 className="display-serif not-italic text-3xl transition-colors md:text-5xl">
            <span className="link-slide">{frontmatter.title}</span>
          </h2>
          <p className="font-serif text-lg italic leading-snug text-foreground/85 md:text-xl">
            {frontmatter.description}
          </p>
          <div className="flex flex-wrap items-baseline gap-2 pt-1">
            {frontmatter.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {frontmatter.image && (
          <div className="col-span-12 md:col-span-3">
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-border">
              <Image
                src={frontmatter.image}
                alt={frontmatter.title}
                fill
                sizes="(min-width: 768px) 25vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </div>
          </div>
        )}
      </article>
    </Link>
  );
}
