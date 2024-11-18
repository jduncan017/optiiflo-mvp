import { Suspense } from "react";

export default function CalendarPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex h-full w-full items-center justify-center bg-gray-200 text-2xl tracking-widest">
        Calendar
      </div>
    </Suspense>
  );
}
