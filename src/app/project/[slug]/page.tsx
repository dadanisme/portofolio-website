import { redirect } from "next/navigation";

export default function ProjectSlug({ params }: ParamsProps) {
  return redirect("/coming-soon");
}
