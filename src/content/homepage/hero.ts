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
    "A Software Engineer with 5+ years of experience across startups, research, and global teams. Skilled in leading engineering teams, mentoring peers, and shipping high quality software. Proven track record in web and mobile development, AI-driven products, and cloud-native solutions. Strong balance of technical depth and leadership.",
  primarySkills: ["TypeScript", "React", "Node.js", "Python", "Swift"],
};
