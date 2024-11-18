import type { ReactNode } from "react";
import { cn } from "~/lib/utils";

export default function CardWrapper({
  children,
  addClasses,
  onClick,
}: {
  children: ReactNode;
  addClasses?: string;
  onClick?: () => void;
}) {
  return (
    <div
      className={cn(
        "CardWrapper shadow-optii rounded-xl border border-gray-400 bg-white px-5 py-4",
        addClasses,
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
