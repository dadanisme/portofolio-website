import { skillCategories } from "@/content/homepage";

export function Skills() {
  return (
    <section className="grid grid-cols-12 gap-x-6 gap-y-8 border-t border-foreground pt-16">
      <header className="col-span-12 flex items-baseline justify-between">
        <h2 className="display-serif text-4xl md:text-6xl">Practice</h2>
        <span className="folio hidden md:inline">
          {skillCategories.length.toString().padStart(2, "0")} categories
        </span>
      </header>

      <div className="col-span-12 grid grid-cols-12 gap-x-6 gap-y-10 mt-6">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="col-span-12 grid grid-cols-12 gap-x-6 border-t border-border pt-8"
          >
            <div className="col-span-12 md:col-span-2">
              <h3 className="eyebrow text-foreground">{category.title}</h3>
            </div>

            <ul className="col-span-12 md:col-span-10 flex flex-wrap items-baseline gap-x-4 gap-y-2">
              {category.skills.map((skill, j) => (
                <li
                  key={skill}
                  className="flex items-baseline gap-4 font-serif text-xl text-foreground md:text-2xl"
                >
                  {j > 0 && (
                    <span className="meta text-accent" aria-hidden>
                      ·
                    </span>
                  )}
                  <span className="italic">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
