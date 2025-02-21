"use client";

import { useState, Suspense } from "react";
import InnerSidebar from "~/components/emailClient/InnerSidebar";
import ContactOverview from "~/components/contacts/ContactOverview";
import { Store, User, BriefcaseBusiness } from "lucide-react";
import type { Organization, Individual } from "~/types/types";
import ContactList from "~/components/contacts/ContactList";
import { useCurrentPage } from "~/contexts/currentPageContext";

export default function ContactsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ContactsContent />
    </Suspense>
  );
}

function ContactsContent() {
  const { setCurrentPage } = useCurrentPage();
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
      action: () => {
        onContactTypeSelect("Organizations");
      },
    },
    Individuals: {
      icon: User,
      action: () => {
        onContactTypeSelect("Individuals");
      },
    },
    Coworkers: {
      icon: BriefcaseBusiness,
      action: () => {
        onContactTypeSelect("Coworkers");
      },
    },
  };

  const onContactSelect = (contact: Organization | Individual) => {
    setSelectedContactType(null);
    setSelectedContact(contact);
    setCurrentPage(
      "name" in contact
        ? contact.name
        : `${contact.firstName} ${contact.lastName}`,
    );
  };

  const onBack = () => {
    setSelectedContact(null);
    setSelectedContactType("Organizations");
  };

  return (
    <main className="flex h-full">
      <InnerSidebar
        Buttons={InnerSidebarButtons}
        selectedButton={selectedContactType ?? ""}
      />
      {selectedContact ? (
        <ContactOverview contact={selectedContact} onBack={onBack} />
      ) : (
        <ContactList
          onContactSelect={onContactSelect}
          selectedContactType={selectedContactType}
        />
      )}
    </main>
  );
}
