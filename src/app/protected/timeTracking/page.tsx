"use client";
import TopBar from "~/components/ui/topBar";
import { Clock, Plus } from "lucide-react";
import { useState } from "react";

export default function TimeTrackingPage() {
  const [selectedTab, setSelectedTab] = useState("Time Tracker");
  const topBarTitles = [
    {
      name: "Time Tracker",
      icon: <Clock />,
      onClick: () => setSelectedTab("Time Tracker"),
    },
    {
      name: "Dashboard",
      icon: null,
      onClick: () => setSelectedTab("Dashboard"),
    },
    {
      name: "Reports",
      icon: null,
      onClick: () => setSelectedTab("Reports"),
    },
    {
      name: "Projects",
      icon: null,
      onClick: () => setSelectedTab("Projects"),
    },
  ];

  return (
    <div className="EmailClient flex h-full w-full bg-G1">
      <div className="flex h-full w-full flex-col items-center justify-center bg-G1 text-2xl">
        <TopBar
          titles={topBarTitles}
          addButton={{
            label: "Add Time Entry",
            onClick: () => {
              console.log("Add Time Entry");
            },
            icon: <Plus className="h-4 w-4" />,
          }}
        />
        <div className="flex h-full w-full items-center justify-center">
          <h2 className="text-4xl font-bold tracking-wide">{selectedTab}</h2>
        </div>
      </div>
    </div>
  );
}
