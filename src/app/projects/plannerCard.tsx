"use client";

import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import CardWrapper from "~/components/CardWrapper";
import DragToAdd from "~/components/dragToAdd";
import TaskListInfo from "~/components/tasks/taskListInfo";
export default function PlannerCard({ cardType }: { cardType: string }) {
  return (
    <CardWrapper addClasses="w-[300px] flex flex-col">
      <div className="CardHeader flex w-full items-center justify-between">
        <h2 className="text-2xl font-bold tracking-wide">{cardType}</h2>
        <div className="Goto text-optiiOrange hover:text-optiiTeal">
          <Link href={`/myWeek/${cardType}`}>
            <button className="flex cursor-pointer items-center gap-1 p-0">
              <p className="text-sm">Goto</p>
              <SquareArrowOutUpRight className="h-4 w-4" />
            </button>
          </Link>
        </div>
      </div>
      <TaskListInfo />
      <DragToAdd />
    </CardWrapper>
  );
}
