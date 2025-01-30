import { type ReactNode } from "react";
import { cn } from "~/lib/utils";

export default function ListItemWrapper({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "ListItemWrapper flex w-full items-center justify-between rounded-lg border border-G2 bg-blue-50 px-4 py-2.5 hover:bg-blue-100",
        className,
      )}
    >
      {children}
    </div>
  );
}
