import { createProject, getProjects } from "@/services";
import Link from "next/link";
import React from "react";
import { SubmitButton } from "./button";

export default async function Project() {
  const projects = await getProjects();

  return (
    <div>
      <div className="flex flex-wrap gap-2 justify-center mt-20">
        {projects.map((project: any) => (
          <Link
            className="btn btn-primary btn-outline glassmorph"
            href={`/project/${project.slug}`}
            key={project.slug}
          >
            {project.title}
          </Link>
        ))}
      </div>

      <div className="flex items-center justify-center mt-20">
        <form action={createProject} method="post">
          <SubmitButton className="btn btn-error btn-outline glassmorph" />
        </form>
      </div>
    </div>
  );
}
