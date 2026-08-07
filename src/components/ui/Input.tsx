import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", error, label, ...props }, ref) => {
    return (
      <div className="w-full flex flex-col gap-1.5">
        {label && (
          <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
            {label}
          </label>
        )}
        <input
          type={type}
          className={cn(
            "flex h-11 w-full rounded-xl border border-zinc-200 bg-white/50 px-4 py-2 text-sm text-zinc-900 ring-offset-background transition-all duration-200 placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/20 focus-visible:border-indigo-600 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800/80 dark:bg-zinc-950/40 dark:text-zinc-50 dark:focus-visible:ring-indigo-500/20 dark:focus-visible:border-indigo-500",
            {
              "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/20 dark:border-red-500/80 dark:focus-visible:border-red-500/80":
                !!error,
            },
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <span className="text-xs text-red-500 font-medium tracking-wide">
            {error}
          </span>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";
