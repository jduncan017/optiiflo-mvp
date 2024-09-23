"use client";

import { useState } from "react";
import Avatar from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { Home, Mail, Calendar, Users } from "lucide-react";
import { useSidebar } from "~/contexts/sidebarContext";
import { cva } from "class-variance-authority";

// Define the sidebar styles using cva
const sidebarStyles = cva(
  "Sidebar flex h-full flex-col gap-5 bg-neutral-900 py-8 transition-all duration-300 border-r border-black",
  {
    variants: {
      isOpen: {
        true: "w-64 px-6",
        false: "w-0 p-0 overflow-hidden",
      },
    },
    defaultVariants: {
      isOpen: false,
    },
  },
);

interface SidebarProps {
  initialActiveItem?: string;
}

export function SidebarComponent({
  initialActiveItem = "Email",
}: SidebarProps) {
  const [activeItem, setActiveItem] = useState(initialActiveItem);
  const { isSidebarOpen } = useSidebar();

  const menuItems = [
    { name: "Dashboard", icon: Home },
    { name: "Email", icon: Mail },
    { name: "My Week", icon: Calendar },
    { name: "Contacts", icon: Users },
  ];

  return (
    <div className={sidebarStyles({ isOpen: isSidebarOpen })}>
      {menuItems.map((item) => (
        <Button
          key={item.name}
          variant={activeItem === item.name ? "selected" : "default"}
          size="lg"
          onClick={() => setActiveItem(item.name)}
        >
          <item.icon className="mr-3 h-5 w-5" />
          {item.name}
        </Button>
      ))}
      <div className="AccountSettingsContainer mb-4 mt-auto text-white">
        <Button
          variant="ghost"
          className="flex w-full items-center justify-start rounded-sm py-10"
        >
          <Avatar
            fullName="Joshua Duncan"
            className="h-12 w-12"
            src="/josh-small.jpeg"
          />
          Account Settings
        </Button>
      </div>
    </div>
  );
}
