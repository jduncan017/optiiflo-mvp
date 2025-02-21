import TopBar from "~/components/ui/topBar";
import { useState } from "react";
import { Plus } from "lucide-react";
import ContactItem from "~/components/contacts/contactItem";
import { organizations } from "~/lib/organizationsDats";
import { individuals } from "~/lib/individualsData";
import type { Organization, Individual } from "~/types/types";

interface ContactListProps {
  onContactSelect: (contact: Organization | Individual) => void;
  selectedContactType: string | null;
}

export default function ContactList({
  onContactSelect,
  selectedContactType,
}: ContactListProps) {
  const [selectedTab, setSelectedTab] = useState("All Contacts");

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

  function getContent() {
    switch (selectedContactType) {
      case "Organizations":
        return organizations.map((organization) => (
          <ContactItem
            key={organization.id}
            contact={organization}
            onContactSelect={onContactSelect}
          />
        ));
      case "Individuals":
        return individuals.map((individual) => (
          <ContactItem
            key={individual.id}
            contact={individual}
            onContactSelect={onContactSelect}
          />
        ));
    }
  }

  return (
    <div className="ContactsPage relative z-[1] flex h-full w-full bg-G1">
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
