import { education, type Education } from "@/content/homepage";

export function EducationSection() {
  return (
    <section className="grid grid-cols-12 gap-x-6 gap-y-8 border-t border-foreground pt-16 pb-24">
      <header className="col-span-12 flex items-baseline justify-between">
        <h2 className="display-serif text-4xl md:text-6xl">Education</h2>
        <span className="folio hidden md:inline">
          {education.length.toString().padStart(2, "0")} entries
        </span>
      </header>

      <ol className="col-span-12 divide-y divide-border mt-6">
        {education.map((entry, i) => (
          <EducationEntry key={i} entry={entry} />
        ))}
      </ol>
    </section>
  );
}

function EducationEntry({ entry }: { entry: Education }) {
  return (
    <li className="grid grid-cols-12 gap-x-6 gap-y-3 py-10 first:pt-0">
      <div className="col-span-12">
        <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
          <h3 className="display-serif not-italic text-2xl md:text-3xl text-foreground">
            {entry.institution}
          </h3>
          <span className="meta text-muted-foreground">{entry.period}</span>
        </div>
        <p className="mt-2 font-serif text-lg italic text-foreground/90">
          {entry.degree}
          {entry.gpa && (
            <span className="not-italic meta ml-3 text-muted-foreground">
              / GPA {entry.gpa}
            </span>
          )}
        </p>
        <p className="meta mt-1 text-muted-foreground">{entry.location}</p>
      </div>
    </li>
  );
}

export { EducationSection as Education };
