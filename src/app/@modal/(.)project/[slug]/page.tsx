import React from "react";
import ProjectModal from "./modal";

export default function ProjectSlugIntercept({ params }: ParamsProps) {
  return (
    <ProjectModal>project intercept page with slug: {params.slug}</ProjectModal>
  );
}
