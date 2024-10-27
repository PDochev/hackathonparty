import { ExpProgress } from "@/components/business/ExpProgress";
import { TaskCard } from "@/components/business/TaskCard";
import { Layout } from "@/components/Layout";
import { Typography } from "@/components/ui/Typography";
import { Badge, Task } from "@/types";
import { useUserStore } from "@/store";
import { useEffect, useState } from "react";

export default function Home() {
  const userName = useUserStore(({ name }) => name);
  const [userTasks, setUserTasks] = useState<Task[]>();
  const [badges, setBadges] = useState<Badge[]>([]);

  const progressValue = badges.length < 5 ? 20 * badges.length : 0;
  const userTitle = badges.length < 5 ? "Newcomer" : "Trailblazer";
  const leftPoints = badges.length < 5 ? 5 - badges.length : 7;

  function getTasks() {
    fetch("http://localhost:3000/users/1/incomplete-tasks")
      .then((response) => response.json())
      .then((data) => setUserTasks(data));
  }

  function getBadges() {
    fetch("http://localhost:3000/user/badges/1")
      .then((response) => response.json())
      .then((data) => setBadges(data));
  }

  useEffect(() => {
    getTasks();
    getBadges();
  }, []);

  const handleToggleSubtask = (taskId: string, subtaskId: string) => {
    setUserTasks((prevTasks) =>
      prevTasks?.map((task) => {
        if (task.taskId === taskId) {
          const updatedSubtasks = task.subtasks.map((subtask) =>
            subtask.subtaskId === subtaskId
              ? { ...subtask, isCompleted: !subtask.isCompleted }
              : subtask
          );
          return { ...task, subtasks: updatedSubtasks };
        }
        return task;
      })
    );
  };

  return (
    <Layout>
      <main>
        <div className="flex flex-col items-center justify-center mx-auto mt-6 mb-">
          <Typography.H3 className="mb-4">
            Welcome back {userName}
          </Typography.H3>
          <ExpProgress
            value={progressValue}
            userTitle={userTitle}
            leftPoints={leftPoints}
          />
        </div>
        <TaskCard
          completed={false}
          onToggleSubTasks={handleToggleSubtask}
          tasks={userTasks}
        />
      </main>
    </Layout>
  );
}
