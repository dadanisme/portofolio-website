import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getProjectBySlug, getProjectSlugs } from "@/lib/content";
import { extractTOC } from "@/lib/toc";
import { TableOfContents } from "@/components/shared/table-of-contents";
import { CoverImage } from "@/components/shared/cover-image";
import { Badge } from "@/components/ui/badge";
import { mdxComponents } from "@/lib/mdx-config";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  const ogImage = project.frontmatter.image || "/og.png";

  return {
    title: `${project.frontmatter.title} | Muhammad Ramdan`,
    description: project.frontmatter.description,
    openGraph: {
      title: project.frontmatter.title,
      description: project.frontmatter.description,
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: project.frontmatter.title,
      description: project.frontmatter.description,
      images: [ogImage],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const tocItems = extractTOC(project.content);

  return (
    <main className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="flex gap-12">
          <article className="flex-1 min-w-0 max-w-3xl">
            <header className="mb-12 space-y-4">
              <h1 className="text-4xl font-bold tracking-tight">
                {project.frontmatter.title}
              </h1>
              <p className="text-xl text-muted-foreground">
                {project.frontmatter.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.frontmatter.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              {project.frontmatter.image && (
                <CoverImage
                  src={project.frontmatter.image}
                  alt={project.frontmatter.title}
                  priority
                />
              )}
              <p className="text-sm text-muted-foreground">
                Published{" "}
                {new Date(project.frontmatter.publishedAt).toLocaleDateString(
                  "en-US",
                  {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }
                )}
              </p>
            </header>

            <div className="prose-custom">
              <MDXRemote source={project.content} components={mdxComponents} />
            </div>
          </article>

          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24">
              <TableOfContents items={tocItems} />
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
