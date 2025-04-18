"use client";

import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import CardWrapper from "~/components/CardWrapper";
import AddTaskArea from "~/components/tasks/dragToAdd";
import TaskListInfo from "~/components/tasks/taskListInfo";
import { taskData } from "~/lib/taskData";

export default function PlannerCard({ cardType }: { cardType: string }) {
  return (
    <CardWrapper className="flex min-h-[340px] w-[340px] flex-col">
      <div className="CardHeader flex w-full items-center justify-between">
        <h2 className="text-2xl font-bold tracking-wide">{cardType}</h2>
        <div className="Goto text-P2 hover:text-S4">
          <Link href={`/myWeek/${cardType}`}>
            <button className="flex cursor-pointer items-center gap-1 p-0">
              <p className="text-sm">Goto</p>
              <SquareArrowOutUpRight className="h-4 w-4" />
            </button>
          </Link>
        </div>
      </div>
      <TaskListInfo tasks={taskData} />
      <AddTaskArea text="Click to add or drag tasks here" />
    </CardWrapper>
  );
}
