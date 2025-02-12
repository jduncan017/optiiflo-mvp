"use client";

import { Button } from "~/components/ui/button";
import { Clock, Menu } from "lucide-react";
import Image from "next/image";
import { useCurrentPage } from "~/contexts/currentPageContext";
import { Bell } from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";
import { SearchBar } from "~/components/ui/SearchBar";

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
    <div className="NavigationBar relative z-10 flex w-full items-center justify-between gap-5 bg-white px-7 py-2 shadow-optii">
      <div className="flex items-center gap-5">
        <Button variant="menu" size="icon" onClick={toggleSidebar}>
          <Menu className="h-7 w-7" />
        </Button>
        <div className="flex items-center gap-5">
          <h1 className="text-3xl font-bold capitalize">{currentPage}</h1>
        </div>
      </div>
      <SearchBar
        className="SearchBar border-none bg-transparent text-black"
        type="text"
        placeholder="Search, (CMD + K)..."
      />
      <div className="RightContainer flex w-fit items-center gap-6">
        <Image
          src="/optiiflo-logo.svg"
          alt="Optiiflo Logo"
          height={40}
          width={113}
        />
        <div className="QuickActions flex cursor-pointer items-center gap-2 font-medium hover:text-P2">
          <Clock className="h-6 w-6" />
          <p className="text-sm">Time Tracking</p>
        </div>
        <Bell className="h-6 w-6 cursor-pointer hover:text-P2" />
      </div>
    </div>
  );
}
