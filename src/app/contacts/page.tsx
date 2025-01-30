"use client";
import InnerSidebar from "~/components/emailClient/InnerSidebar";
import TopBar from "~/components/ui/topBar";
import { useState } from "react";
import { Plus, Store, User, BriefcaseBusiness } from "lucide-react";
import ContactItem from "~/components/contacts/contactItem";
import { organizations } from "~/lib/organizationsDats";
import { individuals } from "~/lib/individualsData";
export default function ContactsPage() {
  const [selectedTab, setSelectedTab] = useState("All Contacts");
  const [selectedContactType, setSelectedContactType] =
    useState("Organizations");

  const topBarTitles = [
    {
      name: "All Contacts",
      icon: "",
      onClick: () => setSelectedTab("All Contacts"),
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

  const InnerSidebarButtons = {
    Organizations: {
      icon: Store,
      action: () => {
        setSelectedContactType("Organizations");
      },
    },
    Individuals: {
      icon: User,
      action: () => {
        setSelectedContactType("Individuals");
      },
    },
    Coworkers: {
      icon: BriefcaseBusiness,
      action: () => {
        setSelectedContactType("Coworkers");
      },
    },
  };

  function getContent() {
    switch (selectedContactType) {
      case "Organizations":
        return organizations.map((organization) => (
          <ContactItem key={organization.id} contact={organization} />
        ));
      case "Individuals":
        return individuals.map((individual) => (
          <ContactItem key={individual.id} contact={individual} />
        ));
    }
  }

  return (
    <div className="ContactsPage flex h-full w-full bg-G1">
      <InnerSidebar
        Buttons={InnerSidebarButtons}
        selectedButton={selectedContactType}
      />
      <div className="Content flex h-full w-full flex-col items-center bg-N1">
        <TopBar
          titles={topBarTitles}
          addButton={{
            label: "Add Client",
            onClick: () => {
              console.log("Add Client");
            },
            icon: <Plus className="h-4 w-4" />,
          }}
        />
        <div className="ContactsList flex h-full w-full flex-col items-center gap-1 overflow-y-auto p-1 pb-[10px]">
          {getContent()}
        </div>
      </div>
    </div>
  );
}
