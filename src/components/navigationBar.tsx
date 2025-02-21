"use client";

import { Button } from "~/components/ui/button";
import { Clock, Menu, Bell } from "lucide-react";
import Image from "next/image";
import { useCurrentPage } from "~/contexts/currentPageContext";
import { useSearchParams, useRouter } from "next/navigation";
import { SearchBar } from "~/components/ui/SearchBar";
import { useRef, useEffect, Suspense } from "react";

// Static part that loads immediately
function NavigationBarSkeleton() {
  return (
    <div className="NavigationBar relative z-10 flex h-[68px] w-full items-center justify-between gap-5 bg-white px-7 py-2 shadow-optii">
      <div className="flex items-center gap-5">
        <div className="MenuButton h-7 w-7 animate-pulse bg-G1" />
        <div className="TitleText h-8 w-32 animate-pulse bg-G1" />
      </div>
      <div className="SearchBar h-10 w-[400px] animate-pulse bg-G1" />
      <div className="RightContainer flex w-fit items-center gap-6">
        <Image
          src="/optiiflo-logo.svg"
          alt="Optiiflo Logo"
          height={40}
          width={113}
        />
        <div className="TimeTracking h-6 w-24 animate-pulse bg-G1" />
        <div className="BellIcon h-6 w-6 animate-pulse bg-G1" />
      </div>
    </div>
  );
}

// Interactive part that loads after
function NavigationBarContent() {
  const { currentPage } = useCurrentPage();
  const searchParams = useSearchParams();
  const router = useRouter();
  const searchBarRef = useRef<HTMLInputElement>(null);

  function toggleSidebar() {
    const currentSidebarState = searchParams.get("sidebarOpen") === "true";
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("sidebarOpen", (!currentSidebarState).toString());
    router.push(`?${newSearchParams.toString()}`);
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        searchBarRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="NavigationBar relative z-10 flex h-[68px] w-full items-center justify-between gap-5 bg-white px-7 py-2 shadow-optii">
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
        ref={searchBarRef}
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

// Main component with Suspense
export function NavigationBar() {
  return (
    <Suspense fallback={<NavigationBarSkeleton />}>
      <NavigationBarContent />
    </Suspense>
  );
}
