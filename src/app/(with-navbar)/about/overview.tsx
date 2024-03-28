import { A, B } from "@/components/common/elements";
import React from "react";

export default function Overview() {
  return (
    <article className="text-justify">
      <p className="p">
        Hi, I am Muhammad Ramdan. Also known as <B>Ramdan</B>.
      </p>

      <p className="p mt-4">
        I am a <B>React Developer</B> at{" "}
        <A href="https://stockifi.io/" target="_blank" rel="noreferrer">
          <B>Stockifi.io</B>
        </A>
        , a company in Oslo, Norway. I am passionate about{" "}
        <B>Web Development</B> and <B>AI Engineering</B>. I have been working as
        a software engineer since 2020. Back then, I was a working with jQuery,
        PHP, and MySQL. In 2022, I started learning Machine Learning and AI.
        Until now, I have been working in more than <B>30 projects</B>, and
        serving more than <B>10 clients</B>.
      </p>

      <p className="p mt-4">
        I also organize{" "}
        <A href="https://www.gemarkode.or.id/" target="_blank" rel="noreferrer">
          <B>Gemarkode</B>
        </A>
        , a community that focuses on technology and entrepreneurship. We do
        webinars regularly, and we have more than <B>500 members</B> in our
        WhatsApp Community. Check out our{" "}
        <A
          href="https://www.linkedin.com/company/gemarkode/"
          target="_blank"
          rel="noreferrer"
        >
          <B>LinkedIn</B>
        </A>{" "}
        for more information.
      </p>
    </article>
  );
}
