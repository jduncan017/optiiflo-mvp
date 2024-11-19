"use client";
import { TaskData } from "~/lib/taskData";

export default function TaskListInfo({ tasks }: { tasks: TaskData[] }) {
  const priorityCount = tasks.filter((task) => task.priority === "high").length;
  const estHours = tasks.reduce((acc, task) => acc + task.timeBudget, 0);

  return (
    <div className="CardStats mb-3 flex gap-4 text-sm font-light tracking-normal">
      <div className="flex items-center gap-1">
        <p className="StatNumber font-bold">{tasks.length}</p>
        <p className="StatLabel">Tasks</p>
      </div>
      <div className="flex items-center gap-1">
        <p className="StatNumber font-bold">{priorityCount}</p>
        <p className="StatLabel">High Priority</p>
      </div>
      <div className="flex items-center gap-1">
        <p className="StatNumber font-bold">{estHours}</p>
        <p className="StatLabel">Est. Hours</p>
      </div>
    </div>
  );
}
