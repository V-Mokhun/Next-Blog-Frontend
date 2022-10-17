import clsx from "clsx";
import { ElementType, HTMLAttributes } from "react";
import styles from "./title.module.css";

interface TitleProps extends HTMLAttributes<HTMLOrSVGElement> {
  as?: ElementType;
  children?: React.ReactNode;
  className?: string;
  size?: "xl" | "large" | "medium" | "small" | "xs";
  weight?: "normal" | "medium" | "bold";
}

export const Title = ({
  as: Tag = "h1",
  children,
  className,
  size = "medium",
  weight = "bold",
}: TitleProps) => {
  const classes = clsx(className, {
    [styles.title]: true,
    "font-normal": weight === "normal",
    "font-medium": weight === "medium",
    "font-bold": weight === "bold",
    "text-xs": size === "xs",
    "text-base": size === "small",
    "text-2xl": size === "medium",
    "text-4xl mb-10": size === "large",
    "text-5xl mb-10": size === "xl",
  });

  return <Tag className={classes}>{children}</Tag>;
};

/* 

*/
