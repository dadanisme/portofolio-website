import Identity from "@/components/main/identity";
import Highlight from "@/components/main/highlight";
import Footer from "@/components/main/footer";

export default function Home() {
  return (
    <main className="wide-box-x box-y min-h-svh flex flex-col items-center justify-center">
      <div className="w-full">
        <div className="flex flex-col xl:flex-row w-full gap-8 2xl:gap-16 xl:items-center">
          <Identity />
          <Highlight />
        </div>

        <Footer />
      </div>
    </main>
  );
}
