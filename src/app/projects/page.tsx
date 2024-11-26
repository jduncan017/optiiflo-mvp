"use client";
import { useSearchParams, useRouter } from "next/navigation";
import PlannerCard from "./plannerCard";
import TaskList from "../../components/tasks/taskList";
import { useEffect, Suspense, useCallback } from "react";
import TopBar from "~/components/ui/topBar";

export default function ProjectsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const taskFilter = searchParams.get("filter") ?? "Unscheduled";

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

  const topBarTitles = [
    {
      name: "Unscheduled",
      icon: "",
      onClick: () => setTaskFilter("Unscheduled"),
    },
    {
      name: "Upcoming Due Dates",
      icon: "",
      onClick: () => setTaskFilter("Upcoming Due Dates"),
    },
    {
      name: "In Progress",
      icon: "",
      onClick: () => setTaskFilter("In Progress"),
    },
    {
      name: "Snoozed",
      icon: "",
      onClick: () => setTaskFilter("Snoozed"),
    },
  ];

  return (
    <div className="PageContent flex h-[calc(100vh-theme(spacing.16))] w-full flex-col overflow-hidden bg-G1">
      <Suspense fallback={<div>Loading...</div>}>
        <TopBar titles={topBarTitles} />
        <div className="flex-1 overflow-y-auto px-10 pb-10 pt-10">
          <ProjectsContent taskFilter={taskFilter} />
        </div>
      </Suspense>
    </div>
  );
}

function ProjectsContent({ taskFilter }: { taskFilter: string }) {
  const weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Weekends",
  ];

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
