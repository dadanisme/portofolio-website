import { Resend } from "resend";
import { getLangColor, slugify } from "@/utils/common";

const resend = new Resend("re_9f7doiva_KDxmhcemgf2muR8zUccitWT7");

interface Project {
  name: string;
  description: string;
  image?: string;
  repo?: string;
  slug: string;
  externalLink?: string;
  customLink?: string;
  private?: boolean;
  year: number | string;
  lang?: Record<
    string,
    {
      size: number;
      color: string;
    }
  >;
  pinned?: boolean;
}

const projects: Omit<Project, "slug">[] = [
  {
    name: "Stockifi Admin Panel",
    description:
      "Stockifi internal admin panel for managing users and data. Utilizing fully Firebase architecture.",
    repo: "stocklio/admin-panel",
    private: true,
    externalLink: "https://www.stockifi.io",
    year: 2024,
    pinned: true,
    image: "/stockifi.png",
    lang: {
      TypeScript: {
        size: 90.4,
        color: getLangColor("TypeScript"),
      },
      SCSS: {
        size: 8.7,
        color: getLangColor("SCSS"),
      },
      JavaScript: {
        size: 0.5,
        color: getLangColor("JavaScript"),
      },
      HTML: {
        size: 0.3,
        color: getLangColor("HTML"),
      },
      Dockerfile: {
        size: 0.1,
        color: getLangColor("Dockerfile"),
      },
    },
  },
  {
    name: "AyaSeek AI",
    description:
      "Al-Quran search Android application powered by AI. Utilizing NLP and ML to search for verses in the Quran, built with React Native. Soon to be released on Google Play Store. Stay tuned!",
    repo: "dadanisme/al-quran",
    customLink: "/ayaseek-ai",
    year: 2024,
    image: "/ayaseek.png",
    pinned: true,
  },
  {
    name: "AGAVI Institute",
    description: "Learning management system for AGAVI Institute.",
    repo: "Agavi-Institute/agavi-institute-client",
    private: true,
    externalLink: "https://institute.agavi.id",
    year: 2023,
    lang: {
      TypeScript: {
        size: 98.2,
        color: getLangColor("TypeScript"),
      },
      SCSS: {
        size: 1.1,
        color: getLangColor("SCSS"),
      },
      Other: {
        size: 0.7,
        color: getLangColor("Other"),
      },
    },
  },
  {
    name: "ACR Asia Landing Page",
    description:
      "A landing page for ACR Asia. A company that provides services & products for the insulated panel.",
    repo: "dadanisme/acr-asia-new",
    private: true,
    externalLink: "https://www.acr-asia.com",
    year: 2023,
  },
  {
    name: "SiJuara",
    description:
      "Job seeker platform belonging to Kemnaker. Optimized for speed, reliability, and user experience.",
    repo: "bragapm/sima-juara",
    externalLink: "https://sijuara.jabarprov.go.id",
    private: true,
    year: 2022,
  },
  {
    name: "Dashboard Singset BPKAD",
    description:
      "Dashboard for management of land assets and building assets developed for BPKAD West Java Province.",
    year: 2022,
    externalLink: "http://singset-dev.braga.co.id",
  },
  {
    name: "Dashboard DSDA Jabar",
    description:
      "A water resources mapping application for DSDA. Built with React & Mapbox",
    repo: "bragapm/DSDA_Jabar",
    private: true,
    year: 2022,
    externalLink: "https://dsda.braga.co.id",
  },
  {
    name: "Land System BIG",
    description:
      "Application developed for geospatial information agencies that function to analyze geospatial data",
    year: 2022,
    repo: "bragapm/land-system-big-pm",
    private: true,
  },
  {
    name: "Portofolio Website",
    description: "This website you're currently visiting.",
    repo: "dadanisme/portofolio-website",
    year: 2024,
  },
  {
    name: "AGAVI Landing Page",
    description:
      "A landing page for AGAVI. A consulting company in Food Safety, Quality, and Regulatory Compliance.",
    repo: "dadanisme/agavi-landing-page",
    private: true,
    externalLink: "https://refresh.agavi.id",
    year: 2024,
  },
  {
    name: "Face Compare App",
    description: "A face comparison application using face-api.js.",
    repo: "dadanisme/face-compare-app",
    externalLink: "https://penjemputan-siswa.vercel.app",
    year: 2023,
  },
  {
    name: "Job Classification",
    repo: "dadanisme/job-classification",
    description:
      "A web application for classifying job test into recommended job categories with machine learning.",
    year: 2023,
  },
  {
    name: "Job Classification Server",
    description:
      "A server for Job Classification web application. Built with Flask & TensorFlow.",
    repo: "dadanisme/job-classification-server",
    year: 2023,
  },
  {
    name: "Sign Detection",
    description:
      "A web application for detecting hand signs using MediaPipe gesture recognition.",
    repo: "dadanisme/sign-detection-next",
    externalLink: "https://sign-detection.vercel.app",
    year: 2023,
  },
  {
    name: "Vite Adventure",
    description: "A simple story game built with Vite.",
    repo: "dadanisme/vite-adventure",
    externalLink: "https://vite-adventure.vercel.app",
    year: 2022,
  },
  {
    name: "Al-Quran Recognition",
    description:
      "Starter prototype of AyaSeek AI. A web application for recognizing Al-Quran verses using GCP.",
    repo: "dadanisme/alquran-recognition",
    year: 2022,
  },
  {
    name: "Al-Quran Recognition Server",
    description:
      "A server for Al-Quran Recognition web application. Built with Flask & TensorFlow.",
    repo: "dadanisme/alquran-recognition-server",
    year: 2022,
  },
  {
    name: "Inventaris Sarana",
    description: "A web application for managing school facilities inventory.",
    repo: "WidaStmik/inventaris-sarana",
    year: 2024,
    externalLink: "https://inventaris-sarana.vercel.app",
  },
];

