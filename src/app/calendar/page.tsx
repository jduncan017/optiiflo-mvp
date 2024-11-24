"use client";
import { useState } from "react";
import EmailSidebar from "~/components/emailClient/emailSidebar";
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
