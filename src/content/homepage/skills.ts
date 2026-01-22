export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Web & Mobile",
    skills: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Redux",
      "Swift",
      "SwiftUI",
      "UIKit",
      "React Native",
      "HTML/CSS",
    ],
  },
  {
    title: "AI & Cloud",
    skills: [
      "Google Cloud Platform",
      "Firebase",
      "Cloud Run",
      "Vertex AI",
      "Google Gemini",
      "LLM",
      "Machine Learning",
      "NLP",
      "Computer Vision",
      "OCR",
    ],
  },
  {
    title: "Tools",
    skills: [
      "Node.js",
      "Python",
      "Playwright",
      "Web Scraping",
      "Mapbox",
      "WebGIS",
      "SEO",
      "Git",
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      "Team Leadership",
      "Code Review",
      "Mentoring",
      "Product Management",
      "User Research",
      "Agile/Scrum",
      "Public Speaking",
    ],
  },
];
