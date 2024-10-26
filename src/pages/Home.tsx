import { ExpProgress } from "@/components/business/ExpProgress";
import { Layout } from "@/components/Layout";
import { useUserStore } from "@/store";

export default function Home() {
  const userName = useUserStore(({ name }) => name);
  // TODO: get these values from API
  const progressValue = 40;
  const userTitle = "Newcomer";
  const leftPoints = 30;

  return (
    <Layout>
      <main>
        <div className="flex flex-col items-center justify-center mx-auto">
          <div className="mt-12">Welcome back {userName}</div>
          <ExpProgress
            value={progressValue}
            userTitle={userTitle}
            leftPoints={leftPoints}
          />
        </div>
      </main>
    </Layout>
  );
}
