import { A } from "@/components/common/elements";
import Title from "@/components/common/title";
import React from "react";

interface Link {
  text: string;
  href: string;
}

const socials: Link[] = [
  {
    text: "LinkedIn",
    href: "https://www.linkedin.com/in/dadanisme",
  },
  {
    text: "GitHub",
    href: "https://github.com/dadanisme",
  },
  {
    text: "YouTube",
    href: "https://www.youtube.com/channel/UC0T7x4I2c7oAn0N4oZGVXdQ",
  },
];

const certificates: Link[] = [
  {
    text: "React Native - The Practical Guide. Udemy",
    href: "https://ude.my/UC-d78facd9-769d-4f26-af96-70df709ae882",
  },
  {
    text: "React - The Complete Guide. Udemy",
    href: "https://ude.my/UC-380c561b-0d96-4d9a-ada4-2b2da8167876",
  },
  {
    text: "Problem Solving (Basic). HackerRank",
    href: "https://www.hackerrank.com/certificates/5757e03b5acc",
  },
  {
    text: "Statistics for Business Analytics and Data Science A-Z. Udemy",
    href: "https://ude.my/UC-cbc%207579c-4925-405e-8976-ef58897fe416",
  },
  {
    text: "Digital Marketing Fundamentals. Udemy",
    href: "https://ude.my/UC-15043159-993f-44a6-a954-769e371b8202",
  },
  {
    text: "Mastering Collaboration: Work together for the best results. Udemy",
    href: "https://ude.my/UC-177c2eac-f619-429d-9e3d-e7046e0a8alf",
  },
  {
    text: "Think Strategically and Make Your Ideas a Reality. Udemy",
    href: "https://ude.my/UC-b01daa3c-5c8c-48e2-b900-39c61580ae88",
  },
  {
    text: "Complete Agile Scrum Management. Udemy",
    href: "https://ude.my/UC-7e597d23-e813-4205-8df3-606f88e2d260",
  },
  {
    text: "Front End Development Libraries. freeCodeCamp",
    href: "https://freecodecamp.org/certification/dadanisme/front-end-development-libraries",
  },
  {
    text: "JavaScript Algorithms and Data Structures. freeCodeCamp",
    href: "https://freecodecamp.org/certification/dadanisme/javascript-algorithms-and-data-structures",
  },
  {
    text: "Responsive Web Design. freeCodeCamp",
    href: "https://freecodecamp.org/certification/dadanisme/responsive-web-design",
  },
  {
    text: "Belajar Membuat Aplikasi Web dengan React. Dicoding",
    href: "https://www.dicoding.com/certificates/2VX31977NZYQ",
  },
  {
    text: "Belajar Membuat Front-End Web untuk Pemula. Dicoding",
    href: "https://www.dicoding.com/certificates/EYX42VN9JZDL",
  },
  {
    text: "Belajar Dasar Pemrograman JavaScript. Dicoding",
    href: "https://www.dicoding.com/certificates/EYX42VN9JZDL",
  },
  {
    text: "Belajar Dasar Visualisasi Data. Dicoding",
    href: "https://www.dicoding.com/certificates/6RPND121QZ2M",
  },
  {
    text: "Belajar Machine Learning untuk Pemula. Dicoding",
    href: "https://www.dicoding.com/certificates/L4PQ42MJOXO1",
  },
  {
    text: "Memulai Pemrograman Dengan Python. Dicoding",
    href: "https://www.dicoding.com/certificates/NVP7K545WZR0",
  },
  {
    text: "Belajar Dasar Pemrograman Web. Dicoding",
    href: "https://www.dicoding.com/certificates/4EXG5Q2W9XRL",
  },
];

export default function Links() {
  return (
    <article className="mt-8">
      <Title className="text-secondary">Quick Links_</Title>

      <h3 className="h5 mt-4 text-secondary font-bold">Socials</h3>
      <ul className="list-disc ml-3 mt-2">
        {socials.map((link) => (
          <li className="p" key={link.href}>
            <A href={link.href} target="_blank" rel="noreferrer">
              {link.text}
            </A>
          </li>
        ))}
      </ul>

      <h3 className="h5 mt-4 text-secondary font-bold">Certificates</h3>
      <ul className="list-disc ml-3 mt-2">
        {certificates.map((link) => (
          <li className="p" key={link.href}>
            <A href={link.href} target="_blank" rel="noreferrer">
              {link.text}
            </A>
          </li>
        ))}
      </ul>
    </article>
  );
}
