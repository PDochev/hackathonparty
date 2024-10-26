import Navbar from "@/components/custom/Navbar";
import { Progress } from "@/components/ui/progress";

export default function Home() {
  return (
    <>
      <header>
        <nav role="navigation">
          <Navbar>
            <div className="flex items-center justify-between w-full m-2">
              <h4 className="ml-4 text-md font-semibold tracking-tight scroll-m-20 ">
                Immigration App
              </h4>
              <div className="flex items-center gap-4 mr-4"></div>
            </div>
          </Navbar>
        </nav>
      </header>
      <main>
        <div className="flex  items-center justify-center mt-12">
          <h1 className="text-4xl font-bold">Welcome to the Immigration app</h1>
        </div>

        <div className="w-2/4 flex items-center justify-center mx-auto mt-12">
          <Progress value={50} />
          <span> 50 / 100</span>
        </div>
      </main>
    </>
  );
}
