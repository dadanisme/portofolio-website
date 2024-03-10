import clsx from "clsx";
import React from "react";
import LinkedIn from "./linkedin";
import GitHub from "./github";
import Instagram from "./instagram";
import YouTube from "./youtube";

export default function Highlight() {
  return (
    <section className="w-full xl:w-3/5 grid grid-cols-2 sm:grid-cols-4 auto-rows-[10rem] gap-4 lg:gap-8">
      <Item className="highlight-info col-span-2 overflow-y-hidden">
        <LinkedIn />
      </Item>
      <Item className="highlight-neutral-content">
        <GitHub />
      </Item>
      <Item className="highlight-secondary">
        <Instagram />
      </Item>
      <Item className="p-4 highlight-primary col-span-2 row-span-2">
        Top Project
      </Item>
      <Item className="highlight-error col-span-2">
        <YouTube />
      </Item>
      <Item className="p-4 highlight-warning col-span-2 row-span-2">
        Skripsi
      </Item>
      <Item className="p-4 highlight-success col-span-2">Tech Stack</Item>
    </section>
  );
}

function Item(
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
) {
  return (
    <div
      {...props}
      className={clsx(
        "glassmorph border border-opacity-20 border-solid hover:border-opacity-100",
        "rounded-xl shadow-md",
        "transition-all duration-300 ease-in-out hover:scale-[1.02]",

        props.className
      )}
    >
      {props.children}
    </div>
  );
}
