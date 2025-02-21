import { forwardRef } from "react";
import { cn } from "~/lib/utils";
import { RadioGroup } from "radix-ui";
import InfoDialogue from "./InfoDialogue";

interface RadioOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface RadioGroupInputProps {
  label: string;
  options: RadioOption[];
  defaultValue?: string;
  error?: { message?: string };
  message?: string;
  labelClasses?: string;
  onChange?: (value: string) => void;
}

export const RadioGroupInput = forwardRef<HTMLDivElement, RadioGroupInputProps>(
  (
    { label, options, error, message, labelClasses, defaultValue, onChange },
    ref,
  ) => {
    return (
      <div className={cn("flex gap-2")} ref={ref}>
        <div className="flex items-center gap-2">
          <label className={cn("InputLabel font-medium text-G5", labelClasses)}>
            {label}
          </label>
          {message && <InfoDialogue text={message} />}
        </div>
        <RadioGroup.Root
          className="flex gap-2.5"
          defaultValue={defaultValue}
          onValueChange={onChange}
        >
          {options.map((option) => (
            <div className="flex items-center" key={option.value}>
              <RadioGroup.Item
                className={cn(
                  "peer h-[18px] w-[18px] rounded-full border border-G4 bg-white",
                  "hover:bg-G1",
                  "disabled:cursor-not-allowed disabled:opacity-50",
                  "data-[state=checked]:bg-P2",
                  error && "border-red-500",
                )}
                value={option.value}
                id={option.value}
                disabled={option.disabled}
              >
                <RadioGroup.Indicator className="relative flex h-full w-full items-center justify-center after:block after:h-[8px] after:w-[8px] after:rounded-full after:bg-white after:content-['']" />
              </RadioGroup.Item>
              <label
                className={cn(
                  "pl-2 text-sm text-G4",
                  "peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
                )}
                htmlFor={option.value}
              >
                {option.label}
              </label>
            </div>
          ))}
        </RadioGroup.Root>
        {error?.message && (
          <p className="text-sm text-red-500">{error.message}</p>
        )}
      </div>
    );
  },
);

RadioGroupInput.displayName = "RadioGroupInput";

export default RadioGroupInput;
