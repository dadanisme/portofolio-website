import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Project, ProjectFrontmatter } from "@/types/content";

const projectsDirectory = path.join(process.cwd(), "src/content/projects");

export function getProjectSlugs(): string[] {
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }
  return fs
    .readdirSync(projectsDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getProjectBySlug(slug: string): Project | null {
  const fullPath = path.join(projectsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    frontmatter: data as ProjectFrontmatter,
    content,
  };
}

export function getProjects(): Project[] {
  const slugs = getProjectSlugs();
  const projects = slugs
    .map((slug) => getProjectBySlug(slug))
    .filter((project): project is Project => project !== null)
    .sort((a, b) => {
      const dateA = new Date(a.frontmatter.publishedAt);
      const dateB = new Date(b.frontmatter.publishedAt);
      return dateB.getTime() - dateA.getTime();
    });

  return projects;
}
