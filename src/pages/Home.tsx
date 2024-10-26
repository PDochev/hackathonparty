import { Header } from "@/components/ui/Header";
import { Progress } from "@/components/ui/progress";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="flex flex-col items-center  justify-center mx-auto">
          <div className=" mt-12">
            <h1 className="text-2xl md:text-4xl lg:text-4xl font-bold text-center">
              You are now level
            </h1>
          </div>

          <div className="w-2/4  mx-auto mt-12">
            <Progress value={50} />
            <span> 50 / 100</span>
          </div>
        </div>
      </main>
    </>
  );
}
