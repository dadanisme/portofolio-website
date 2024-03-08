import Rainbow from "@/components/rainbow-text";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center box">
      <h1 className="text-6xl font-bold text-center">
        <Rainbow>Muhammad Ramdan</Rainbow>
      </h1>

      <h4 className="text-2xl font-semibold text-center">Software Engineer</h4>

      <Link href="/project">Project</Link>
    </main>
  );
}
