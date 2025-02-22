import CardWrapper from "~/components/CardWrapper";
import Link from "next/link";
import { SquareArrowOutUpRight } from "lucide-react";
import { type TaskData } from "~/lib/taskData";
import Task from "../tasks/task";

interface UpcomingDueProps {
  tasks: TaskData[];
}

export default function UpcomingDue({ tasks }: UpcomingDueProps) {
  return (
    <CardWrapper className="UpcomingDue flex flex-col gap-4">
      <div className="CardHeader flex w-full items-center justify-between">
        <h2 className="text-2xl font-bold tracking-wide">Upcoming Due Dates</h2>
        <div className="ViewAll text-P2 hover:text-S4">
          <Link href={`/myWeek/${null}`}>
            <button className="flex cursor-pointer items-center gap-1 p-0">
              <p className="text-sm">View All</p>
              <SquareArrowOutUpRight className="h-4 w-4" />
            </button>
          </Link>
        </div>
      </div>
      <div className="Layout flex flex-col gap-2">
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </CardWrapper>
  );
}
