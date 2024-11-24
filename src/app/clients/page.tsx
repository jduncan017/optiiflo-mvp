"use client";
import EmailSidebar from "~/components/emailClient/emailSidebar";
import TopBar from "~/components/ui/topBar";
import { useState } from "react";

export default function ClientsPage() {
  const [selectedTab, setSelectedTab] = useState("All Clients");
  const topBarTitles = [
    {
      name: "All Clients",
      icon: "",
      onClick: () => setSelectedTab("All Clients"),
    },
    {
      name: "Active",
      icon: "",
      onClick: () => setSelectedTab("Active"),
    },
    {
      name: "Inactive",
      icon: "",
      onClick: () => setSelectedTab("Inactive"),
    },
    {
      name: "Archived",
      icon: "",
      onClick: () => setSelectedTab("Archived"),
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
