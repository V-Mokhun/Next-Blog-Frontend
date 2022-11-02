import * as ToastPrimitive from "@radix-ui/react-toast";
import React from "react";

interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <ToastPrimitive.ToastProvider duration={5000} swipeDirection="right">
      <div className="h-full">{children}</div>
      <ToastPrimitive.ToastViewport className="fixed bottom-4 right-4 z-toast flex flex-col gap-3 outline-none list-none w-80 m-0" />
    </ToastPrimitive.ToastProvider>
  );
};
