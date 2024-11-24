import * as React from "react";
import { Search } from "lucide-react";
import { cn } from "~/lib/utils";

const SearchBar = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => {
  return (
    <div className="flex w-full max-w-[400px] items-center rounded-md border border-G2 bg-gray-100 px-3 ring-offset-S2 transition-colors focus-within:ring-2 focus-within:ring-offset-2 dark:border-G4 dark:bg-gray-950 dark:ring-offset-gray-950 dark:focus-within:border-G2 dark:focus-within:ring-G2">
      <Search className="h-5 w-5 text-S4" />
      <input
        type={type}
        className={cn(
          "flex h-10 w-full bg-transparent px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-G3 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:file:text-gray-50 dark:placeholder:text-G2",
          className,
        )}
        ref={ref}
        {...props}
      />
    </div>
  );
});

SearchBar.displayName = "SearchBar";

export { SearchBar };
