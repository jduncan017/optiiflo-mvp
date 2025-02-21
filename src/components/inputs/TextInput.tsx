import { forwardRef } from "react";
import { cn } from "~/lib/utils";
import InfoDialogue from "~/components/inputs/InfoDialogue";

interface FormInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "value"> {
  label?: string;
  error?: { message?: string };
  message?: string;
  inputClasses?: string;
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, name, error, className, message, inputClasses, ...props }, ref) => {
    return (
      <div className={cn("flex flex-col gap-2", className)}>
        <div className="flex items-center gap-2">
          {label && (
            <label htmlFor={name} className={"InputLabel text-G5"}>
              {label}
            </label>
          )}
          {message && <InfoDialogue text={message} />}
        </div>
        <input
          id={name}
          name={name}
          ref={ref}
          className={cn(
            "FormInput placeholder:text-N3 w-full rounded-md p-2 text-G5",
            inputClasses,
            error && "ring-1 ring-red-500",
            props.readOnly && "cursor-not-allowed bg-N1/60 text-G2",
          )}
          {...props}
        />
        {error?.message && (
          <p className="text-sm text-red-500">{error.message}</p>
        )}
      </div>
    );
  },
);

FormInput.displayName = "FormInput";

export default FormInput;
