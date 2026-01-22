export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      "English (Fluent)",
      "Bahasa Indonesia (Native)",
      "Norwegian (Novice)",
    ],
  },
  {
    title: "Soft Skills",
    skills: ["Public Speaking", "Scrum", "Project Management", "Communication"],
  },
  {
    title: "Web",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Redux",
      "Next.js",
      "TypeScript",
    ],
  },
  {
    title: "Mobile",
    skills: ["React Native", "Swift", "SwiftUI", "UIKit"],
  },
  {
    title: "Additional",
    skills: [
      "C++",
      "Node.js",
      "Python (Flask)",
      "Firebase",
      "Machine Learning",
      "NLP",
      "Computer Vision",
      "GIS (Mapbox/OpenLayers)",
      "Google Cloud Platform",
      "IoT",
    ],
  },
];
