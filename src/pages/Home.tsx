import Navbar from "@/components/ui/Navbar";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
              <div className="flex items-center gap-4 mr-4">
                <small className="text-sm font-medium leading-none">
                  Plamen
                </small>
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>Plamen</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </Navbar>
        </nav>
      </header>
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
