"use client";
import { Plus } from "lucide-react";
import { useState } from "react";
import TopBar from "~/components/ui/topBar";

export default function CalendarPage() {
  const [selectedTab, setSelectedTab] = useState("Month");
  const topBarTitles = [
    {
      name: "Month",
      icon: "",
      onClick: () => setSelectedTab("Month"),
    },
    {
      name: "Week",
      icon: "",
      onClick: () => setSelectedTab("Week"),
    },
    {
      name: "Day",
      icon: "",
      onClick: () => setSelectedTab("Day"),
    },
    {
      name: "Agenda",
      icon: "",
      onClick: () => setSelectedTab("Agenda"),
    },
  ];
  return (
    <div className="EmailClient flex h-full w-full bg-G1">
      <div className="flex h-full w-full flex-col items-center justify-center bg-G1 text-2xl">
        <TopBar
          titles={topBarTitles}
          addButton={{
            label: "Add Event",
            onClick: () => {
              console.log("Add Event");
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
