import * as ToastPrimitive from "@radix-ui/react-toast";
import clsx from "clsx";
import React from "react";
import { Icon } from "../icon";
import { Title } from "../title";
import styles from "./toast.module.css";

interface ToastProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children?: React.ReactNode;
  title: string;
  duration?: number;
  type?: "info" | "success" | "error" | "warning";
}

export const Toast = ({
  open,
  setOpen,
  children,
  title,
  duration = 5000,
  type = "error",
}: ToastProps) => {
  const classes = clsx({
    [styles.toast]: true,
    "relative shadow-md p-2 rounded-md flex justify-between overflow-hidden max-h-16 text-secondary bg-white":
      true,
  });

  let color = "fill-error";

  if (type === "info") {
    color = "fill-info";
  } else if (type === "success") {
    color = "fill-success";
  } else if (type === "warning") {
    color = "fill-warning";
  }

  return (
    <ToastPrimitive.ToastProvider duration={duration} swipeDirection="right">
      {children}

      <ToastPrimitive.Root
        className={classes}
        open={open}
        onOpenChange={setOpen}
      >
        <div className="p-2 my-2 flex flex-1 items-center gap-2">
          <Icon className={color} name={`toast-${type}`} />
          <ToastPrimitive.ToastTitle asChild>
            <Title size="small">{title}</Title>
          </ToastPrimitive.ToastTitle>
        </div>
        <ToastPrimitive.Close
          className="absolute right-1 top-1"
          aria-label="Close"
        >
          <Icon className="w-5 h-5" name="close" />
        </ToastPrimitive.Close>
      </ToastPrimitive.Root>

      <ToastPrimitive.ToastViewport className="fixed bottom-4 right-4 z-toast flex flex-col gap-3 outline-none list-none w-80 m-0" />
    </ToastPrimitive.ToastProvider>
  );
};
