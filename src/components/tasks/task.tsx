"use client";
import { SquareArrowOutUpRight, Ellipsis, Clock } from "lucide-react";
import { TaskData } from "~/lib/taskData";

export default function Task({ task }: { task: TaskData }) {
  return (
    <div className="Task flex w-full items-center justify-between rounded-lg border border-gray-400 bg-blue-50 px-4 py-2.5 hover:cursor-grab hover:bg-blue-100">
      <div className="TaskLeftSide flex flex-col">
        <div className="TaskTitleContainer flex w-fit items-center gap-2 hover:text-optiiOrange hover:underline">
          <p className="TaskTitle cursor-pointer font-bold">{task.title}</p>
          <div className="TaskButtonContainer hover:text-optiiOrange">
            <SquareArrowOutUpRight className="h-4 w-4 cursor-pointer" />
          </div>
        </div>
        <div className="TaskDetails flex items-center gap-2 text-gray-500">
          <p className="CompanyName cursor-pointer underline hover:text-optiiOrange">
            {task.companyName}
          </p>
          <p className="Divider text-gray-400">|</p>
          <p className="Project cursor-pointer underline hover:text-optiiOrange">
            {task.projectName}
          </p>
          <p className="Divider text-gray-400">|</p>
          <div className="HoursContainer flex cursor-pointer items-center gap-1.5 underline hover:text-optiiOrange">
            <Clock className="h-4 w-4" />
            <div className="Hours flex items-center gap-0.5">
              <p className="Hours">{task.timeSpent}</p>
              <p className="HoursDivider">/</p>
              <p className="HoursLabel">{task.timeBudget}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="TaskButtons flex items-center gap-4 text-gray-600">
        <div className="TaskButtonContainer hover:text-optiiOrange">
          <Ellipsis className="h-7 w-7 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
