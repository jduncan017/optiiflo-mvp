"use client";

import Avatar from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { Home, Mail, Calendar, Users } from "lucide-react";
import { cva } from "class-variance-authority";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useCurrentPage } from "~/contexts/currentPageContext";

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

export default function SidebarComponent() {
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const { currentPage, setCurrentPage } = useCurrentPage();

  useEffect(() => {
    setIsOpen(searchParams.get("sidebarOpen") === "true");
  }, [searchParams]);

  const menuItems = [
    { name: "Dashboard", icon: Home, href: "/dashboard" },
    { name: "Email", icon: Mail, href: "/email" },
    { name: "My Week", icon: Calendar, href: "/myWeek" },
    { name: "Clients", icon: Users, href: "/clients" },
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
