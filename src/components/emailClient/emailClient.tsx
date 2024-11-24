"use client";

import { useState } from "react";
import type { Email } from "~/lib/emailData";
import EmailSidebar from "./emailSidebar";
import EmailContent from "./emailContent";
import EmailList from "./emailList";
import TopBar from "../ui/topBar";
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
    <div className="EmailClient flex h-full w-full bg-G1">
      <EmailSidebar />
      <EmailList
        selectEmail={selectEmail}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedEmailID={selectedEmail?.messageId}
        emailFilter={selectedTab}
      />
      {/* Email Content Window */}
      <div className="flex w-full flex-col">
        <TopBar titles={topBarTitles} />
        {selectedEmail && <EmailContent email={selectedEmail} />}
      </div>
    </div>
  );
}
