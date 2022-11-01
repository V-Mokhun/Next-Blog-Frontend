import { SignUpValues, userApi } from "@/shared/api";
import { Button, Input } from "@/shared/ui";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

interface SignUpFormProps {
  closeModal: () => void;
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

export const SignUpForm = ({ closeModal }: SignUpFormProps) => {
  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting,
      isValid,
      isSubmitted,
      isSubmitSuccessful,
    },
  } = useForm<SignUpValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: SignUpValues) => {
    await userApi.signUp(data);
  };

  // if (isSubmitSuccessful) {
  //   closeModal();
  // }

  return (
    <form
      className="text-center block w-full mb-5 max-w-[270px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-4">
        <Input
          inputClassName="text-center"
          register={register}
          id="Your email"
          label="email"
          error={errors.email?.message}
        />
      </div>
      <div className="mb-4">
        <Input
          inputClassName="text-center"
          register={register}
          id="Your name"
          label="name"
          error={errors.name?.message}
        />
      </div>
      <div className="mb-4">
        <Input
          inputClassName="text-center"
          register={register}
          id="Your username"
          label="username"
          error={errors.username?.message}
        />
      </div>
      <div className="mb-4">
        <Input
          inputClassName="text-center"
          register={register}
          type="password"
          id="Your password"
          label="password"
          error={errors.password?.message}
        />
      </div>
      <Button
        isDisabled={isSubmitting || (isSubmitted && !isValid)}
        type="submit"
        className="block w-full"
      >
        Sign up
      </Button>
    </form>
  );
};
