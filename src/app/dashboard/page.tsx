"use client";

import React from "react";
import { Folder, Mail, CheckSquare } from "lucide-react";
import OverviewCard from "./overviewCard";
import TaskList from "../../components/tasks/taskList";
import ProjectWorkload from "./projectWorkload";
import WeeklySnapshotCard from "./weeklySnapshot";
import ProgressMeter from "./progressMeter";

export default function MyWeekPage() {
  return (
    <div className="OuterContainer bg-G1 flex h-full w-full flex-col overflow-hidden p-6">
      <div className="TopSectionContainer mb-6 grid h-[200px] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <OverviewCard
          icon={Folder}
          title="Projects"
          value="15 / 20"
          description="Open / Total"
        />
        <OverviewCard
          icon={Mail}
          title="Emails"
          value="8"
          description="Unread"
        />
        <WeeklySnapshotCard />
        <OverviewCard
          icon={CheckSquare}
          title="Important"
          value="5"
          description="Tasks marked important"
        />
      </div>

      <div className="BottomSectionContainer grid w-full flex-1 grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="TaskListContainer flex h-full flex-grow">
          <TaskList taskFilter="Unscheduled" />
        </div>
        <div className="flex h-full flex-col space-y-6">
          <ProgressMeter />
          <ProjectWorkload />
        </div>
      </div>
    </div>
  );
}
