import { Button, Input } from "@/shared/ui";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

interface LogInFormProps {}

type FormValues = {
  email: string;
  password: string;
};

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

export const LogInForm = ({}: LogInFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid, isSubmitted },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormValues) => {};

  return (
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
  );
};
