"use client";

import React from "react";
import { HTMLMotionProps, Variants, motion } from "framer-motion";

type Props = HTMLMotionProps<"div"> & { delay?: number; once?: boolean };

export default function Zooming(props: Props) {
  const variants: Variants = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: props.delay ?? 0, type: "spring", duration: 0.5 },
    },
    hidden: { opacity: 0, scale: 0 },
  };
  return (
    <motion.div
      {...props}
      initial="hidden"
      whileInView="visible"
      animate={props.once ? "visible" : undefined}
      variants={variants}
    >
      {props.children}
    </motion.div>
  );
}
