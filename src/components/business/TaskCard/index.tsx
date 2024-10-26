import { Task } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TodoItem } from "@/components/ui/TodoItem";

interface Props {
  completed: boolean;
  tasks?: Task[];
}
export function TaskCard({ completed, tasks = [] }: Props) {
  return (
    <div>
      <div className="text-sm font-semibold text-center">What to do next:</div>
      {completed ? (
        <>
          <Card className="w-[350px] bg-gray-100">
            <CardHeader>
              <CardTitle>You're all caught up!</CardTitle>
            </CardHeader>
            <CardContent>
              {/* TODO: Insert an image */}
              <span className="leading-7 w-fit">Nothing to do here</span>
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
        </>
      ) : (
        <div className="flex flex-col items-center gap-2">
          {tasks.map(({ id, title, subtasks }) => (
            <Card className="w-[350px] bg-gray-100" key={id}>
              <CardHeader className="p-4 pb-0">
                <CardTitle>
                  {title}{" "}
                  {subtasks.filter(({ isCompleted }) => isCompleted).length}/
                  {subtasks.length}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-2">
                {subtasks.map(({ id, title, isCompleted }) => (
                  <TodoItem
                    key={id}
                    id={id}
                    title={title}
                    completed={isCompleted}
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
