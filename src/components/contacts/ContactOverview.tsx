import type { Organization, Individual } from "~/types/types";
import TopBar from "../ui/topBar";
import { Button } from "../ui/button";
import { ArrowLeft, Plus } from "lucide-react";

interface ContactOverviewProps {
  contact: Organization | Individual;
  onBack: () => void;
}

export default function ContactOverview({
  contact,
  onBack,
}: ContactOverviewProps) {
  const name =
    "name" in contact
      ? contact.name
      : contact.firstName + " " + contact.lastName;

  const topBarTitles = [
    { name: "Overview", onClick: () => console.log("Overview") },
    { name: "Projects", onClick: () => console.log("Projects") },
    { name: "Details", onClick: () => console.log("Details") },
    { name: "Communications", onClick: () => console.log("Communications") },
    { name: "Documents", onClick: () => console.log("Documents") },
  ];

  const addButton = {
    label: "Add Project",
    onClick: () => console.log("Add Project"),
    icon: <Plus className="h-4 w-4" />,
  };

  return (
    <div className="ContactOverviewContent flex h-full w-full flex-col bg-G1">
      <TopBar titles={topBarTitles} addButton={addButton}>
        <Button variant="secondary" size="sm" onClick={onBack}>
          <ArrowLeft className="h-5 w-5" />
          Back
        </Button>
      </TopBar>
      <div className="ContactOverview flex h-full w-full items-center justify-center bg-G1">
        <h1>{name}</h1>
      </div>
    </div>
  );
}
