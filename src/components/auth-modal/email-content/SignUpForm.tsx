import { SignUpValues, userApi } from "@/shared/api";
import { catchError } from "@/shared/lib";
import { Button, Input, Toast } from "@/shared/ui";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

interface SignUpFormProps {
  handleRegister: () => void;
}

const schema = yup
  .object({
    email: yup
      .string()
      .email("Provide a valide email")
      .required("Email is required"),
    name: yup.string().required("Name is required"),
    username: yup
      .string()
      .required("Username is required")
      .min(6, "Username should be 6 chars min."),
    password: yup
      .string()
      .required("Password is required.")
      .min(6, "Password should be 6 chars min.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  })
  .required();

const inputs: { id: string; label: keyof SignUpValues }[] = [
  {
    id: "Your email",
    label: "email",
  },
  {
    id: "Your name",
    label: "name",
  },
  {
    id: "Your username",
    label: "username",
  },
  {
    id: "Your password",
    label: "password",
  },
];

export const SignUpForm = ({ handleRegister }: SignUpFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid, isSubmitted },
  } = useForm<SignUpValues>({
    resolver: yupResolver(schema),
  });

  const [error, setError] = useState("");
  const [toastOpen, setToastOpen] = useState(false);

  const onSubmit = async (data: SignUpValues) => {
    try {
      await userApi.signUp(data);
      handleRegister();
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
        {inputs.map((input) => (
          <div key={input.id} className="mb-4">
            <Input
              inputClassName="text-center"
              register={register}
              id={input.id}
              label={input.label}
              error={errors[input.label]?.message}
              type={input.label === "password" ? "password" : "text"}
            />
          </div>
        ))}
        <Button
          isDisabled={isSubmitting || (isSubmitted && !isValid)}
          type="submit"
          className="block w-full"
        >
          Sign up
        </Button>
      </form>
      {toastOpen && (
        <Toast open={toastOpen} setOpen={setToastOpen} title={error} />
      )}
    </>
  );
};
