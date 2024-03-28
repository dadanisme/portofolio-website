import clsx from "clsx";
import React from "react";

export default function Title(
  props: React.AnchorHTMLAttributes<HTMLAnchorElement>
) {
  const id = props.children?.toString().toLowerCase().replace(/\s/g, "-");
  return (
    <div id={id} className="border-b-[0.5px] border-b-neutral-content/20 pb-2">
      <a
        {...props}
        href={`#${id}`}
        className={clsx("h4 font-bold", props.className)}
      >
        # {props.children}
      </a>
    </div>
  );
}
