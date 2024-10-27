import { ExpProgress } from "@/components/business/ExpProgress";
import { TaskCard } from "@/components/business/TaskCard";
import { Layout } from "@/components/Layout";
import { Typography } from "@/components/ui/Typography";
import { Badge, Task, User } from "@/types";
// import { useUserStore } from "@/store";
import { useEffect, useState } from "react";

export default function Home() {
  // const userName = useUserStore(({ name }) => name);
  // TODO: get these values from API
  const [user, setUser] = useState<User>();
  const [userTasks, setUserTasks] = useState<Task[]>();
  const [badges, setBadges] = useState<Badge[]>([]);

  // const progressValue = 10;
  const progressValue = badges.length < 5 ? 20 * badges.length : 0;
  const userTitle = badges.length < 5 ? "Newcomer" : "Trailblazer";
  const leftPoints = badges.length < 5 ? 5 - badges.length : 7;

  function getUser() {
    fetch("http://localhost:3000/users/1")
      .then((response) => response.json())
      .then((data) => setUser(data));
  }

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
    getUser();
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
            Welcome back {user?.name}
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
          // tasks={[
          //   {
          //     id: "1",
          //     title: "Task 1",
          //     subtasks: [
          //       { id: "1-1", title: "SubTask 1-1", isCompleted: true },
          //       { id: "1-2", title: "SubTask 1-2", isCompleted: false },
          //     ],
          //   },
          //   {
          //     id: "2",
          //     title: "Task 2",
          //     subtasks: [
          //       { id: "2-1", title: "SubTask 2-1", isCompleted: true },
          //       { id: "2-2", title: "SubTask 2-2", isCompleted: false },
          //       { id: "2-3", title: "SubTask 2-3", isCompleted: false },
          //       { id: "2-4", title: "SubTask 2-4", isCompleted: false },
          //     ],
          //   },
          // ]}
        />
      </main>
    </Layout>
  );
}
