"use client";
import { Plus } from "lucide-react";
import { useModal } from "~/contexts/ModalContext";
import TaskModal from "~/components/modals/TaskModal";

export default function AddTaskArea({ text }: { text: string }) {
  const { showModal } = useModal();

  return (
    <div
      className="AddTaskArea flex flex-grow flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-G2 p-2 text-G3 hover:cursor-pointer hover:border-P1 hover:text-P3"
      onClick={() =>
        showModal(
          <TaskModal
            task={null}
            isEditing={false}
            onSave={() => console.log("save")}
            onDelete={() => console.log("delete")}
            onCancel={() => console.log("cancel")}
          />,
        )
      }
    >
      <p className="text-sm">{text}</p>
      <Plus className="h-4 w-4" />
    </div>
  );
}
