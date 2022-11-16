import { LogInValues, userApi } from "@/shared/api";
import { catchError } from "@/shared/lib";
import { Button, Input, Toast } from "@/shared/ui";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

interface LogInFormProps {
  handleAuthentication: () => void;
}

const schema = yup
  .object({
    email: yup
      .string()
      .email("Provide a valide email")
      .required("Email is required"),
    password: yup
      .string()
      .required("Password is required.")
      .min(6, "Password should be 6 chars min.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  })
  .required();

export const LogInForm = ({ handleAuthentication }: LogInFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid, isSubmitted },
  } = useForm<LogInValues>({
    resolver: yupResolver(schema),
  });
  const [error, setError] = useState("");
  const [toastOpen, setToastOpen] = useState(false);

  const onSubmit = async (data: LogInValues) => {
    try {
      await userApi.login(data);
      handleAuthentication();
      setToastOpen(false);
    } catch (err) {
      catchError(err, setError);
      setToastOpen(true);
    }
  };

  return (
    <>
      <form
        className="text-center block w-full mb-5 max-w-[270px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4">
          <Input
            inputClassName="text-center"
            register={register}
            id="Email"
            label="email"
            error={errors.email?.message}
          />
        </div>
        <div className="mb-4">
          <Input
            inputClassName="text-center"
            register={register}
            type="password"
            id="Password"
            label="password"
            error={errors.password?.message}
          />
        </div>
        <Button
          isDisabled={isSubmitting || (isSubmitted && !isValid)}
          type="submit"
          className="block w-full"
        >
          Log in
        </Button>
      </form>
      {toastOpen && (
        <Toast open={toastOpen} setOpen={setToastOpen} title={error} />
      )}
    </>
  );
};
