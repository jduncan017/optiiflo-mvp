"use client";
import { SquareArrowOutUpRight, Ellipsis } from "lucide-react";

export default function Task() {
  return (
    <div className="Task flex w-full items-center justify-between rounded-lg border border-gray-400 bg-blue-50 px-4 py-2.5 hover:cursor-grab hover:bg-blue-100">
      <div className="TaskLeftSide flex flex-grow flex-col">
        <p className="TaskTitle font-bold">Task</p>
        <p className="CompanyName">Company Name</p>
      </div>
      <div className="TaskInfo flex items-center gap-4 px-10">
        <div className="TaskHours flex w-fit flex-col items-center justify-center font-light text-gray-500">
          <p className="TaskEstHours">Estimated</p>
          <div className="NumberHours flex items-center gap-1 font-bold">
            <p className="NumberHours">10</p>
            <p className="NumberHoursLabel">Hrs.</p>
          </div>
        </div>
      </div>
      <div className="TaskRightSide flex items-center gap-2">
        <SquareArrowOutUpRight className="h-5 w-5 cursor-pointer" />
        <Ellipsis className="h-7 w-7 cursor-pointer" />
      </div>
    </div>
  );
}
