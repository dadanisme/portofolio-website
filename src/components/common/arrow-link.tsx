import clsx from "clsx";
import Link, { LinkProps } from "next/link";
import React from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";

type Props = LinkProps & React.ComponentPropsWithoutRef<"a">;

export default function ArrowLink(props: Props) {
  return (
    <Link
      {...props}
      className={clsx(
        "block text-center xl:text-left text-primary font-bold hover:underline",
        props.className
      )}
    >
      {props.children} <MdOutlineArrowRightAlt className="inline" />
    </Link>
  );
}
