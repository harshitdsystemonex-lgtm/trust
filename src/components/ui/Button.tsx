import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | "gradient";
  size?: "default" | "sm" | "lg" | "icon";
  isLoading?: boolean;
  href?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "default", size = "default", isLoading, href, children, ...props },
    ref
  ) => {
    const baseClass = cn(
      "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-98 cursor-pointer select-none",
      {
        "bg-indigo-600 text-white shadow-md hover:bg-indigo-700 hover:shadow-indigo-500/20 hover:shadow-lg dark:bg-indigo-500 dark:hover:bg-indigo-600":
          variant === "default",
        "bg-destructive text-destructive-foreground hover:bg-destructive/90":
          variant === "destructive",
        "border border-zinc-200 bg-transparent text-zinc-800 hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-900":
          variant === "outline",
        "bg-zinc-100 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800/80 dark:text-zinc-100 dark:hover:bg-zinc-800":
          variant === "secondary",
        "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900":
          variant === "ghost",
        "text-indigo-600 underline-offset-4 hover:underline dark:text-indigo-400":
          variant === "link",
        "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-indigo-500/20 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl hover:shadow-indigo-500/30 dark:from-blue-500 dark:to-indigo-500 dark:hover:from-blue-600 dark:hover:to-indigo-600":
          variant === "gradient",
      },
      {
        "h-10 px-5 py-2": size === "default",
        "h-9 rounded-lg px-3.5 text-xs": size === "sm",
        "h-12 rounded-2xl px-6 text-base": size === "lg",
        "h-10 w-10 p-0": size === "icon",
      },
      className
    );

    const spinner = (
      <svg
        className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    );

    if (href) {
      return (
        <Link href={href} className={baseClass}>
          {isLoading && spinner}
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={baseClass} disabled={isLoading || props.disabled} {...props}>
        {isLoading && spinner}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
