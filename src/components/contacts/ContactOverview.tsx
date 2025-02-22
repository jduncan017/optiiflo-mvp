"use client";
import type { Organization, Individual } from "~/types/types";
import TopBar from "../ui/topBar";
import { Button } from "../ui/button";
import { ArrowLeft, Plus } from "lucide-react";
import ClientInfo from "./ClientInfo";
import UpcomingDue from "./UpcomingDueDates";
import ActiveProjects from "./ActiveProjects";
import Attachments from "./Attachments";
import { useRouter } from "next/navigation";
import { taskData } from "~/lib/taskData";

interface ContactOverviewProps {
  contact: Organization | Individual;
}

export default function ContactOverview({ contact }: ContactOverviewProps) {
  const router = useRouter();

  const topBarTitles = [
    { name: "Overview", onClick: () => console.log("Overview") },
    { name: "Projects", onClick: () => console.log("Projects") },
    { name: "Details", onClick: () => console.log("Details") },
    { name: "Communications", onClick: () => console.log("Communications") },
    { name: "Documents", onClick: () => console.log("Documents") },
  ];

  function onBack() {
    router.back();
  }

  const tasks = taskData.filter((task) => task.companyId === contact.id);

  const addButton = {
    label: "Add Project",
    onClick: () => console.log("Add Project"),
    icon: <Plus className="h-4 w-4" />,
  };

  return (
    <div className="ContactOverviewContent relative z-[1] flex h-full w-full flex-col bg-G1">
      <TopBar titles={topBarTitles} addButton={addButton}>
        <Button variant="secondary" size="sm" onClick={onBack}>
          <ArrowLeft className="h-5 w-5" />
          Back
        </Button>
      </TopBar>
      <div className="ContentLayout flex flex-1 flex-col gap-4 overflow-auto p-4">
        <div className="TopSection grid h-full w-full grid-cols-[2fr_3fr] gap-4">
          <ClientInfo contact={contact} />
          <UpcomingDue tasks={tasks} />
        </div>
        <div className="BottomSection grid h-full w-full grid-cols-[3fr_2fr] gap-4">
          <ActiveProjects />
          <Attachments />
        </div>
      </div>
    </div>
  );
}
