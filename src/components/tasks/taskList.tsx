"use client";
import CardWrapper from "~/components/CardWrapper";
import AddTaskArea from "~/components/tasks/dragToAdd";
import Task from "~/components/tasks/task";
import TaskListInfo from "~/components/tasks/taskListInfo";
import { taskData } from "~/lib/taskData";

export default function TaskList({ taskFilter }: { taskFilter: string }) {
  return (
    <CardWrapper addClasses="w-full min-h-fit flex-grow flex flex-col">
      <h2 className="TaskListTitle mb-1 text-2xl font-semibold">
        {taskFilter}
      </h2>
      <TaskListInfo tasks={taskData} />
      <div className="TaskList mb-2 flex flex-col gap-1.5">
        {taskData.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
      <AddTaskArea text="Click to add tasks" />
    </CardWrapper>
  );
}
