import type { Metadata } from "next";
import { getProjects } from "@/lib/content";
import { ProjectCard } from "@/components/shared/project-card";

export const metadata: Metadata = {
  title: "Projects | Muhammad Ramdan",
  description: "Selected projects and experiments by Muhammad Ramdan",
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <section className="grid grid-cols-12 gap-x-6 gap-y-10 pt-16 pb-24 md:pt-24">
          <div className="col-span-12 flex items-center justify-between">
            <span className="eyebrow">Projects</span>
            <span className="eyebrow text-muted-foreground">
              {projects.length.toString().padStart(2, "0")} entries
            </span>
          </div>

          <hr className="col-span-12 rule animate-rule" />

          <div className="col-span-12 md:col-span-10 md:col-start-2">
            <h1 className="display-serif text-[clamp(3.5rem,13vw,10rem)]">
              <span className="block animate-rise">Selected</span>
              <span className="block pl-[6%] animate-rise delay-200">
                <span className="text-accent">/</span>projects
                <span className="text-accent">/</span>
              </span>
            </h1>
          </div>

          <div className="col-span-12 grid grid-cols-12 gap-x-6">
            <p className="col-span-12 md:col-span-7 md:col-start-6 font-serif text-xl leading-[1.45] text-foreground md:text-[1.5rem] md:leading-[1.3] animate-rise delay-300">
              A working archive of things I&apos;ve built — products,
              experiments, and the occasional indulgence. Read them in any
              order.
            </p>
          </div>

          <hr className="col-span-12 rule animate-rule delay-400" />

          {projects.length === 0 ? (
            <p className="col-span-12 font-serif italic text-muted-foreground">
              No entries yet. Check back soon.
            </p>
          ) : (
            <ol className="col-span-12">
              {projects.map((project, i) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  index={i}
                />
              ))}
            </ol>
          )}
        </section>
      </div>
    </main>
  );
}
