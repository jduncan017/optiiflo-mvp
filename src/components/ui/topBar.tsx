"use client";
import { useState } from "react";
import { Button } from "./button";

interface TopBarProps {
  titles: {
    name: string;
    icon?: React.ReactNode;
    onClick: () => void;
  }[];
  addButton?: {
    label: string;
    icon?: React.ReactNode;
    onClick: () => void;
  };
  children?: React.ReactNode;
}

export default function TopBar({ titles, addButton, children }: TopBarProps) {
  const [selectedTitle, setSelectedTitle] = useState(titles[0]?.name ?? "");

  return (
    <div className="TopBar flex w-full items-center justify-between gap-3 bg-S4 px-8 py-3 text-white shadow-sm">
      {children}
      <div className="SelectButtons flex gap-3">
        {titles.map((title) => (
          <Button
            variant={
              selectedTitle === title.name ? "secondarySelected" : "secondary"
            }
            size="sm"
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
        <Button variant="secondary" size="sm" onClick={addButton.onClick}>
          {addButton.icon && addButton.icon}
          <p className="text-sm font-medium">{addButton.label}</p>
        </Button>
      )}
    </div>
  );
}

TopBar.displayName = "TopBar";
