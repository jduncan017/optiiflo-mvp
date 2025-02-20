import CardWrapper from "~/components/CardWrapper";
import Link from "next/link";
import { SquareArrowOutUpRight } from "lucide-react";
import Task from "../tasks/task";

const sampleTask = {
    title: "Design Homepage",
    companyName: "Acme Corp",
    projectName: "Website Redesign",
    timeSpent: "5h",
    timeBudget: "10h",
  };

export default function ActiveProjects() {
    return (
        <CardWrapper>
        <div className="CardHeader flex w-full items-center justify-between">
          <h2 className="text-2xl font-bold tracking-wide">Active Projects</h2>
          <div className="ViewAll hover:text-S4 text-P2">
            <Link href={`/myWeek/${null}`}>
              <button className="flex cursor-pointer items-center gap-1 p-0">
                <p className="text-sm">View All</p>
                <SquareArrowOutUpRight className="h-4 w-4" />
              </button>
            </Link>
          </div>
          </div>
          <div className="TaskPreview flex flex-col gap-2">
            <Task task={sampleTask}/>
          </div>
          <div className="TaskPreview flex flex-col gap-2">
            <Task task={sampleTask}/>
          </div>
        </CardWrapper>

    );
}