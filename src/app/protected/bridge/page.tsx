"use client";

import { Mail, Send, Clock, Users, Trash2 } from "lucide-react";
import { useState } from "react";
import { EmailClientComponent } from "~/components/emailClient/emailClient";
import InnerSidebar from "~/components/emailClient/InnerSidebar";

export default function EmailPage() {
  const [selectedInbox, setSelectedInbox] = useState("Inbox");

  const InnerSidebarButtons = {
    Inbox: {
      icon: Mail,
      action: () => {
        setSelectedInbox("Inbox");
      },
    },
    Sent: {
      icon: Send,
      action: () => {
        setSelectedInbox("Sent");
      },
    },
    Scheduled: {
      icon: Clock,
      action: () => {
        setSelectedInbox("Scheduled");
      },
    },
    Contacts: {
      icon: Users,
      action: () => {
        setSelectedInbox("Contacts");
      },
    },
    Trash: {
      icon: Trash2,
      action: () => {
        setSelectedInbox("Trash");
      },
    },
  };
  return (
    <main className="flex h-full">
      <InnerSidebar
        Buttons={InnerSidebarButtons}
        selectedButton={selectedInbox}
      />
      <EmailClientComponent />
    </main>
  );
}
