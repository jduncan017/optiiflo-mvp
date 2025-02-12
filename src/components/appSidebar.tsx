"use client";

import Avatar from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { Home, Calendar, Users, Clock, Folder, Waypoints } from "lucide-react";
import { cva } from "class-variance-authority";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useCurrentPage } from "~/contexts/currentPageContext";

// Define the sidebar styles using cva
const sidebarStyles = cva(
  "Sidebar flex h-full flex-col gap-5 bg-G5 py-8 transition-all duration-300 border-r border-black",
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

export default function SidebarComponent() {
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const { currentPage, setCurrentPage } = useCurrentPage();

  useEffect(() => {
    setIsOpen(searchParams.get("sidebarOpen") === "true");
  }, [searchParams]);

  const menuItems = [
    { name: "My Week", icon: Home, href: "/dashboard?sidebarOpen=true" },
    { name: "Bridge", icon: Waypoints, href: "/bridge?sidebarOpen=true" },
    { name: "Projects", icon: Folder, href: "/projects?sidebarOpen=true" },
    { name: "Contacts", icon: Users, href: "/contacts?sidebarOpen=true" },
    { name: "Calendar", icon: Calendar, href: "/calendar?sidebarOpen=true" },
    {
      name: "Time Tracking",
      icon: Clock,
      href: "/timeTracking?sidebarOpen=true",
    },
  ];

  return (
    <div className={sidebarStyles({ isOpen })}>
      {menuItems.map((item) => (
        <Link href={item.href} key={item.name}>
          <Button
            key={item.name}
            variant={currentPage === item.name ? "selected" : "default"}
            size="lg"
            className="w-full text-nowrap"
            onClick={() => setCurrentPage(item.name)}
          >
            <item.icon className="mr-3 h-5 w-5" />
            {item.name}
          </Button>
        </Link>
      ))}
      <div className="AccountSettingsContainer mt-auto rounded-md bg-G3 text-white">
        <Button
          variant="default"
          className="flex w-full items-center gap-6 py-10 text-start"
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
