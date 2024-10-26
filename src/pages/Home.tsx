import { Layout } from "@/components/Layout";
import { Progress } from "@/components/ui/progress";

export default function Home() {
  // TODO: get this from state management library
  const userName = "Anom";
  // TODO: get these values from API
  const progressValue = 40;
  const userTitle = "Newcomer";
  const leftPoints = 30;

  return (
    <Layout>
      <main>
        <div className="flex flex-col items-center  justify-center mx-auto">
          <div className=" mt-12">Welcome back {userName}</div>
          <div className="relative w-[60%]">
            <Progress value={progressValue} className="h-[2.4rem]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs font-medium text-primary-foreground drop-shadow">
                {progressValue}% {userTitle}
              </span>
            </div>
          </div>
          Get {leftPoints} more points to level up
        </div>
      </main>
    </Layout>
  );
}
