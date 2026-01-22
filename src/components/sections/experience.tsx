import { Separator } from "@/components/ui/separator";
import { jobs, type Job, type Role } from "@/content/homepage";

export function Experience() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">Work Experience</h2>
      <Separator />
      <div className="space-y-8">
        {jobs.map((job, i) => (
          <JobEntry key={i} job={job} />
        ))}
      </div>
    </section>
  );
}

function JobEntry({ job }: { job: Job }) {
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
        <h3 className="font-semibold">{job.company}</h3>
        <span className="text-sm text-muted-foreground shrink-0">
          {job.location}
        </span>
      </div>
      {job.roles.map((role, i) => (
        <RoleEntry key={i} role={role} />
      ))}
    </div>
  );
}

function RoleEntry({ role }: { role: Role }) {
  return (
    <div className="space-y-2 pl-4 border-l-2 border-border">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
        <p className="text-sm">
          {role.title}{" "}
          <span className="text-muted-foreground">/ {role.type}</span>
        </p>
        <span className="text-sm text-muted-foreground">{role.period}</span>
      </div>
      <ul className="space-y-1 text-sm text-muted-foreground">
        {role.bullets.map((bullet, i) => (
          <li key={i} className="flex gap-2">
            <span className="shrink-0">-</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
