"use client";

import { useState } from "react";
import InnerSidebar from "~/components/emailClient/InnerSidebar";
import { Store, User, BriefcaseBusiness } from "lucide-react";
import type { Organization, Individual } from "~/types/types";
import ContactList from "~/components/contacts/ContactList";
import { useCurrentPage } from "~/contexts/currentPageContext";
import { useRouter, useSearchParams } from "next/navigation";

export default function ClientsPage() {
  const { setCurrentPage } = useCurrentPage();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedClientType, setSelectedClientType] = useState<string | null>(
    "Organizations",
  );

  const onClientTypeSelect = (clientType: string) => {
    setSelectedClientType(clientType);
  };

  const InnerSidebarButtons = {
    Organizations: {
      icon: Store,
      action: () => {
        onClientTypeSelect("Organizations");
      },
    },
    Individuals: {
      icon: User,
      action: () => {
        onClientTypeSelect("Individuals");
      },
    },
    Coworkers: {
      icon: BriefcaseBusiness,
      action: () => {
        onClientTypeSelect("Coworkers");
      },
    },
  };

  const onClientSelect = (client: Organization | Individual) => {
    setSelectedClientType(null);
    const currentParams = new URLSearchParams(searchParams.toString());
    const path =
      "name" in client
        ? `/clients/organizations/${client.id}`
        : `/clients/individuals/${client.id}`;
    router.push(`${path}?${currentParams.toString()}`);
  };

  return (
    <main className="MainContainer flex h-full">
      <InnerSidebar
        Buttons={InnerSidebarButtons}
        selectedButton={selectedClientType ?? ""}
      />
      <ContactList
        onContactSelect={onClientSelect}
        selectedContactType={selectedClientType}
      />
    </main>
  );
}
