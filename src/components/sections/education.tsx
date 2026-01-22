import { Separator } from "@/components/ui/separator";
import { GraduationCap } from "lucide-react";
import { education, type Education } from "@/content/homepage";

export function EducationSection() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">Education</h2>
      <Separator />
      <div className="space-y-6">
        {education.map((entry, i) => (
          <EducationEntry key={i} entry={entry} />
        ))}
      </div>
    </section>
  );
}

function EducationEntry({ entry }: { entry: Education }) {
  return (
    <div className="flex gap-4">
      <div className="shrink-0">
        <GraduationCap className="h-6 w-6 text-muted-foreground" />
      </div>
      <div className="space-y-1">
        <h3 className="font-semibold">{entry.institution}</h3>
        <p className="text-sm text-muted-foreground">
          {entry.degree}
          {entry.gpa && `, GPA ${entry.gpa}`}
        </p>
        <p className="text-sm text-muted-foreground">
          {entry.location} | {entry.period}
        </p>
      </div>
    </div>
  );
}

// Keep the old export name for backwards compatibility
export { EducationSection as Education };
