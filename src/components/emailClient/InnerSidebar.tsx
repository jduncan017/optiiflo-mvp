"use client";

import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Menu, ArrowLeft } from "lucide-react";
import { cva } from "class-variance-authority";

interface IconConfig {
  icon: React.ComponentType;
  action: () => void;
}

interface InnerSidebarProps {
  Buttons: Record<string, IconConfig>;
  selectedButton: string | null;
}

const SidebarStyles = cva(
  "InnerSidebar h-full flex flex-col w-fit px-4 gap-3 bg-S5 px-1.5 py-8 transition-all duration-300 ",
  {
    variants: {
      isOpen: {
        true: "min-w-[240px]",
        false: "min-w-[80px]",
      },
    },
    defaultVariants: {
      isOpen: false,
    },
  },
);

const TooltipStyles = cva(
  "Tooltip fixed ml-[80px] pointer-events-none top-1/2 -translate-y-1/2 px-3 py-2 rounded-md bg-G5 text-white text-sm whitespace-nowrap z-50 shadow-lg opacity-0 transition-opacity duration-200",
  {
    variants: {
      show: {
        true: "group-hover:opacity-100",
        false: "opacity-0",
      },
    },
    defaultVariants: {
      show: false,
    },
  },
);

export default function InnerSidebar({
  Buttons,
  selectedButton,
}: InnerSidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="SidebarContainer relative h-full">
      <ul className={SidebarStyles({ isOpen })}>
        {Object.entries(Buttons).map(([key, button]) => (
          <li
            className={`${key} group relative ${isOpen ? "w-full" : "w-fit"}`}
            key={key}
          >
            <Button
              variant={key === selectedButton ? "ghostSelected" : "ghost"}
              size={"icon"}
              className={"h-12 w-full justify-start px-4"}
              onClick={() => {
                button.action();
              }}
            >
              <button.icon />
              {isOpen && (
                <p className="absolute left-[70px] text-lg font-medium">
                  {key}
                </p>
              )}
            </Button>
            {!isOpen && (
              <div
                className={TooltipStyles({ show: true })}
                style={{
                  position: "absolute",
                  left: "0%",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              >
                {key}
              </div>
            )}
          </li>
        ))}
        <li className={`group relative ${isOpen ? "w-full" : "w-fit"}`}>
          <Button
            variant="ghost"
            size="icon"
            className={"h-12 w-full justify-start px-4"}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {isOpen ? (
              <ArrowLeft className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
            {isOpen && (
              <p className="absolute left-[70px] text-lg font-medium">
                {isOpen ? "Close" : "Menu"}
              </p>
            )}
          </Button>
          {!isOpen && (
            <div
              className={TooltipStyles({ show: true })}
              style={{
                position: "absolute",
                left: "0%",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              Menu
            </div>
          )}
        </li>
      </ul>
    </div>
  );
}
