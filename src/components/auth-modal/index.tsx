import {
  AUTH_HOME_ROUTE,
  REDIRECT_FACEBOOK_ROUTE,
  REDIRECT_GOOGLE_ROUTE,
} from "@/shared/lib";
import { Button, Dialog, DialogRoot, Icon, Text, Title } from "@/shared/ui";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { EmailContent } from "./email-content";

export type AuthenticationMode = "login" | "register";

interface AuthModalProps {
  render?: (
    setMode: React.Dispatch<React.SetStateAction<AuthenticationMode>>
  ) => React.ReactNode;
}

export const AuthModal = ({ render }: AuthModalProps) => {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<AuthenticationMode>("login");
  const [isEmail, setIsEmail] = useState(false);
  const router = useRouter();

  const goBack = () => {
    setIsEmail(false);
  };

  const handleAuthentication = () => {
    setOpen(false);
    router.push(AUTH_HOME_ROUTE);
  };

  const onOpenChange = (initialOpen: boolean) => {
    setOpen(initialOpen);
    setIsEmail(false);
  };

  return (
    <DialogRoot open={open} onOpenChange={onOpenChange}>
      <Dialog>
        {isEmail ? (
          <EmailContent
            handleAuthentication={handleAuthentication}
            mode={mode}
            goBack={goBack}
          />
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
              <>
                <Button
                  className="flex items-center gap-1 flex-1 w-full"
                  variant="outline"
                  as="link"
                  href={REDIRECT_GOOGLE_ROUTE}
                >
                  <Icon name="google" /> Sign {mode === "login" ? "in" : "up"}{" "}
                  with Google
                </Button>
                <Button
                  className="flex items-center gap-1 flex-1 w-full"
                  variant="outline"
                  as="link"
                  href={REDIRECT_FACEBOOK_ROUTE}
                >
                  <Icon name="facebook" className="fill-blue-800" /> Sign{" "}
                  {mode === "login" ? "in" : "up"} with Facebook
                </Button>
                <Button
                  className="flex items-center gap-1 flex-1 w-full"
                  variant="outline"
                  onClick={() => setIsEmail(true)}
                >
                  <Icon name="email" /> Sign {mode === "login" ? "in" : "up"}{" "}
                  with Email
                </Button>
              </>
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
              Click ???Sign Up??? to agree to High`s Terms of Service and
              acknowledge that High`s Privacy Policy applies to you.
            </Text>
          </div>
        )}
      </Dialog>
      {render && render(setMode)}
    </DialogRoot>
  );
};