export async function getProjects() {
  const data: Project[] = await Promise.all(
    projects.map(async (project) => {
      const slug = slugify(project.name);

      if (project.private || !project.repo) {
        return { ...project, slug };
      }

      const langRes = await fetch(
        `https://api.github.com/repos/${project.repo}/languages`
      );
      const data = await langRes.json();

      if (data.documentation_url) {
        return { ...project, slug };
      }

      const totalSize = Object.values(data).reduce(
        (acc: number, curr) => acc + (curr as number),
        0
      );

      const lang = Object.entries(data).reduce<
        Record<string, { size: number; color: string }>
      >((acc, curr) => {
        const [lang, size] = curr;

        const percentage = ((size as number) / totalSize) * 100;

        acc[lang] = {
          size: percentage,
          color: getLangColor(lang),
        };
        return acc;
      }, {});

      return {
        ...project,
        slug,
        lang,
      };
    })
  );

  return data.sort((a, b) =>
    a.pinned
      ? -1
      : typeof a.year === "number" && typeof b.year === "number"
      ? b.year - a.year
      : 0
  );
}

const encourageWords = [
  "Finish what you started.",
  "You're doing great!",
  "You're amazing!",
  "Can't wait to see what you do next!",
  'Your website is "coming soon"!',
  "When will you launch your website?",
  "Any updates on your website?",
  "Are you still working on your website?",
  "Apple cannot wait your registration!",
];

export async function encourageMe(ua: string | null) {
  "use server";

  const randomWord =
    encourageWords[Math.floor(Math.random() * encourageWords.length)];
  const html = `
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #f2f2f2;
              padding: 20px;
            }
            h1 {
              color: #333;
              font-size: 24px;
              margin-bottom: 10px;
            }
            p {
              color: #666;
              font-size: 14px;
            }
          </style>
        </head>
        <body>
          <h1>Hey Ramdan!</h1>
          <p>
            I just wanted to remind you that you have a website to
            finish. You're doing great, keep it up!

            <br/>
            I visited your website at ${new Date().toLocaleString()} 
            and it's looking good. I can't wait to see
            what you do next. I'm sure it will be amazing!

            <br />
            <br />
            Best, <br />
            Your Visitor

            </p>
 
            <p>${ua || ""}</p>
        </body>
      </html>
    `;

  const { data, error } = await resend.emails.send({
    from: "Visitor <encourage@muhammadramdan.com>",
    to: "huntercitation@gmail.com",
    subject: `[Reminder] ${randomWord}`,
    html,
  });

  if (error) {
    console.error(error);
  }

  return randomWord;
}
