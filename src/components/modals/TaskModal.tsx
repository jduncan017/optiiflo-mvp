import type { TaskData } from "~/lib/taskData";
import TextInput from "~/components/inputs/TextInput";
import { RadioGroupInput } from "~/components/inputs/RadioGroupInput";
import { Button } from "~/components/ui/button";
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
    <div className="TaskModalContainer flex max-w-[700px] flex-col gap-4">
      <div className="TaskModalHeader border-b border-G2">
        <TextInput
          name="title"
          defaultValue={task?.title ?? "Task Name"}
          inputClasses="text-2xl capitalize font-medium"
        />
      </div>
      <div className="TaskModalBody">
        <div className="PriorityContainer">
          <RadioGroupInput
            label="Priority"
            options={[
              { value: "high", label: "High" },
              { value: "medium", label: "Medium" },
              { value: "low", label: "Low" },
            ]}
          />
        </div>
        <div className="DescriptionContainer">
          <TextInput name="description" defaultValue={"Description"} />
        </div>
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
