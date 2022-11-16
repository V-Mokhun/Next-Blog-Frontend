import { Button, Icon, Text, Title } from "@/shared/ui";
import { AuthenticationMode } from "..";
import { LogInForm } from "./LogInForm";
import { SignUpForm } from "./SignUpForm";

interface EmailContentProps {
  mode: AuthenticationMode;
  goBack: () => void;
  handleAuthentication: () => void;
}

export const EmailContent = ({
  mode,
  goBack,
  handleAuthentication,
}: EmailContentProps) => {
  return (
    <div className="flex flex-1 flex-col justify-center h-full max-w-[70%] items-center my-5">
      <Title
        weight="normal"
        size="medium"
        className="mb-6 text-dark-500 font-georgia"
      >
        {mode === "login" ? "Sign in with email" : "Sign up with email"}
      </Title>
      <Text className="mb-7">
        {mode === "login"
          ? "Enter your email and password to sign in to your account"
          : "Enter your email address, name, username and password to create an account."}
      </Text>
      {mode === "login" ? (
        <LogInForm handleAuthentication={handleAuthentication} />
      ) : (
        <SignUpForm handleAuthentication={handleAuthentication} />
      )}
      <Button
        onClick={goBack}
        variant="text"
        className="flex items-center text-green-400"
      >
        <Icon name="left-arrow" className="fill-green-400" />
        {mode === "login" ? "All sign in options" : "All sign up options"}
      </Button>
    </div>
  );
};
