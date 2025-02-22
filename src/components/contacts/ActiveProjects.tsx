import CardWrapper from "~/components/CardWrapper";
import Link from "next/link";
import { SquareArrowOutUpRight } from "lucide-react";
import Task from "../tasks/task";

const sampleTask = {
  id: "TASK-001",
  title: "Update Client Portal UI",
  companyId: "COMP-001",
  projectName: "Client Portal Redesign",
  timeSpent: 12.5,
  timeBudget: 20,
  priority: "high",
  snoozed: false,
  dueDate: "2024-11-25",
  assignee: "Sarah Chen",
  taskCreator: "Michael Rodriguez",
  assignedDate: "2024-11-15",
  attachments: [
    {
      type: "design",
      url: "https://storage.company.com/designs/portal-v2.fig",
      name: "Portal Design V2",
    },
  ],
  archived: false,
  subtasks: [
    {
      id: "ST-001",
      title: "Redesign login page",
      completed: true,
    },
    {
      id: "ST-002",
      title: "Implement new dashboard widgets",
      completed: false,
    },
  ],
};

export default function ActiveProjects() {
  return (
    <CardWrapper>
      <div className="CardHeader flex w-full items-center justify-between">
        <h2 className="text-2xl font-bold tracking-wide">Active Projects</h2>
        <div className="ViewAll text-P2 hover:text-S4">
          <Link href={`/myWeek/${null}`}>
            <button className="flex cursor-pointer items-center gap-1 p-0">
              <p className="text-sm">View All</p>
              <SquareArrowOutUpRight className="h-4 w-4" />
            </button>
          </Link>
        </div>
      </div>
      <div className="Layout flex flex-col gap-2">
        <Task task={sampleTask} />
        <Task task={sampleTask} />
      </div>
    </CardWrapper>
  );
}
