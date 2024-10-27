import { Task } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TodoItem } from "@/components/ui/TodoItem";
import success_img from "@/assets/success.svg";

interface Props {
  completed: boolean;
  tasks?: Task[];
  onToggleSubTasks?: (taskId: string, subTaskId: string) => void;
}
export function TaskCard({ tasks = [], onToggleSubTasks }: Props) {
  const isAllTasksCompleted = tasks.every((task) =>
    task.subtasks.every((subtask) => subtask.isCompleted)
  );

  return (
    <div>
      <div className="text-sm font-semibold text-center">What to do next:</div>
      {isAllTasksCompleted ? (
        <div className="flex flex-col items-center gap-2">
          <Card className="w-[350px] bg-gray-100 mt-4">
            <CardHeader>
              <CardTitle className="text-center">
                You're all caught up!
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center">
              <img
                src={success_img}
                alt="success"
                className="w-64 h-64 m-auto"
              />
              <span className="leading-7 w-fit ">Nothing to do here</span>
            </CardContent>
          </Card>
          <Card className="w-[350px] bg-gray-100">
            <CardHeader>
              <CardTitle>Upcoming Tasks</CardTitle>
            </CardHeader>
            <CardContent>
              {tasks.length > 0 && <div>{/** TODO: Implement this */}</div>}
            </CardContent>
          </Card>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-2">
          {tasks.map(({ taskId, title, subtasks }) => (
            <Card className="w-[350px] bg-gray-100" key={taskId}>
              <CardHeader className="p-4 pb-0">
                <CardTitle>
                  {title}{" "}
                  {subtasks.filter(({ isCompleted }) => isCompleted).length}/
                  {subtasks.length}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-2">
                {subtasks.map(({ subtaskId, title, isCompleted }) => (
                  <TodoItem
                    key={subtaskId}
                    id={subtaskId}
                    title={title}
                    completed={isCompleted}
                    onToggle={() => onToggleSubTasks?.(taskId, subtaskId)}
                  />
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
