import { B } from "@/components/common/elements";
import { Line, Timeline } from "@/components/common/timeline";
import Title from "@/components/common/title";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Experiences | Muhammad Ramdan",
  description: "My overall experiences in Software Engineering and Softskills.",
};

interface XP {
  period: string;
  title: string;
  company: string;
  description: string;
  logo: string;
  type:
    | "Full-time"
    | "Part-time"
    | "Contract"
    | "Freelance"
    | "Internship"
    | "Apprenticeship"
    | "Volunteer"
    | "Campus Organization"
    | "Community";
}

const workExperiences: XP[] = [
  {
    period: "Jan 2023 - Present",
    title: "React Developer",
    company: "Stockifi.io, Norway",
    description:
      "Managing the company's TypeScript app, optimizing performance, adding features, producing 50+ cloud functions, creating 8 OCR bots, building 25 web scrapers, and collaborating remotely with 20+ developers worldwide.",
    logo: "/stockifi.png",
    type: "Full-time",
  },
  {
    period: "Sep 2021 - Present",
    title: "Web Developer",
    company: "LSK Tata Rias Pengantin",
    description:
      "Creating a website for the company, managing the company's social media, and creating a digital marketing strategy. Bringing the company to be the best LSK in 2021, 2022, and 2023.",
    logo: "/lsk.png",
    type: "Part-time",
  },
  {
    period: "Aug 2022 - Dec 2022",
    title: "Intern Techinal Lead",
    company: "PT Abbauf Mulia Konsultan Teknologi",
    description:
      "Leading a team of 10 developers, creating a WebGIS app. As a part of Magang Bersama Kampus Merdeka (MBKM) batch 3.",
    logo: "/abbauf.png",
    type: "Internship",
  },
  {
    period: "Jul 2022 - Dec 2022",
    title: "Frontend Developer",
    company: "Braga Technologies",
    description:
      "Assigned to 3 WebGIS projects utilizing Mapbox and React, I collaborate in an agile environment with project managers and developers, while also initiating a job-seeking platform with Next.js.",
    logo: "/braga.svg",
    type: "Contract",
  },
  {
    period: "Oct 2021 - Nov 2022",
    title: "Engineer",
    company: "PT Amanah Pratama",
    description:
      "Working on Smart Drone project, creating a drone that can be controlled by with AI, used for telecommunication tower surveillance.",
    logo: "/ap.jpeg",
    type: "Freelance",
  },
  {
    period: "Apr 2021 - Aug 2022",
    title: "Research Assistant",
    company: "Laboratory of Material Science, UPI",
    description:
      "Researching of a new material for solar cell applications, creating automatic watering system for the agriculture that can be monitored by smartphone. Deployed in Garut, Indonesia.",
    logo: "/upi.svg",
    type: "Part-time",
  },
  {
    period: "Feb 2022 - Jul 2022",
    title: "Video Brand and Communication Intern",
    company: "Telkomsel",
    description:
      "Collaborate with partners to explore the voice of customers and seek insights from various surveys related to the video and games industry in general and what competitors are doing as the basis for Telkomsel to develop programs and plans to be carried out. As a part of Magang Bersama Kampus Merdeka (MBKM) batch 2.",
    logo: "/telkomsel.png",
    type: "Internship",
  },
  {
    period: "Mar 2020 - Feb 2021",
    title: "Web Developer",
    company: "Akademi Dakwah Wirausaha Indonesia",
    description:
      'The history of "Blok Tjokro" a historical relic from H.O.S. Tjokroaminoto in 1916, is uncovered, while also revealing the history of Sindangsari village and the essence of its name, discovered in 2020.',
    logo: "/adwi.jpg",
    type: "Apprenticeship",
  },
  {
    period: "Jan 2017 - Mar 2019",
    title: "Web Developer",
    company: "Quranuna Indonesia",
    description:
      "A website featuring methods for Quran memorization is constructed, with over 10 articles posted monthly, alongside participation in Quran memorization method development, having completed 3 juz of it.",
    logo: "/quranuna.jpg",
    type: "Apprenticeship",
  },
];

const organizations: XP[] = [
  {
    period: "Jul 2023 - Present",
    title: "Organizer",
    company: "Gemarkode",
    description:
      "Organizing events, workshops, and webinars for developers, designers, and entrepreneurs.",
    logo: "/gemarkode.png",
    type: "Community",
  },
  {
    period: "Aug 2019 - Present",
    title: "Member",
    company: "UKM Perisai Diri UPI",
    description: "Member of Keluarga Silat Nasional Indonesia Perisai Diri",
    logo: "/pd.png",
    type: "Community",
  },
  {
    period: "Apr 2021 - Apr 2023",
    title: "Manager of Education Division",
    company: "IEEE Student Branch UPI",
    description:
      "Managing the division, creating workshops, and webinars for students.",
    logo: "/ieee.jpeg",
    type: "Campus Organization",
  },
];

export default function Experience() {
  return (
    <article>
      <p className="mb-8 p text-justify xl:text-left">
        I have been working as a Software Engineer for almost 3 years. Now I am
        seeking a new opportunity to grow and learn more about{" "}
        <B>Artificial Intelligence</B>, especially in Natural Language
        Processing.
      </p>

      <div className="flex flex-col xl:flex-row xl:gap-8">
        <div className="flex-1">
          <Title className="text-secondary">Work Experiences_</Title>
          <Timeline>
            {workExperiences.map((xp, i) => (
              <Line
                disableEnd={i === workExperiences.length - 1}
                disableStart={i === 0}
                key={xp.period}
                logo={xp.logo}
              >
                <time className="font-mono italic text-secondary">
                  {xp.period}
                </time>
                <h4 className="text-lg text-secondary">
                  <B>{xp.title}</B>
                </h4>
                <span className="text-sm">
                  {xp.company} - {xp.type}
                </span>

                <p className="mt-2 p">{xp.description}</p>
              </Line>
            ))}
          </Timeline>
        </div>
        <div className="flex-1">
          <Title className="text-secondary">Organization_</Title>
          <Timeline>
            {organizations.map((xp, i) => (
              <Line
                disableEnd={i === organizations.length - 1}
                disableStart={i === 0}
                key={xp.period}
                logo={xp.logo}
              >
                <time className="font-mono italic text-secondary">
                  {xp.period}
                </time>
                <h4 className="text-lg text-secondary">
                  <B>{xp.title}</B>
                </h4>
                <span className="text-sm">
                  {xp.company} - {xp.type}
                </span>

                <p className="mt-2 p">{xp.description}</p>
              </Line>
            ))}
          </Timeline>
        </div>
      </div>
    </article>
  );
}
