import React from "react";
import Overview from "./overview";
import Current from "./current";
import Links from "./links";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Muhammad Ramdan",
  description:
    "Get to know me better, my background, and my current activities.",
};

export default function About() {
  return (
    <>
      <Overview />
      <Current />
      <Links />
    </>
  );
}
