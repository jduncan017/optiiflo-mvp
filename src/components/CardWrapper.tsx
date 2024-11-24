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
        "CardWrapper border-G2 rounded-xl border bg-white px-5 py-4 shadow-optii",
        addClasses,
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
