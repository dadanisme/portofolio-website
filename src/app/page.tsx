import { Hero } from "@/components/sections/hero";
import { Experience } from "@/components/sections/experience";
import { Education } from "@/components/sections/education";
import { Skills } from "@/components/sections/skills";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background">
      <div className="mx-auto max-w-350 px-6 md:px-10">
        <Hero />
        <Experience />
        <Education />
        <Skills />
        <footer className="grid grid-cols-12 gap-6 border-t border-foreground py-10 mt-24">
          <p className="folio col-span-6">© 2026 · Muhammad Ramdan</p>
          <p className="folio col-span-6 text-right">
            Set in Instrument Serif & Geist Mono
          </p>
        </footer>
      </div>
    </main>
  );
}
