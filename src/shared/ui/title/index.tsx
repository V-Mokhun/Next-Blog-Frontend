import clsx from "clsx";
import { ElementType, HTMLAttributes } from "react";
import styles from "./title.module.css";

interface TitleProps extends HTMLAttributes<HTMLOrSVGElement> {
  as?: ElementType;
  children?: React.ReactNode;
  className?: string;
  size?: "2xl" | "xl" | "large" | "medium" | "base" | "small" | "xs";
  weight?: "normal" | "medium" | "bold";
}

export const Title = ({
  as: Tag = "h1",
  children,
  className,
  size = "base",
  weight = "bold",
}: TitleProps) => {
  const classes = clsx(className, {
    [styles.title]: true,
    "text-primary": true,
    "font-normal": weight === "normal",
    "font-medium": weight === "medium",
    "font-bold": weight === "bold",
    "text-xs": size === "xs",
    "text-base": size === "small",
    "text-2xl": size === "base",
    "text-3xl": size === "medium",
    "text-4xl mb-10": size === "large",
    "text-5xl mb-10": size === "xl",
    "text-[7vw] mb-10": size === "2xl",
  });

  return <Tag className={classes}>{children}</Tag>;
};
