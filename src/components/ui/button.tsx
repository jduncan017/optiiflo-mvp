import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/lib/utils";

const buttonVariants = cva(
  "Button flex items-center rounded-md font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: " px-4 py-2 text-gray-50 hover:bg-G3 hover:shadow-optii",
        selected: "bg-S3 text-white hover:bg-S3 cursor-default shadow-optii",
        destructive: "bg-red-500 text-gray-50 hover:bg-red-400",
        secondary: "bg-S5 flex item-center gap-2 shadow-optii hover:bg-P2",
        secondarySelected: "bg-N1 text-black hover:cursor-default",
        ghost: "hover:bg-white hover:text-S4 hover:shadow-optii text-white",
        ghostSelected:
          "text-P2 hover:text-P2 hover:bg-G1 shadow-optii bg-G1 cursor-default",
        menu: "hover:bg-P2 hover:text-N1",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-md px-8",
        icon: "p-3 w-fit",
        smIcon: "p-2 w-fit",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
