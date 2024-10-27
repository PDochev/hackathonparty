import { ExpProgress } from "@/components/business/ExpProgress";
import { TaskCard } from "@/components/business/TaskCard";
import { Layout } from "@/components/Layout";
import { Typography } from "@/components/ui/Typography";
import { Task } from "@/types";
import { useUserStore } from "@/store";
import { useEffect, useReducer } from "react";

const initialState: TasksState = {
  userTasks: [],
  completedTasks: [],
};

export default function Home() {
  const userName = useUserStore(({ name }) => name);
  const [state, dispatch] = useReducer(tasksReducer, initialState);

  const progressValue =
    state.completedTasks.length < 5 ? 20 * state.completedTasks.length : 0;
  const userTitle =
    state.completedTasks.length < 5 ? "Newcomer" : "Trailblazer";
  const leftPoints =
    state.completedTasks.length < 5 ? 5 - state.completedTasks.length : 7;

  function getTasks() {
    fetch("http://localhost:3000/users/1/incomplete-tasks")
      .then((response) => response.json())
      .then((data) => dispatch({ type: "SET_USER_TASKS", payload: data }));
  }

  function getCompletedTasks() {
    fetch("http://localhost:3000/users/1/complete-tasks")
      .then((response) => response.json())
      .then((data) => dispatch({ type: "SET_COMPLETED_TASKS", payload: data }));
  }

  useEffect(() => {
    getTasks();
    getCompletedTasks();
  }, []);

  const handleToggleSubtask = (taskId: string, subtaskId: string) => {
    dispatch({
      type: "TOGGLE_SUBTASK",
      payload: { taskId, subtaskId },
    });

    // In a real application, you would make an API call here
    // const task = state.userTasks.find(t => t.taskId === taskId);
    // if (task?.subtasks.every(st => st.isCompleted)) {
    //   fetch(`http://localhost:3000/users/1/tasks/${taskId}/complete`, {
    //     method: "POST",
    //   });
    // }
  };

  const hasIncompleteTasks = state.userTasks.length > 0;

  return (
    <Layout>
      <main>
        <div className="flex flex-col items-center justify-center mx-auto mt-6 mb-6">
          <Typography.H3 className="mb-4">
            Welcome back "{userName}"
          </Typography.H3>
          <ExpProgress
            value={progressValue}
            userTitle={userTitle}
            leftPoints={leftPoints}
          />
        </div>
        <TaskCard
          completed={!hasIncompleteTasks}
          onToggleSubTasks={handleToggleSubtask}
          tasks={state.userTasks}
        />
      </main>
    </Layout>
  );
}

type TasksState = {
  userTasks: Task[];
  completedTasks: Task[];
};

type TasksAction =
  | { type: "SET_USER_TASKS"; payload: Task[] }
  | { type: "SET_COMPLETED_TASKS"; payload: Task[] }
  | { type: "TOGGLE_SUBTASK"; payload: { taskId: string; subtaskId: string } }
  | { type: "COMPLETE_TASK"; payload: Task };

const tasksReducer = (state: TasksState, action: TasksAction): TasksState => {
  switch (action.type) {
    case "SET_USER_TASKS":
      return {
        ...state,
        userTasks: action.payload,
      };

    case "SET_COMPLETED_TASKS":
      return {
        ...state,
        completedTasks: action.payload,
      };

    case "TOGGLE_SUBTASK": {
      const updatedTasks = state.userTasks.map((task) => {
        if (task.taskId === action.payload.taskId) {
          const updatedSubtasks = task.subtasks.map((subtask) =>
            subtask.subtaskId === action.payload.subtaskId
              ? { ...subtask, isCompleted: !subtask.isCompleted }
              : subtask
          );
          const updatedTask = { ...task, subtasks: updatedSubtasks };

          // Check if task should be completed
          const isTaskCompleted = updatedSubtasks.every(
            (subtask) => subtask.isCompleted
          );

          if (isTaskCompleted) {
            return null; // Will be filtered out below
          }

          return updatedTask;
        }
        return task;
      });

      // Find the completed task if any
      const completedTask = state.userTasks.find(
        (task) =>
          task.taskId === action.payload.taskId &&
          task.subtasks.every((subtask) =>
            subtask.subtaskId === action.payload.subtaskId
              ? !subtask.isCompleted
              : subtask.isCompleted
          )
      );

      return {
        userTasks: updatedTasks.filter((task): task is Task => task !== null),
        completedTasks: completedTask
          ? [...state.completedTasks, completedTask]
          : state.completedTasks,
      };
    }

    case "COMPLETE_TASK":
      return {
        userTasks: state.userTasks.filter(
          (task) => task.taskId !== action.payload.taskId
        ),
        completedTasks: [...state.completedTasks, action.payload],
      };

    default:
      return state;
  }
};
