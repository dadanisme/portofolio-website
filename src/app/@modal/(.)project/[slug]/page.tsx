import React from "react";
import ProjectModal from "./modal";
import { IoIosConstruct } from "react-icons/io";

export default function ProjectSlugIntercept({ params }: ParamsProps) {
  return (
    <ProjectModal className="flex items-center justify-center h-full">
      <div className="text-center relative z-10 flex flex-col items-center">
        <IoIosConstruct className="text-9xl text-secondary" />
        <h1 className="text-4xl text-secondary font-bold">307</h1>
        <p className="text-lg">Under Construction</p>
      </div>
    </ProjectModal>
  );
}
