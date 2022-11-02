import * as ToastPrimitive from "@radix-ui/react-toast";
import clsx from "clsx";
import React from "react";
import { Icon } from "../icon";
import { Title } from "../title";
import styles from "./toast.module.css";

interface ToastProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  type?: "info" | "success" | "error" | "warning";
}

export const Toast = ({ open, setOpen, title, type = "error" }: ToastProps) => {
  const classes = clsx({
    [styles.toast]: true,
    "relative shadow-md p-2 rounded-md flex justify-between overflow-hidden max-h-16 text-secondary bg-white":
      true,
  });

  let fill = "fill-error";
  let bg = "bg-error";

  if (type === "info") {
    fill = "fill-info";
    bg = "bg-info";
  } else if (type === "success") {
    fill = "fill-success";
    bg = "bg-success";
  } else if (type === "warning") {
    fill = "fill-warning";
    bg = "bg-warning";
  }

  return (
    <ToastPrimitive.Root className={classes} open={open} onOpenChange={setOpen}>
      <div className="p-2 my-2 flex flex-1 items-center gap-2">
        <Icon className={fill} name={`toast-${type}`} />
        <ToastPrimitive.ToastTitle asChild>
          <Title size="small">{title}</Title>
        </ToastPrimitive.ToastTitle>
      </div>
      <div
        className={clsx(
          styles.progress,
          bg,
          "absolute bottom-0 right-0 left-0 h-1 rounded-b-md"
        )}
      ></div>
      <ToastPrimitive.Close
        className="absolute right-1 top-1"
        aria-label="Close"
      >
        <Icon className="w-5 h-5" name="close" />
      </ToastPrimitive.Close>
    </ToastPrimitive.Root>
  );
};
