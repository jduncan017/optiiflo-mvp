"use client";

import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Mail, Send, Clock, Users, Trash2, Menu } from "lucide-react";
import { cva } from "class-variance-authority";

const IconStyles = cva("h-6 w-6", {
  variants: {
    selected: {
      true: "text-P2 hover:text-P2",
      false: "hover:text-S4",
    },
    open: {
      true: "text-P2 hover:text-P2",
      false: "hover:text-P2",
    },
  },
  defaultVariants: {
    selected: false,
    open: false,
  },
});

const SidebarStyles = cva(
  "Sidebar flex flex-col w-fit items-center gap-6 bg-S4 px-1.5 py-8 transition-all duration-300 overflow-hidden",
  {
    variants: {
      isOpen: {
        true: "min-w-[240px] items-start",
        false: "min-w-[100px] items-center",
      },
    },
    defaultVariants: {
      isOpen: false,
    },
  },
);

const ButtonStyles = cva(
  "h-12 w-full justify-start gap-3 text-white hover:bg-white hover:shadow-optii hover:text-S4",
  {
    variants: {
      selected: {
        true: "text-P2 hover:text-P2 hover:bg-G1 shadow-optii bg-G1 cursor-default",
        false: "hover:bg-white hover:text-S4",
      },
    },
    defaultVariants: {
      selected: false,
    },
  },
);

export default function EmailSidebar() {
  const [selectedInbox, setSelectedInbox] = useState("Inbox");
  const [isOpen, setIsOpen] = useState(false);

  const Inboxes = {
    Inbox: {
      icon: Mail,
      label: "Inbox",
      action: () => {
        console.log("Inbox action triggered");
      },
    },
    Sent: {
      icon: Send,
      label: "Sent",
      action: () => {
        console.log("Sent action triggered");
      },
    },
    Scheduled: {
      icon: Clock,
      label: "Scheduled",
      action: () => {
        console.log("Scheduled action triggered");
      },
    },
    Contacts: {
      icon: Users,
      label: "Contacts",
      action: () => {
        console.log("Contacts action triggered");
      },
    },
    Trash: {
      icon: Trash2,
      label: "Trash",
      action: () => {
        console.log("Trash action triggered");
      },
    },
  };

  return (
    <>
      <ul className={SidebarStyles({ isOpen })}>
        {Object.entries(Inboxes).map(([key, value]) => (
          <li className={`${key} relative w-full px-4`} key={key}>
            <Button
              variant="ghost"
              className={ButtonStyles({
                selected: key === selectedInbox,
              })}
              onClick={() => {
                value.action();
                setSelectedInbox(key);
              }}
            >
              <value.icon
                className={IconStyles({
                  selected: key === selectedInbox,
                })}
              />
              {isOpen && (
                <p className="absolute left-[70px] text-lg font-medium">
                  {value.label}
                </p>
              )}
            </Button>
          </li>
        ))}
        <li className="relative w-full px-4">
          <Button
            variant="ghost"
            className="h-12 w-full justify-start gap-3 text-white hover:bg-white hover:text-S4"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <Menu className="h-6 w-6" />
            {isOpen && (
              <p className="absolute left-[70px] text-lg font-medium">Menu</p>
            )}
          </Button>
        </li>
      </ul>
    </>
  );
}
