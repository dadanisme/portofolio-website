import { Separator } from "@/components/ui/separator";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">Education</h2>
      <Separator />
      <div className="flex gap-4">
        <div className="shrink-0">
          <GraduationCap className="h-6 w-6 text-muted-foreground" />
        </div>
        <div className="space-y-1">
          <h3 className="font-semibold">Universitas Pendidikan Indonesia</h3>
          <p className="text-sm text-muted-foreground">
            Electrical Engineering, GPA 3.57/4.00
          </p>
          <p className="text-sm text-muted-foreground">
            Bandung, Indonesia | 2019 - 2024
          </p>
        </div>
      </div>
    </section>
  );
}
