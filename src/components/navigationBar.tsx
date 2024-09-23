"use client";

import { Button } from "~/components/ui/button";
import { Menu } from "lucide-react";
import Image from "next/image";
import { useCurrentPage } from "~/contexts/currentPageContext";
import { Bell } from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";

export function NavigationBar() {
  const { currentPage } = useCurrentPage();
  const searchParams = useSearchParams();
  const router = useRouter();

  const toggleSidebar = () => {
    const currentSidebarState = searchParams.get("sidebarOpen") === "true";
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("sidebarOpen", (!currentSidebarState).toString());
    router.push(`?${newSearchParams.toString()}`);
  };

  return (
    <div className="NavigationBar flex h-16 w-full items-center justify-between gap-5 border-b border-neutral-800 bg-white px-6">
      <div className="flex items-center gap-5">
        <Button variant="ghost" size="icon" onClick={toggleSidebar}>
          <Menu className="h-8 w-8" />
        </Button>
      </div>
      <div className="flex items-center gap-5">
        <h1 className="text-2xl font-bold">{currentPage}</h1>
      </div>
      <div className="flex items-center gap-5">
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
        <Image
          src="/optiiflo-logo.svg"
          alt="Optiiflo Logo"
          height={40}
          width={113}
        />
      </div>
    </div>
  );
}
