import { createProject, getProjects } from "@/services";
import Link from "next/link";
import React from "react";
import { SubmitButton } from "./button";
import Zooming from "@/components/zooming";

export default async function Project() {
  const projects = await getProjects();

  const tick = 2 / projects.length;

  return (
    <div>
      <div className="flex flex-wrap gap-2 justify-center mt-20">
        {projects.map((project: any, i: number) => (
          <Zooming key={project.slug} delay={i * tick} once>
            <Link
              className="btn btn-primary btn-outline glassmorph"
              href={`/project/${project.slug}`}
            >
              {project.title}
            </Link>
          </Zooming>
        ))}
      </div>

      <div className="flex items-center justify-center mt-20">
        <Zooming once>
          <form action={createProject} method="post">
            <SubmitButton className="btn btn-error btn-outline glassmorph" />
          </form>
        </Zooming>
      </div>
    </div>
  );
}
