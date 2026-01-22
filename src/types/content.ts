export interface ProjectFrontmatter {
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  tags: string[];
  featured?: boolean;
  image?: string;
}

export interface Project {
  slug: string;
  frontmatter: ProjectFrontmatter;
  content: string;
}

export interface TOCItem {
  id: string;
  title: string;
  level: 2 | 3;
}
