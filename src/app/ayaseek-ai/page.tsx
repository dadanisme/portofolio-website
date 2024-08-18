import Background from "@/components/background";
import Link from "next/link";
import React from "react";
import { FaDownload } from "react-icons/fa6";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-svh">
      <Background />
      <div className="text-center relative z-10 flex flex-col items-center">
        <FaDownload className="text-9xl text-secondary" />
        <h1 className="text-4xl text-secondary font-bold">Download</h1>
        <p className="text-lg">ayaseek-ai-preview.apk</p>
        <a
          href="https://expo.dev/artifacts/eas/YAznyqcMskNApxZ9iFPUR.apk"
          download="ayaseek-ai.apk"
          target="_blank"
          className="mt-4 btn btn-secondary btn-sm"
        >
          Download
        </a>
      </div>
    </div>
  );
}
