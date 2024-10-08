"use client";

import { useState } from "react";
import type { Email } from "~/lib/emailData";
import EmailSidebar from "./emailSidebar";
import EmailContent from "./emailContent";
import EmailList from "./emailList";
export function EmailClientComponent() {
  const [selectedEmail, setSelectedEmail] = useState<Email | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  function selectEmail(email: Email) {
    setSelectedEmail(email);
  }

  return (
    <div className="EmailClient flex h-full w-full bg-gray-100">
      <EmailSidebar />
      <EmailList
        selectEmail={selectEmail}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedEmailID={selectedEmail?.messageId}
      />
      {/* Email Content Window */}
      {selectedEmail && <EmailContent email={selectedEmail} />}
    </div>
  );
}
