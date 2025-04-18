import { forwardRef } from "react";
import { cn } from "~/lib/utils";
import InfoDialogue from "~/components/ui/InfoDialogue";
import type { FieldError } from "react-hook-form";

interface TextInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "value"> {
  label: string;
  error?: FieldError;
  message?: string;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, name, error, className, message, ...props }, ref) => {
    return (
      <div className={cn("flex flex-col gap-2", className)}>
        <div className="flex items-center gap-2">
          <label htmlFor={name} className={"InputLabel text-N2"}>
            {label}
          </label>
          {message && <InfoDialogue text={message} />}
        </div>
        <input
          id={name}
          name={name}
          ref={ref}
          className={cn(
            "TextInput w-full rounded-md bg-N1 p-2 text-G4 placeholder:text-G3",
            error && "ring-1 ring-P1",
            props.readOnly && "cursor-not-allowed bg-N1/60 text-G2",
          )}
          {...props}
        />
        {error?.message && <p className="text-sm text-P1">{error.message}</p>}
      </div>
    );
  },
);

TextInput.displayName = "TextInput";

export default TextInput;
