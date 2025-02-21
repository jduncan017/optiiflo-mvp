import { forwardRef } from "react";
import { cn } from "~/lib/utils";
import { ChevronDown } from "lucide-react";
import InfoDialogue from "~/components/inputs/InfoDialogue";

interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface SelectInputProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "value"> {
  label: string;
  options: SelectOption[];
  error?: { message?: string };
  message?: string;
  labelClasses?: string;
}

const SelectInput = forwardRef<HTMLSelectElement, SelectInputProps>(
  (
    { label, name, options, error, className, message, labelClasses, ...props },
    ref,
  ) => {
    return (
      <div className={cn("flex flex-col gap-2", className)}>
        <div className="flex items-center gap-2">
          <label
            htmlFor={name}
            className={cn("InputLabel text-N2", labelClasses)}
          >
            {label}
          </label>
          {message && <InfoDialogue text={message} />}
        </div>
        <div className="SelectWrapper relative">
          <select
            id={name}
            name={name}
            ref={ref}
            className={cn(
              "FormInput placeholder:text-N3 w-full appearance-none rounded-md bg-N1 py-2 pl-4 pr-10 text-G4",
              error && "ring-1 ring-red-500",
            )}
            {...props}
          >
            {options.map((option) => (
              <option
                key={option.value}
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-P3" />
        </div>
        {error?.message && (
          <p className="text-sm text-red-500">{error.message}</p>
        )}
      </div>
    );
  },
);

SelectInput.displayName = "SelectInput";

export default SelectInput;
