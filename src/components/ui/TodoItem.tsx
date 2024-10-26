import { cn } from "@/lib/utils";
import { Checkbox } from "./checkbox";

interface Props {
  title: string;
  completed: boolean;
  id: string;
  onToggle?: (id: string) => void;
}

export function TodoItem({ title, completed, id, onToggle }: Props) {
  return (
    <div className="flex items-center space-x-4 p-4">
      <Checkbox
        checked={completed}
        onCheckedChange={() => onToggle?.(id)}
        className="h-5 w-5"
      />
      <span
        className={cn(
          "flex-1 text-sm",
          completed && "text-gray-500 line-through"
        )}
      >
        {title}
      </span>
    </div>
  );
}
