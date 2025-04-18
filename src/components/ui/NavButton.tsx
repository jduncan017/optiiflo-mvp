"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { cn } from "~/lib/utils";

export default function NavButton({
  children,
  href,
  className,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(href)}
      className={cn("NavButton w-fit", className)}
    >
      <div className="flex w-fit items-center gap-1 text-white hover:text-P2">
        <ArrowLeft />
        {children}
      </div>
    </button>
  );
}
