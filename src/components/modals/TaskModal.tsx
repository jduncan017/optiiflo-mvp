import type { TaskData } from "~/lib/taskData";
import TextInput from "~/components/inputs/TextInput";
import { RadioGroupInput } from "~/components/inputs/RadioGroupInput";
import { Button } from "~/components/ui/button";
import TextArea from "~/components/inputs/TextArea";

type TaskModalProps = {
  task: TaskData | null;
  isEditing: boolean;
  onSave: () => void;
  onDelete: () => void;
  onCancel: () => void;
};

export default function TaskModal({
  task,
  isEditing,
  onSave,
  onDelete,
  onCancel,
}: TaskModalProps) {
  return (
    <div className="TaskModalContainer flex min-w-[600px] flex-col gap-8">
      <div className="TaskModalHeader border-b border-G2">
        <TextInput
          name="title"
          defaultValue={task?.title ?? "Task Name"}
          inputClasses="text-2xl capitalize font-medium"
        />
      </div>
      <div className="TaskModalBody flex flex-col gap-4">
        <RadioGroupInput
          label="Priority"
          options={[
            { value: "high", label: "High" },
            { value: "medium", label: "Medium" },
            { value: "low", label: "Low" },
          ]}
        />
        <TextArea
          name="description"
          defaultValue={"Description"}
          className="border border-G2 bg-G1"
        />
      </div>
      <div className="ButtonContainer flex w-full justify-end gap-2 pt-4">
        <Button variant="outline" onClick={onCancel} size="lg">
          Cancel
        </Button>
        <Button
          variant="secondary"
          className="text-white shadow-none"
          onClick={onSave}
          size="lg"
        >
          Save
        </Button>
      </div>
    </div>
  );
}
