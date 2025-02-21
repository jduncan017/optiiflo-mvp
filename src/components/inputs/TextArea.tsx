import { forwardRef } from "react";
import { cn } from "~/lib/utils";
import InfoDialogue from "~/components/inputs/InfoDialogue";

interface FormInputProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "value"> {
  label?: string;
  error?: { message?: string };
  message?: string;
  inputClasses?: string;
}

const FormInput = forwardRef<HTMLTextAreaElement, FormInputProps>(
  ({ label, name, error, className, message, inputClasses, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          {label && (
            <label htmlFor={name} className={"InputLabel font-medium text-G5"}>
              {label}
            </label>
          )}
          {message && <InfoDialogue text={message} />}
        </div>
        <textarea
          id={name}
          name={name}
          ref={ref}
          className={cn(
            "FormInput placeholder:text-N3 min-h-[100px] w-full resize-y text-wrap rounded-md p-2 align-top text-G5 focus:outline-S3",
            inputClasses,
            error && "ring-1 ring-red-500",
            props.readOnly && "cursor-not-allowed bg-N1/60 text-G2",
            className,
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
