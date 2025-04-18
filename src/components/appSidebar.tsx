"use client";

import Avatar from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { Home, Calendar, Users, Clock, Folder, Waypoints } from "lucide-react";
import { cva } from "class-variance-authority";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import { useCurrentPage } from "~/contexts/currentPageContext";
import { usePathname } from "next/navigation";

// Define the sidebar styles using cva
const sidebarStyles = cva(
  "Sidebar flex h-full flex-col gap-3 bg-G5 py-8 transition-all duration-300 border-r border-black",
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

function SidebarSkeleton() {
  return <div className="Sidebar h-full w-0 border-r border-black bg-G5" />;
}

function SidebarContent() {
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const { setCurrentPage } = useCurrentPage();
  const pathName = usePathname().split("/").pop();

  useEffect(() => {
    setIsOpen(searchParams.get("sidebarOpen") === "true");
  }, [searchParams]);

  const menuItems = [
    {
      name: "Dashboard",
      icon: Home,
      href: "/protected/dashboard?sidebarOpen=true",
    },
    {
      name: "Bridge",
      icon: Waypoints,
      href: "/protected/bridge?sidebarOpen=true",
    },
    {
      name: "Projects",
      icon: Folder,
      href: "/protected/projects?sidebarOpen=true",
    },
    {
      name: "Clients",
      icon: Users,
      href: "/protected/clients?sidebarOpen=true",
    },
    {
      name: "Calendar",
      icon: Calendar,
      href: "/protected/calendar?sidebarOpen=true",
    },
    {
      name: "Time Tracking",
      icon: Clock,
      href: "/protected/timeTracking?sidebarOpen=true",
    },
  ];

  function formatPageName(name: string) {
    return name.toLowerCase().replace(" ", "");
  }

  return (
    <div className={sidebarStyles({ isOpen })}>
      {menuItems.map((item) => (
        <Link href={item.href} key={item.name}>
          <Button
            key={item.name}
            variant={
              pathName?.toLowerCase() === formatPageName(item.name)
                ? "selected"
                : "default"
            }
            size="lg"
            className="w-full text-nowrap"
            onClick={() => setCurrentPage(item.name)}
          >
            <item.icon className="mr-3 h-5 w-5" />
            {item.name}
          </Button>
        </Link>
      ))}
      <div className="AccountSettingsContainer mt-auto border-t border-G4 pt-4">
        <Button
          variant="ghost"
          className="flex w-full items-center justify-center gap-4 text-start leading-5"
          size="lg"
        >
          <Avatar
            fullName="Joshua Duncan"
            className="h-8 w-8"
            src="/josh-small.jpeg"
          />
          Settings
        </Button>
      </div>
    </div>
  );
}

export default function SidebarComponent() {
  return (
    <Suspense fallback={<SidebarSkeleton />}>
      <SidebarContent />
    </Suspense>
  );
}
