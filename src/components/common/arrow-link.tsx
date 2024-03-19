import clsx from "clsx";
import Link, { LinkProps } from "next/link";
import React from "react";
import { MdOutlineArrowBack, MdOutlineArrowForward } from "react-icons/md";

type Props = LinkProps &
  React.ComponentPropsWithoutRef<"a"> & {
    reverse?: boolean;
  };

export default function ArrowLink({ reverse, ...props }: Props) {
  return (
    <Link
      {...props}
      className={clsx(
        "text-center xl:text-left text-primary font-bold hover:underline",
        "flex items-center justify-center xl:justify-start gap-2",
        reverse && "flex-row-reverse",
        props.className
      )}
    >
      {props.children}
      {reverse ? <MdOutlineArrowBack /> : <MdOutlineArrowForward />}
    </Link>
  );
}
