export interface Role {
  title: string;
  type: string;
  period: string;
  bullets: string[];
}

export interface Job {
  company: string;
  location: string;
  roles: Role[];
}

export const jobs: Job[] = [
  {
    company: "Stockifi",
    location: "Oslo, Norway (Remote)",
    roles: [
      {
        title: "Software Engineer Team Lead",
        type: "Full-time",
        period: "Sep 2024 - Present",
        bullets: [
          "Guided the team, provided technical support, and kept the team dynamics",
          "Reviewed approximately 240 Pull Requests within the last year",
          "Establish monthly brainstorming sessions to gather team aspirations",
          "Work closely with the CEO & other stakeholders to strategize company growth",
        ],
      },
      {
        title: "React Developer",
        type: "Full-time",
        period: "Jan 2023 - Aug 2024",
        bullets: [
          "Maintained application written in TypeScript handling 300+ users and millions of data",
          "Produced 50+ cloud functions with Firebase & Google Cloud",
          "Created 8 OCR-related bots with Vertex AI, Google Gemini, & self-made model",
          "Made 25 web scraping bots using Playwright running in Cloud Run containers",
        ],
      },
    ],
  },
  {
    company: "Apple Developer Academy @BINUS - Bali",
    location: "Bali, Indonesia",
    roles: [
      {
        title: "Apple Developer Academy Alumni",
        type: "Apprenticeship",
        period: "Feb 2025 - Dec 2025",
        bullets: [
          "Initiate & facilitate 7 practical coding sessions for learners to learn and share knowledge",
          "Share coding & technology related knowledge to fellow learners",
          "Participate in 6 challenge based learning projects as the team leader",
        ],
      },
    ],
  },
  {
    company: "Kreasof AI",
    location: "Jakarta, Indonesia (Remote)",
    roles: [
      {
        title: "Co-Founder, Lead Software Engineer",
        type: "Self-Employed",
        period: "Jan 2025 - Dec 2025",
        bullets: [
          "Built this company in the spirit of local AI research especially in the LLM field",
          "Released 3 papers in international conferences regarding LLM-related topics",
          "Doing product research in the AI field, finding how AI fits into real world scenarios",
        ],
      },
    ],
  },
  {
    company: "LSK Tata Rias Pengantin",
    location: "Jakarta, Indonesia (Remote)",
    roles: [
      {
        title: "Web Developer",
        type: "Part-Time",
        period: "Sep 2021 - Sep 2025",
        bullets: [
          "Helped the institution become top 1 Certification Institution in 2021-2024",
          "Launched company website and optimized SEO to get 1st rank in Google Search",
          "Developed tracking system for 340 examiners using JavaScript and Firebase",
          "Built automatic mailing system to assign 340+ examiners throughout Indonesia",
        ],
      },
    ],
  },
  {
    company: "Abbauf Mulia Konsultan Teknologi",
    location: "Depok, Indonesia (Remote)",
    roles: [
      {
        title: "Technical Lead - Frontend",
        type: "Internship",
        period: "Aug 2022 - Dec 2022",
        bullets: [
          "Led Frontend team consists of 10 people",
          "Developed dashboard for managing WebGIS content",
          "Optimized performance and resolved browser compatibility issues",
          "Wrote clean code, working with 20 other developers",
        ],
      },
    ],
  },
  {
    company: "Braga Technologies",
    location: "Bandung, Indonesia (Remote)",
    roles: [
      {
        title: "Frontend Developer",
        type: "Part-time",
        period: "Jul 2022 - Dec 2022",
        bullets: [
          "Maintained 3 WebGIS management projects using Mapbox and React",
          "Worked in an agile environment with a project manager and 4 developers",
          'Created Jawa Barat jobseeking platform "SI-Juara" serving thousands of users',
        ],
      },
    ],
  },
  {
    company: "Amanah Pratama",
    location: "Jakarta, Indonesia (Remote)",
    roles: [
      {
        title: "Frontend Developer",
        type: "Freelance",
        period: "Oct 2021 - Nov 2022",
        bullets: [
          "Worked on Smart Drone project, an AI-driven drone for tower inspection",
          "Built dashboard for BTS tower inspection with realtime drone control feature",
          "Collaborated with Backend and UI designer",
        ],
      },
    ],
  },
  {
    company: "Akademi Dakwah Wirausaha Indonesia",
    location: "Cianjur, Indonesia",
    roles: [
      {
        title: "Web Developer",
        type: "Freelance",
        period: "Mar 2020 - Feb 2021",
        bullets: [
          'Discovered the history of "Blok Tjokro", a historical relic from 1916',
          "Revealed the history of Sindangsari village in 2020",
          "Built a blogger-based website for this campus in 2020",
          "Presented 5 webinars on the topic of Da'wah",
        ],
      },
    ],
  },
  {
    company: "Quranuna Indonesia",
    location: "Bogor, Indonesia",
    roles: [
      {
        title: "Web Developer",
        type: "Apprenticeship",
        period: "Jan 2017 - Mar 2019",
        bullets: [
          "Built a website for Koran memorization methods, posting 10 articles monthly",
          "Participated in developing the method and completed 3 juz of memorization",
        ],
      },
    ],
  },
];
