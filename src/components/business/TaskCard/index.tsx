import { Task } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TodoItem } from "@/components/ui/TodoItem";

interface Props {
  completed: boolean;
  tasks: Task[];
  onToggleSubTasks?: (taskId: string, subtaskId: string) => void;
}

export function TaskCard({ completed, tasks, onToggleSubTasks }: Props) {
  if (completed || tasks.length === 0) {
    return (
      <Card className="w-[350px] mx-auto bg-gray-100">
        <CardHeader>
          <CardTitle>You're all caught up!</CardTitle>
        </CardHeader>
        <CardContent>
          <span className="leading-7 w-fit">Nothing to do here</span>
        </CardContent>
      </Card>
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
