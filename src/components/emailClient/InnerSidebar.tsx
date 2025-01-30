"use client";

import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Menu } from "lucide-react";
import { cva } from "class-variance-authority";

interface IconConfig {
  icon: React.ComponentType;
  action: () => void;
}

interface InnerSidebarProps {
  Buttons: Record<string, IconConfig>;
  selectedButton: string;
}

const SidebarStyles = cva(
  "InnerSidebar h-full flex flex-col w-fit items-center gap-6 bg-S5 px-1.5 py-8 transition-all duration-300 overflow-hidden",
  {
    variants: {
      isOpen: {
        true: "min-w-[240px]",
        false: "min-w-[100px]",
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

export default function InnerSidebar({
  Buttons,
  selectedButton,
}: InnerSidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ul className={SidebarStyles({ isOpen })}>
        {Object.entries(Buttons).map(([key, button]) => (
          <li className={`${key} relative w-full px-4`} key={key}>
            <Button
              variant="ghost"
              className={ButtonStyles({
                selected: key === selectedButton,
              })}
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
