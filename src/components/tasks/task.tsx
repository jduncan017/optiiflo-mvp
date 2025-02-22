"use client";
import { SquareArrowOutUpRight, Ellipsis, Clock } from "lucide-react";
import type { TaskData } from "~/lib/taskData";
import ListItemWrapper from "~/components/wrappers/listItemWrapper";
import { useModal } from "~/contexts/ModalContext";
import TaskModal from "~/components/modals/TaskModal";
import { useRouter } from "next/navigation";
import { getOrganizationName } from "~/lib/taskData";

export default function Task({ task }: { task: TaskData }) {
  const { showModal } = useModal();
  const router = useRouter();

  return (
    <ListItemWrapper className="hover:cursor-grab">
      <div className="TaskLeftSide flex flex-col">
        <div
          className="TaskTitleContainer flex w-fit items-center gap-2 hover:text-P2 hover:underline"
          onClick={() => {
            showModal(
              <TaskModal
                task={task}
                isEditing={false}
                onSave={() => console.log("save")}
                onDelete={() => console.log("delete")}
                onCancel={() => console.log("cancel")}
              />,
            );
          }}
        >
          <p className="TaskTitle cursor-pointer font-bold">{task.title}</p>
          <div className="TaskButtonContainer hover:text-P2">
            <SquareArrowOutUpRight className="h-4 w-4 cursor-pointer" />
          </div>
        </div>
        <div className="TaskDetails flex items-center gap-2 text-G4">
          <p
            className="CompanyName cursor-pointer underline hover:text-P2"
            onClick={() => {
              router.push(`/clients/organizations/${task.companyId}`);
            }}
          >
            {getOrganizationName(task.companyId)}
          </p>
          <p className="Divider text-G2">|</p>
          <p className="Project cursor-pointer underline hover:text-P2">
            {task.projectName}
          </p>
          <p className="Divider text-G2">|</p>
          <div className="HoursContainer flex cursor-pointer items-center gap-1.5 underline hover:text-P2">
            <Clock className="h-4 w-4" />
            <div className="Hours flex items-center gap-0.5">
              <p className="Hours">{task.timeSpent}</p>
              <p className="HoursDivider">/</p>
              <p className="HoursLabel">{task.timeBudget}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="TaskButtons flex items-center gap-4 text-G4">
        <div className="TaskButtonContainer hover:text-P2">
          <Ellipsis className="h-7 w-7 cursor-pointer" />
        </div>
      </div>
    </ListItemWrapper>
  );
}
