import { Button, Dialog, DialogRoot, Icon, Text, Title } from "@/shared/ui";
import React, { useState } from "react";
import { EmailContent } from "./email-content";

interface AuthModalProps {
  render?: (
    setMode: React.Dispatch<React.SetStateAction<"login" | "register">>
  ) => React.ReactNode;
}

export type AuthenticationMode = "login" | "register";

export const AuthModal = ({ render }: AuthModalProps) => {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<AuthenticationMode>("login");
  const [isEmail, setIsEmail] = useState(false);

  const goBack = () => {
    setIsEmail(false);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <DialogRoot open={open} onOpenChange={setOpen}>
      <Dialog>
        {isEmail ? (
          <EmailContent closeModal={closeModal} mode={mode} goBack={goBack} />
        ) : (
          <div className="flex flex-1 flex-col justify-between h-full items-center my-5">
            <Title
              weight="normal"
              size="medium"
              className="mb-6 text-dark-500 font-georgia"
            >
              {mode === "login" ? "Welcome back." : "Join High."}
            </Title>
            <div className="flex flex-col max-w-[250] justify-center items-center gap-2">
              {mode === "login" ? (
                <>
                  <Button
                    className="flex items-center gap-1 flex-1 w-full"
                    variant="outline"
                  >
                    <Icon name="google" /> Sign in with Google
                  </Button>
                  <Button
                    className="flex items-center gap-1 flex-1 w-full"
                    variant="outline"
                  >
                    <Icon name="facebook" className="fill-blue-800" /> Sign in
                    with Facebook
                  </Button>
                  <Button
                    className="flex items-center gap-1 flex-1 w-full"
                    variant="outline"
                    onClick={() => setIsEmail(true)}
                  >
                    <Icon name="email" /> Sign in with Email
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    className="flex items-center gap-1 flex-1 w-full"
                    variant="outline"
                  >
                    <Icon name="google" /> Sign up with Google
                  </Button>
                  <Button
                    className="flex items-center gap-1 flex-1 w-full"
                    variant="outline"
                  >
                    <Icon name="facebook" className="fill-blue-800" /> Sign up
                    with Facebook
                  </Button>
                  <Button
                    className="flex items-center gap-1 flex-1 w-full"
                    variant="outline"
                    onClick={() => setIsEmail(true)}
                  >
                    <Icon name="email" /> Sign up with Email
                  </Button>
                </>
              )}
            </div>
            {mode === "login" ? (
              <Text>
                No account?{" "}
                <Button
                  variant="text"
                  className="text-green-500 text-base font-bold"
                  onClick={() => setMode("register")}
                >
                  Create one
                </Button>
              </Text>
            ) : (
              <Text>
                Already have an account?{" "}
                <Button
                  variant="text"
                  className="text-green-500 text-base font-bold"
                  onClick={() => setMode("login")}
                >
                  Sign in
                </Button>
              </Text>
            )}
            <Text className="max-w-[70%]" size="small" color="secondary">
              Click “Sign Up” to agree to High`s Terms of Service and
              acknowledge that High`s Privacy Policy applies to you.
            </Text>
          </div>
        )}
      </Dialog>
      {render && render(setMode)}
    </DialogRoot>
  );
};
