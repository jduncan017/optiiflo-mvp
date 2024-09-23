"use client";

import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Mail, Send, Clock, Users, Trash2, Menu } from "lucide-react";
import { cva } from "class-variance-authority";

const Inboxes = {
  Inbox: {
    icon: Mail,
    label: "Inbox",
  },
  Sent: {
    icon: Send,
    label: "Sent",
  },
  Scheduled: {
    icon: Clock,
    label: "Scheduled",
  },
  Contacts: {
    icon: Users,
    label: "Contacts",
  },
  Trash: {
    icon: Trash2,
    label: "Trash",
  },
  Menu: {
    icon: Menu,
    label: "Menu",
  },
};

const IconStyles = cva("h-6 w-6", {
  variants: {
    selected: {
      true: "text-optiiBlue",
      false: "hover:text-optiiTeal",
    },
  },
  defaultVariants: {
    selected: false,
  },
});

export default function EmailSidebar() {
  const [selectedInbox, setSelectedInbox] = useState("Inbox");

  return (
    <div className="flex flex-col items-center gap-6 bg-optiiTeal px-4 py-8">
      {Object.entries(Inboxes).map(([key, value]) => (
        <Button
          key={key}
          variant="ghost"
          size="icon"
          className="text-white hover:bg-white hover:text-optiiTeal"
          onClick={() => setSelectedInbox(key)}
        >
          <value.icon
            className={IconStyles({ selected: key === selectedInbox })}
          />
        </Button>
      ))}
    </div>
  );
}
