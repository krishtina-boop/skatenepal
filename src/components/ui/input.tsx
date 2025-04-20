import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, value, ...props }, ref) => {
  return (
    <input
      type={type}
      value={value}
      className={cn(
        "flex h-11 w-full  rounded-md border border-gray-100 px-3.5 py-2  text-sm ring-offset-gray-100 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-gray-200 focus:border-secondary focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 lg:h-11",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
