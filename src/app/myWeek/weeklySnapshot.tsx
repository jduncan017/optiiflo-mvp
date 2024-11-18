import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { BarChart } from "lucide-react";

export default function WeeklySnapshotCard() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const tasks = [4, 6, 2, 7, 5];
  const maxTasks = Math.max(...tasks);

  return (
    <Card className="OverviewCard flex h-full flex-col gap-6">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Weekly Snapshot</CardTitle>
        <BarChart className="h-6 w-6 text-optiiOrange dark:text-gray-400" />
      </CardHeader>
      <CardContent className="ContentContainer flex h-full flex-col items-center justify-between">
        <div className="BarChart flex h-full w-full items-end justify-center gap-4">
          {days.map((day, index) => (
            <div
              key={day}
              className={`${day} flex h-full flex-col items-center justify-end`}
            >
              <div
                className="Bars flex w-8 flex-col items-center justify-end rounded-sm bg-optiiTeal pb-1"
                style={{ height: `${((tasks[index] ?? 0) / maxTasks) * 100}%` }}
              >
                <span className="TaskNumber text-xs font-bold text-white">
                  {tasks[index]}
                </span>
              </div>
              <span className="mt-1 text-xs">{day}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
