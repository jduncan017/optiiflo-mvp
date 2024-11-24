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
}

export default function TopBar({ titles }: TopBarProps) {
  const [selectedTitle, setSelectedTitle] = useState(titles[0]?.name ?? "");

  return (
    <div className="TopBar flex w-full items-center justify-start gap-3 bg-S3 px-8 py-5 text-white shadow-optii">
      {titles.map((title) => (
        <Button
          variant={selectedTitle === title.name ? "selected" : "ghost"}
          size="sm"
          className={cn(
            "flex items-center gap-2 bg-S4 shadow-optii",
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
  );
}

TopBar.displayName = "TopBar";
