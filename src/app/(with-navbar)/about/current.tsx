import { A, B } from "@/components/common/elements";
import Title from "@/components/common/title";
import React from "react";

export default function Current() {
  return (
    <article className="mt-8">
      <Title className="text-secondary">Current Occupations_</Title>

      <ul className="list-disc list-inside mt-2">
        <li className="p">
          <B>React Developer</B> -{" "}
          <A href="https://stockifi.io/" target="_blank" rel="noreferrer">
            Stockifi.io
          </A>
        </li>
        <li className="p">
          <B>Web Developer</B> -{" "}
          <A href="https://www.lskpengantin.id/">LSK Tata Rias Pengantin</A>
        </li>
        <li className="p">
          <B>Organizer</B> -{" "}
          <A
            href="https://www.gemarkode.or.id/"
            target="_blank"
            rel="noreferrer"
          >
            Gemarkode
          </A>
        </li>
      </ul>
    </article>
  );
}
