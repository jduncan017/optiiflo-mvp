import type { ReactNode } from "react";
import { cn } from "~/lib/utils";

export default function CardWrapper({
  children,
  className,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <div
      className={cn(
        "CardWrapper rounded-xl border border-G2 bg-white px-5 py-4 shadow-optii",
        className,
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
