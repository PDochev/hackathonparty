import { ExpProgress } from "@/components/business/ExpProgress";
import { TaskCard } from "@/components/business/TaskCard";
import { Layout } from "@/components/Layout";
import { Typography } from "@/components/ui/Typography";
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
          <Typography.H3>Welcome back {userName}</Typography.H3>
          <ExpProgress
            value={progressValue}
            userTitle={userTitle}
            leftPoints={leftPoints}
          />
        </div>
        <TaskCard
          completed={false}
          tasks={[
            {
              id: "1",
              title: "Task 1",
              subtasks: [
                { id: "1-1", title: "SubTask 1-1", isCompleted: true },
                { id: "1-2", title: "SubTask 1-2", isCompleted: false },
              ],
            },
            {
              id: "2",
              title: "Task 2",
              subtasks: [
                { id: "2-1", title: "SubTask 2-1", isCompleted: true },
                { id: "2-2", title: "SubTask 2-2", isCompleted: false },
                { id: "2-3", title: "SubTask 2-3", isCompleted: false },
                { id: "2-4", title: "SubTask 2-4", isCompleted: false },
              ],
            },
          ]}
        />
      </main>
    </Layout>
  );
}
