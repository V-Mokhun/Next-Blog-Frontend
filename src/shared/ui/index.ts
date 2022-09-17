export { Button } from "./button";

/*
import clsx from "clsx";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode;
  color?: "primary" | "secondary";
  variant?: "solid" | "outline";
  size?: "small" | "normal";
  smallOnMobile?: boolean;
}

export const Button = ({
  className,
  children,
  color = "primary",
  variant = "solid",
  smallOnMobile = false,
  size = "normal",
  ...props
}: ButtonProps) => {
  const classes = clsx(className, {
    "font-normal rounded-3xl inline-block transition-colors disabled:opacity-25":
      true,
    "px-4 py-2 text-sm": size === "normal",
    "px-2 py-1 text-xs": size === "small",
    "text-white": variant === "solid",
    "bg-white text-primary border": variant === "outline",
    "bg-dark-400 hover:bg-dark-500": color === "primary" && variant === "solid",
    "bg-green-400 hover:bg-green-500":
      color === "secondary" && variant === "solid",
    "border-secondary hover:border-primary":
      color === "primary" && variant === "outline",
    "border-green-400 hover:border-green-500":
      color === "secondary" && variant === "outline",
    "px-2 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm": smallOnMobile,
  });

  return (
    <button className={classes} type="button" {...props}>
      {children}
    </button>
  );
};

*/
