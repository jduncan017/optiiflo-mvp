"use client";

export default function TaskListInfo() {
  return (
    <div className="CardStats mb-3 flex gap-4 text-sm font-light tracking-normal">
      <div className="flex items-center gap-1">
        <p className="StatNumber font-bold">10</p>
        <p className="StatLabel">Tasks</p>
      </div>
      <div className="flex items-center gap-1">
        <p className="StatNumber font-bold">10</p>
        <p className="StatLabel">Priority</p>
      </div>
      <div className="flex items-center gap-1">
        <p className="StatNumber font-bold">10</p>
        <p className="StatLabel">Est. Hours</p>
      </div>
    </div>
  );
}
