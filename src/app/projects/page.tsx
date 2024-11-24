"use client";
import { useSearchParams, useRouter } from "next/navigation";
import PlannerCard from "./plannerCard";
import TaskList from "../../components/tasks/taskList";
import { useEffect, Suspense, useCallback } from "react";
import TopBar from "~/components/ui/topBar";

export default function ProjectsPage() {
  const topBarTitles = [
    {
      name: "Unscheduled",
      icon: "",
      url: "",
    },
    {
      name: "Upcoming Due Dates",
      icon: "",
      url: "",
    },
    {
      name: "In Progress",
      icon: "",
      url: "",
    },
    {
      name: "Snoozed",
      icon: "",
      url: "",
    },
  ];

  return (
    <div className="PageContent flex h-[calc(100vh-theme(spacing.16))] w-full flex-col overflow-hidden bg-G1">
      <TopBar titles={topBarTitles} />
      <div className="flex-1 overflow-y-auto px-10 pb-10 pt-10">
        <Suspense fallback={<div>Loading...</div>}>
          <ProjectsContent />
        </Suspense>
      </div>
    </div>
  );
}

function ProjectsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const taskFilter = searchParams.get("filter") ?? "Unscheduled";
  const weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Weekends",
  ];

  const setTaskFilter = useCallback(
    (filter: string) => {
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set("filter", filter);
      router.push(`?${newSearchParams.toString()}`);
    },
    [searchParams, router],
  );

  useEffect(() => {
    setTaskFilter(taskFilter);
  }, [taskFilter, setTaskFilter]);

  return (
    <div className="Tasks flex h-full min-h-fit flex-grow gap-4">
      <div className="TaskFilterButtonsContainer flex h-full min-h-fit flex-grow flex-col gap-4">
        <TaskList taskFilter={taskFilter} />
      </div>
      <div className="WeekPlanner grid h-full min-h-fit w-fit grid-cols-2 gap-4 text-2xl">
        {weekdays.map((day) => (
          <PlannerCard key={day} cardType={day} />
        ))}
      </div>
    </div>
  );
}
