"use client";
import CardWrapper from "~/components/CardWrapper";
import DragToAdd from "~/components/dragToAdd";
import Task from "~/components/tasks/task";
import TaskListInfo from "~/components/tasks/taskListInfo";

export default function TaskList() {
  return (
    <CardWrapper addClasses="w-full h-full flex flex-col">
      <h2 className="TaskListTitle mb-1 text-2xl font-semibold">TaskList</h2>
      <TaskListInfo />
      <div className="TaskList mb-1 flex flex-col gap-1">
        <Task />
        <Task />
        <Task />
      </div>
      <DragToAdd />
    </CardWrapper>
  );
}
