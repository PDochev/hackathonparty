import { Progress } from "@/components/ui/progress";

interface Props {
  value: number;
  userTitle: string;
  leftPoints: number;
}

export function ExpProgress({ userTitle, value, leftPoints }: Props) {
  return (
    <div className="w-[60%] h-full">
      <div className="relative">
        <Progress value={value} className="h-[2.4rem]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-l font-medium text-primary-foreground drop-shadow">
            {userTitle} {value}%
          </span>
        </div>
      </div>
      <div className="mt-3 text-center">
        Complete <span className="font-semibold">{leftPoints}</span> more tasks
        to level up
      </div>
    </div>
  );
}
