import type { Metadata } from "next";
import { getProjects } from "@/lib/content";
import { ProjectCard } from "@/components/shared/project-card";

export const metadata: Metadata = {
  title: "Projects | Muhammad Ramdan",
  description: "Featured projects and work by Muhammad Ramdan",
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <main className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="space-y-8">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
            <p className="text-xl text-muted-foreground">
              Featured projects and work
            </p>
          </div>

          {projects.length === 0 ? (
            <p className="text-muted-foreground">
              No projects yet. Check back soon!
            </p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
