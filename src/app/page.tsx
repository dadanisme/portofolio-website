import { Hero } from "@/components/sections/hero";
import { Experience } from "@/components/sections/experience";
import { Education } from "@/components/sections/education";
import { Skills } from "@/components/sections/skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4 space-y-16">
        <Hero />
        <Experience />
        <Education />
        <Skills />
      </div>
    </main>
  );
}
