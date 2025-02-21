"use client";

import { useState } from "react";
import type { Email } from "~/lib/emailData";
import InnerSidebar from "./InnerSidebar";
import EmailContent from "./emailContent";
import EmailList from "./emailList";
import TopBar from "../ui/topBar";
import { Clock, Mail, Pencil, Send, Trash2, Users } from "lucide-react";
export function EmailClientComponent() {
  const [selectedEmail, setSelectedEmail] = useState<Email | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTab, setSelectedTab] = useState("unread");

  function selectEmail(email: Email) {
    setSelectedEmail(email);
  }

  const topBarTitles = [
    {
      name: "Unread",
      icon: "",
      onClick: () => setSelectedTab("unread"),
    },
    {
      name: "Clients",
      icon: "",
      onClick: () => setSelectedTab("clients"),
    },
    {
      name: "Prospects",
      icon: "",
      onClick: () => setSelectedTab("prospects"),
    },
    {
      name: "Non-Business",
      icon: "",
      onClick: () => setSelectedTab("non-business"),
    },
  ];

  console.log(selectedTab);

  return (
    <div className="EmailClient relative z-[1] flex h-full w-full bg-G1">
      <EmailList
        selectEmail={selectEmail}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedEmailID={selectedEmail?.messageId}
        emailFilter={selectedTab}
      />
      {/* Email Content Window */}
      <div className="flex w-full flex-col">
        <TopBar
          titles={topBarTitles}
          addButton={{
            label: "Compose",
            onClick: () => {
              console.log("Compose");
            },
            icon: <Pencil className="h-4 w-4" />,
          }}
        />
        {selectedEmail && <EmailContent email={selectedEmail} />}
      </div>
    </div>
  );
}
