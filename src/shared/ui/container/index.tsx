import clsx from "clsx";
import React from "react";

interface ContainerProps {
  className?: string;
  children?: React.ReactNode;
}

export const Container = ({ className, children }: ContainerProps) => {
  const classes = clsx(className, "max-w-screen-xl mx-auto px-4");

  return <div className={classes}>{children}</div>;
};
