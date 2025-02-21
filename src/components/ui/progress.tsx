"use client";

import * as React from "react";
import { Progress } from "radix-ui";

import { cn } from "~/lib/utils";

export default function ProgressComponent({
  value,
  className,
}: {
  value: number;
  className?: string;
}) {
  return (
    <Progress.Root
      className={cn(
        "relative h-6 w-full overflow-hidden rounded-full border border-G2 bg-G1",
        className,
      )}
    >
      <Progress.Indicator
        className="h-full w-full flex-1 bg-S2 transition-all dark:bg-gray-50"
        style={{ transform: `translateX(-${100 - (value ?? 0)}%)` }}
      />
    </Progress.Root>
  );
}

export { ProgressComponent };
