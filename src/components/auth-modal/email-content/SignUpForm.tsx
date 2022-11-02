import { SignUpValues, userApi } from "@/shared/api";
import { Button, Input, Toast } from "@/shared/ui";
import { yupResolver } from "@hookform/resolvers/yup";
import { AxiosError } from "axios";
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

  //! TOAST
  const [error, setError] = useState("Network error");
  const [toastOpen, setToastOpen] = useState(false);

  const onSubmit = async (data: SignUpValues) => {
    try {
      await userApi.signUp(data);
      handleRegister();
    } catch (err) {
      if (typeof err === "string") {
        setError(err);
      } else if (err instanceof AxiosError) {
        setError(err.message);
      }
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
      <button onClick={() => setToastOpen(true)}>open</button>
      {toastOpen && (
        <Toast open={toastOpen} setOpen={setToastOpen} title={error} />
      )}
    </>
  );
};
