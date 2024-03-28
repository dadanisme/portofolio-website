import { Resend } from "resend";
import { getLangColor, slugify } from "@/utils/common";

const resend = new Resend("re_9f7doiva_KDxmhcemgf2muR8zUccitWT7");

interface Project {
  name: string;
  description: string;
  image?: string;
  repo?: string;
  slug: string;
  customLink?: string;
  private?: boolean;
  lang?: Record<
    string,
    {
      size: number;
      color: string;
    }
  >;
}

const projects: Omit<Project, "slug">[] = [
  {
    name: "Stockifi Admin Panel",
    description: "Stockifi internal admin panel for managing users and data.",
    repo: "stocklio/admin-panel",
    private: true,
  },
  {
    name: "AyaSeek AI",
    description:
      "Al-Quran search Android application powered by AI. Utilizing NLP and ML to search for verses in the Quran, built with React Native. Soon to be released on Google Play Store. Stay tuned!",
    repo: "dadanisme/al-quran",
    customLink: "/ayaseek-ai",
  },
  {
    name: "AGAVI Institute",
    description: "A website for an educational institution.",
    repo: "Agavi-Institute/agavi-institute-client",
    private: true,
  },
  {
    name: "Portofolio Website",
    description: "This website you're currently visiting.",
    repo: "dadanisme/portofolio-website",
  },
  {
    name: "ACR Asia Landing Page",
    description:
      "A landing page for ACR Asia. A company that provides services & products for the insulated panel.",
    repo: "dadanisme/acr-asia-new",
    private: true,
  },
  {
    name: "AGAVI Landing Page",
    description:
      "A landing page for AGAVI. A consulting company in Food Safety, Quality, and Regulatory Compliance.",
    repo: "dadanisme/agavi-landing-page",
    private: true,
  },
  {
    name: "Face Compare App",
    description: "A face comparison application using face-api.js.",
    repo: "dadanisme/face-compare-app",
  },
  {
    name: "Job Classification",
    repo: "dadanisme/job-classification",
    description:
      "A web application for classifying job test into recommended job categories with machine learning.",
  },
  {
    name: "Job Classification Server",
    description:
      "A server for Job Classification web application. Built with Flask & TensorFlow.",
    repo: "dadanisme/job-classification-server",
  },
  {
    name: "Sign Detection",
    description:
      "A web application for detecting hand signs using MediaPipe gesture recognition.",
    repo: "dadanisme/sign-detection-next",
  },
  {
    name: "Vite Adventure",
    description: "A simple story game built with Vite.",
    repo: "dadanisme/vite-adventure",
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

  return data;
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
