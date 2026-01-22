import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
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

export function Skills() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">Skills</h2>
      <Separator />
      <div className="space-y-6">
        {skillCategories.map((category) => (
          <div key={category.title} className="space-y-2">
            <h3 className="text-sm font-medium text-muted-foreground">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <Badge key={skill} variant="outline">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
