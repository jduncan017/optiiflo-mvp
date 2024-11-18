"use client";
import { useSearchParams, useRouter } from "next/navigation";
import EmailSidebar from "~/components/emailClient/emailSidebar";
import PlannerCard from "./plannerCard";
import TaskList from "./taskList";
import TaskFilterButton from "./taskFilterButton";
import { useEffect, Suspense } from "react";

export default function ProjectsPage() {
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
  const taskFilterButtons = [
    "Unscheduled",
    "Upcoming Due Dates",
    "In Progress",
    "Snoozed",
  ];

  const setTaskFilter = (filter: string) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("filter", filter);
    router.push(`?${newSearchParams.toString()}`);
  };

  useEffect(() => {
    setTaskFilter(taskFilter);
  }, [taskFilter, setTaskFilter]);

  return (
    <div className="EmailClient flex h-full w-full bg-gray-100">
      <EmailSidebar />
      <div className="PageContent flex h-full w-full gap-4 p-10">
        <div className="Tasks flex flex-grow flex-col gap-4">
          <Suspense fallback={<div>Loading...</div>}>
            <div className="TaskFilterButtons grid grid-cols-2 gap-2.5">
              {taskFilterButtons.map((button) => (
                <TaskFilterButton
                  key={button}
                  title={button}
                  isSelected={taskFilter === button}
                  setTaskFilter={setTaskFilter}
                />
              ))}
            </div>
            <TaskList taskFilter={taskFilter} />
          </Suspense>
        </div>
        <div className="WeekPlanner grid h-full w-fit grid-cols-2 gap-4 text-2xl tracking-widest">
          {weekdays.map((day) => (
            <PlannerCard key={day} cardType={day} />
          ))}
        </div>
      </div>
    </div>
  );
}
