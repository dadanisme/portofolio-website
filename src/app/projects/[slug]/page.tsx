import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getProjectBySlug, getProjectSlugs } from "@/lib/content";
import { extractTOC } from "@/lib/toc";
import { TableOfContents } from "@/components/shared/table-of-contents";
import { CoverImage } from "@/components/shared/cover-image";
import { mdxComponents } from "@/lib/mdx-config";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
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
  const year = new Date(project.frontmatter.publishedAt).getFullYear();
  const publishedLabel = new Date(
    project.frontmatter.publishedAt
  ).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <section className="grid grid-cols-12 gap-x-6 gap-y-10 pt-16 pb-24 md:pt-24">
          <div className="col-span-12 flex items-center justify-between">
            <Link href="/projects" className="eyebrow link-slide">
              ← Projects
            </Link>
            <span className="eyebrow text-muted-foreground">{year}</span>
          </div>

          <hr className="col-span-12 rule animate-rule" />

          <div className="col-span-12 md:col-span-10">
            <h1 className="display-serif text-[clamp(2.75rem,9vw,7rem)] not-italic animate-rise">
              {project.frontmatter.title}
            </h1>
          </div>

          <div className="col-span-12 grid grid-cols-12 gap-x-6">
            <p className="col-span-12 md:col-span-7 md:col-start-6 font-serif text-xl italic leading-[1.45] text-foreground md:text-[1.5rem] md:leading-[1.3] animate-rise delay-200">
              {project.frontmatter.description}
            </p>
          </div>

          <div className="col-span-12 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
            <span className="meta text-muted-foreground">
              Published {publishedLabel}
            </span>
            <div className="flex flex-wrap gap-2">
              {project.frontmatter.tags.map((tag) => (
                <span
                  key={tag}
                  className="eyebrow text-muted-foreground before:mr-2 before:text-accent before:content-['/']"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <hr className="col-span-12 rule animate-rule delay-300" />

          {project.frontmatter.image && (
            <div className="col-span-12">
              <CoverImage
                src={project.frontmatter.image}
                alt={project.frontmatter.title}
                priority
              />
            </div>
          )}

          <aside className="col-span-12 lg:col-span-3">
            <div className="sticky top-24">
              <TableOfContents items={tocItems} />
            </div>
          </aside>

          <article className="col-span-12 min-w-0 lg:col-span-8 lg:col-start-5 prose-custom">
            <MDXRemote source={project.content} components={mdxComponents} />
          </article>
        </section>
      </div>
    </main>
  );
}
