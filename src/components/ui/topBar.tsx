"use client";
import { useState } from "react";
import { Button } from "./button";
import { cn } from "~/lib/utils";

interface TopBarProps {
  titles: {
    name: string;
    icon: React.ReactNode;
    onClick: () => void;
  }[];
  addButton?: {
    label: string;
    icon?: React.ReactNode;
    onClick: () => void;
  };
}

export default function TopBar({ titles, addButton }: TopBarProps) {
  const [selectedTitle, setSelectedTitle] = useState(titles[0]?.name ?? "");

  return (
    <div className="TopBar flex w-full items-center justify-between gap-3 bg-S4 px-8 py-5 text-white shadow-sm">
      <div className="SelectButtons flex gap-3">
        {titles.map((title) => (
          <Button
            variant={selectedTitle === title.name ? "selected" : "ghost"}
            size="sm"
            className={cn(
              "bg-S5 flex items-center gap-2 shadow-optii",
              selectedTitle === title.name &&
                "bg-N1 text-black hover:cursor-default hover:bg-N1",
            )}
            onClick={() => {
              setSelectedTitle(title.name);
              title.onClick();
            }}
            key={title.name}
          >
            {title.icon && title.icon}
            <h3 className="text-sm font-medium">{title.name}</h3>
          </Button>
        ))}
      </div>
      {addButton && (
        <Button
          className="bg-S5 flex gap-2 shadow-optii"
          variant="ghost"
          size="sm"
          onClick={addButton.onClick}
        >
          {addButton.icon && addButton.icon}
          <p className="text-sm font-medium">{addButton.label}</p>
        </Button>
      )}
    </div>
  );
}

TopBar.displayName = "TopBar";
