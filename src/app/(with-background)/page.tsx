import Rainbow from "@/components/rainbow-text";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Rainbow className="text-4xl font-bold text-center mt-8">
        Lorem, ipsum dolor.
      </Rainbow>

      <Link href="/project">Project</Link>
    </main>
  );
}
