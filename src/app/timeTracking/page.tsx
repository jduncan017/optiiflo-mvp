"use client";
import EmailSidebar from "~/components/emailClient/emailSidebar";
import TopBar from "~/components/ui/topBar";
import { Clock } from "lucide-react";
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
      <EmailSidebar />
      <div className="flex h-full w-full flex-col items-center justify-center bg-G1 text-2xl">
        <TopBar titles={topBarTitles} />
        <div className="flex h-full w-full items-center justify-center">
          <h2 className="text-4xl font-bold tracking-wide">{selectedTab}</h2>
        </div>
      </div>
    </div>
  );
}
