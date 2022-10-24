import { Dialog, DialogRoot } from "@/shared/ui";
import React, { useState } from "react";

interface AuthModalProps {
  children?: React.ReactNode;
}

export const AuthModal = ({ children }: AuthModalProps) => {
  const [open, setOpen] = useState(false);

  return (
    <DialogRoot open={open} onOpenChange={setOpen}>
      <Dialog>Siema</Dialog>
      {children}
    </DialogRoot>
  );
};
