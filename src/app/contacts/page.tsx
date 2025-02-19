"use client";

import { useState } from "react";
import InnerSidebar from "~/components/emailClient/InnerSidebar";
import ContactOverview from "~/components/contacts/ContactOverview";
import { Store, User, BriefcaseBusiness } from "lucide-react";
import type { Organization, Individual } from "~/types/types";
import ContactList from "~/components/contacts/ContactList";

export default function ContactsPage() {
  const [selectedContactType, setSelectedContactType] = useState<string | null>(
    "Organizations",
  );
  const [selectedContact, setSelectedContact] = useState<
    Organization | Individual | null
  >(null);
  // const [selectedFilter, setSelectedFilter] = useState("All Contacts");

  const onContactTypeSelect = (contactType: string) => {
    setSelectedContactType(contactType);
    setSelectedContact(null);
  };

  const InnerSidebarButtons = {
    Organizations: {
      icon: Store,
      action: () => onContactTypeSelect("Organizations"),
    },
    Individuals: {
      icon: User,
      action: () => onContactTypeSelect("Individuals"),
    },
    Coworkers: {
      icon: BriefcaseBusiness,
      action: () => onContactTypeSelect("Coworkers"),
    },
  };

  const onContactSelect = (contact: Organization | Individual) => {
    setSelectedContactType(null);
    setSelectedContact(contact);
  };

  const onBack = () => {
    setSelectedContact(null);
    setSelectedContactType("Organizations");
  };

  return (
    <div className="ContactsPage flex h-full w-full bg-G1">
      <InnerSidebar
        Buttons={InnerSidebarButtons}
        selectedButton={selectedContactType}
      />
      {selectedContact ? (
        <ContactOverview contact={selectedContact} onBack={onBack} />
      ) : (
        <ContactList
          onContactSelect={onContactSelect}
          selectedContactType={selectedContactType ?? "Organizations"}
        />
      )}
    </div>
  );
}
