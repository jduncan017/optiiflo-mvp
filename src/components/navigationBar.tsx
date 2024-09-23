"use client";

import { Button } from "~/components/ui/button";
import { Menu } from "lucide-react";
import { useSidebar } from "~/contexts/sidebarContext";
import Image from "next/image";
export function NavigationBar() {
  const { toggleSidebar } = useSidebar();

  return (
    <div className="NavigationBar flex h-20 w-full items-center justify-between gap-5 border-b border-neutral-800 bg-white px-6">
      <Button variant="ghost" size="icon" onClick={toggleSidebar}>
        <Menu className="h-8 w-8" />
      </Button>
      <Image
        src="/optiiflo-logo.svg"
        alt="Optiiflo Logo"
        height={40}
        width={113}
      />
    </div>
  );
}
