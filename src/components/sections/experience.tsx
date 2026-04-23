import { jobs, type Job, type Role } from "@/content/homepage";

export function Experience() {
  return (
    <section className="grid grid-cols-12 gap-x-6 gap-y-8 border-t border-foreground pt-16 pb-12">
      <header className="col-span-12 flex items-baseline justify-between">
        <h2 className="display-serif text-4xl md:text-6xl">Work</h2>
        <span className="folio hidden md:inline">
          {jobs.length.toString().padStart(2, "0")} entries
        </span>
      </header>

      <ol className="col-span-12 mt-6 divide-y divide-border">
        {jobs.map((job) => (
          <JobEntry key={job.company} job={job} />
        ))}
      </ol>
    </section>
  );
}

function JobEntry({ job }: { job: Job }) {
  return (
    <li className="grid grid-cols-12 gap-x-6 gap-y-4 py-10 first:pt-0">
      <div className="col-span-12">
        <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
          <h3 className="display-serif text-2xl md:text-4xl not-italic text-foreground">
            {job.company}
          </h3>
          <span className="meta text-muted-foreground">{job.location}</span>
        </div>

        <div className="mt-6 space-y-8 border-l border-border pl-5 md:pl-7">
          {job.roles.map((role, i) => (
            <RoleEntry key={i} role={role} />
          ))}
        </div>
      </div>
    </li>
  );
}

function RoleEntry({ role }: { role: Role }) {
  return (
    <div className="space-y-3">
      <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
        <p className="font-serif text-lg italic leading-tight text-foreground md:text-xl">
          {role.title}
          <span className="ml-2 not-italic meta text-muted-foreground">
            / {role.type}
          </span>
        </p>
        <span className="meta shrink-0 text-muted-foreground">
          {role.period}
        </span>
      </div>
      <ul className="space-y-1.5 pt-1">
        {role.bullets.map((bullet, i) => (
          <li
            key={i}
            className="flex gap-3 text-sm leading-relaxed text-foreground/85"
          >
            <span className="meta shrink-0 pt-0.5 text-accent">—</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
