export interface HeroData {
  name: string;
  title: string;
  overview: string;
  primarySkills: string[];
}

export const hero: HeroData = {
  name: "Muhammad Ramdan",
  title: "Software Engineer",
  overview:
    "A Software Engineer with 8+ years of experience building web, mobile, and AI products. I care just as much about people as I do about code. I lead teams, mentor others, speak publicly, and grow businesses. I'm always looking to learn and help others do the same.",
  primarySkills: ["TypeScript", "React", "Node.js", "Python", "Swift"],
};
