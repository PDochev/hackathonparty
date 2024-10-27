import { Task } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TodoItem } from "@/components/ui/TodoItem";
import success_img from "@/assets/success.svg";
import { ChevronDown } from "lucide-react";
interface Props {
  completed: boolean;
  tasks: Task[];
  onToggleSubTasks?: (taskId: string, subtaskId: string) => void;
}

export function TaskCard({ completed, tasks, onToggleSubTasks }: Props) {
  if (completed || tasks.length === 0) {
    return (
      <div className="flex flex-col items-center gap-2">
        <Card className="w-[350px] bg-gray-100 mt-4">
          <CardHeader>
            <CardTitle className="text-center">You're all caught up!</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center">
            <img src={success_img} alt="success" className="w-64 h-64 m-auto" />
            <span className="leading-7 w-fit ">Nothing to do here</span>
          </CardContent>
        </Card>
        <Card className="w-[350px] bg-gray-100">
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              Upcoming Tasks <ChevronDown className="h-4 w-4" />
            </CardTitle>
          </CardHeader>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-2">
      {tasks.map((task) => (
        <Card className="w-[350px] bg-gray-100" key={task.taskId}>
          <CardHeader className="p-4 pb-0">
            <CardTitle>
              {task.title}{" "}
              {task.subtasks.filter(({ isCompleted }) => isCompleted).length}/
              {task.subtasks.length}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-2">
            {task.subtasks.map((subtask) => (
              <TodoItem
                key={subtask.subtaskId}
                id={subtask.subtaskId}
                title={subtask.title}
                completed={subtask.isCompleted}
                onToggle={() =>
                  onToggleSubTasks?.(task.taskId, subtask.subtaskId)
                }
              />
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
