import { cn } from "@/lib/utils";

import { ComponentProps, forwardRef } from "react";
interface Props extends ComponentProps<"input"> {
  // labelText?: React.ReactNode;
  id: string;
  checked?: boolean;
  labelAlign?: string;
  ringStyle?: string;
}
const Checkbox = forwardRef<HTMLInputElement, Props>(
  ({ id, checked, labelAlign = "right", ringStyle, ...props }, ref) => {
    return (
      <div className="flex cursor-pointer items-center">
        <input
          id={id}
          type="checkbox"
          className="custom-checkbox hidden accent-inherit"
          checked={checked}
          {...props}
          ref={ref}
        />
        <label
          htmlFor={id}
          className={cn(
            `flex cursor-pointer items-center  ${
              labelAlign === "right" ? "flex-row-reverwse" : ""
            } `,
          )}
        >
          <span
            className={cn(
              `ring-gray-gray6 overflow-hidden rounded custom-ring ${ringStyle}`,
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 200 200"
              className="h-4 w-4"
            >
              <mask fill="white" id="path-1-inside-1_476_5-37">
                <rect height="200" width="200"></rect>
              </mask>
              <rect
                mask="url(#path-1-inside-1_476_5-37)"
                strokeWidth="40"
                className="custom-checkbox-box"
                height="200"
                width="200"
              ></rect>
              <path
                strokeWidth="15"
                d="M52 111.018L76.9867 136L149 64"
                className="custom-checkbox-tick"
              ></path>
            </svg>
          </span>
        </label>
      </div>
    );
  },
);

Checkbox.displayName = "Checkbox";
export default Checkbox;
