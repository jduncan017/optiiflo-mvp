"use client";
import { Plus } from "lucide-react";

export default function AddTaskArea({ text }: { text: string }) {
  return (
    <div className="AddTaskArea border-G2 text-G3 flex flex-grow flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed p-2">
      <p className="text-sm">{text}</p>
      <Plus className="h-4 w-4" />
    </div>
  );
}
