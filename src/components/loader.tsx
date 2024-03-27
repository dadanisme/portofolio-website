"use client";
import React from "react";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export default function Loader() {
  return <ProgressBar height="2px" color="#FF52D9" shallowRouting />;
}
