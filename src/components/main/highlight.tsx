import clsx from "clsx";
import React from "react";
import TopProject from "./top-project";

export default function Highlight() {
  return (
    <section className="w-full xl:w-3/5 flex flex-col md:flex-row gap-8">
      <div className={clsx("", "w-full")}>
        <TopProject />
      </div>
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
        // "glassmorph border border-opacity-20 border-solid hover:border-opacity-100",
        "rounded-xl shadow-md w-full",
        "transition-all duration-300 ease-in-out hover:scale-[1.02]",

        props.className
      )}
    >
      {props.children}
    </div>
  );
}
