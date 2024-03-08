import Identity from "@/components/main/identity";
import Highlight from "@/components/main/highlight";
import Footer from "@/components/main/footer";

export default function Home() {
  return (
    <main className="box-x box-y">
      <div className="flex flex-col lg:flex-row w-full gap-8">
        <Identity />
        <Highlight />
      </div>

      <div className="lg:hidden">
        <Footer />
      </div>
    </main>
  );
}
