import clsx from "clsx";
import { ElementType, HTMLAttributes } from "react";
import styles from "./text.module.css";

interface TextProps extends HTMLAttributes<HTMLOrSVGElement> {
  as?: ElementType;
  children?: React.ReactNode;
  className?: string;
  weight?: "normal" | "medium" | "bold";
  color?: "secondary" | "primary";
  size?: "base" | "xs" | "small" | "medium" | "large";
}

export const Text = ({
  as: Tag = "p",
  children,
  className,
  weight = "normal",
  color = "primary",
  size = "base",
}: TextProps) => {
  const classes = clsx(className, {
    [styles.text]: true,
    "font-normal": weight === "normal",
    "font-medium": weight === "medium",
    "font-bold": weight === "bold",
    "text-primary": color === "primary",
    "text-secondary": color === "secondary",
    "text-xs": size === "xs",
    "text-sm": size === "small",
    "text-base": size === "base",
    "text-lg": size === "medium",
    "text-xl": size === "large",
  });

  return <Tag className={classes}>{children}</Tag>;
};
