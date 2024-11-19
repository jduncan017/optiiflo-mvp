"use client";
import { Plus } from "lucide-react";

export default function AddTaskArea({ text }: { text: string }) {
  return (
    <div className="AddTaskArea flex flex-grow flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-gray-400 p-2 text-gray-500">
      <p className="text-sm">{text}</p>
      <Plus className="h-4 w-4" />
    </div>
  );
}
