"use client";
import { SquareArrowOutUpRight, Ellipsis, Clock } from "lucide-react";
import type { TaskData } from "~/lib/taskData";

export default function Task({ task }: { task: TaskData }) {
  return (
    <div className="Task border-G2 flex w-full items-center justify-between rounded-lg border bg-blue-50 px-4 py-2.5 hover:cursor-grab hover:bg-blue-100">
      <div className="TaskLeftSide flex flex-col">
        <div className="TaskTitleContainer hover:text-P2 flex w-fit items-center gap-2 hover:underline">
          <p className="TaskTitle cursor-pointer font-bold">{task.title}</p>
          <div className="TaskButtonContainer hover:text-P2">
            <SquareArrowOutUpRight className="h-4 w-4 cursor-pointer" />
          </div>
        </div>
        <div className="TaskDetails text-G4 flex items-center gap-2">
          <p className="CompanyName hover:text-P2 cursor-pointer underline">
            {task.companyName}
          </p>
          <p className="Divider text-G2">|</p>
          <p className="Project hover:text-P2 cursor-pointer underline">
            {task.projectName}
          </p>
          <p className="Divider text-G2">|</p>
          <div className="HoursContainer hover:text-P2 flex cursor-pointer items-center gap-1.5 underline">
            <Clock className="h-4 w-4" />
            <div className="Hours flex items-center gap-0.5">
              <p className="Hours">{task.timeSpent}</p>
              <p className="HoursDivider">/</p>
              <p className="HoursLabel">{task.timeBudget}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="TaskButtons text-G4 flex items-center gap-4">
        <div className="TaskButtonContainer hover:text-P2">
          <Ellipsis className="h-7 w-7 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
