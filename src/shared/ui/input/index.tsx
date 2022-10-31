import * as RadixLabel from "@radix-ui/react-label";
import clsx from "clsx";
import { HTMLProps } from "react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";
import { Icon } from "../icon";
import { Text } from "../text";
import styles from "./input.module.css";

interface InputProps<T extends FieldValues>
  extends HTMLProps<HTMLInputElement> {
  variant?: "underlined" | "outlined";
  id: string;
  label: Path<T>;
  subtext?: string;
  register: UseFormRegister<T>;
  hideLabel?: boolean;
  labelClassName?: string;
  inputClassName?: string;
  error?: string;
}

export const Input = <T extends FieldValues>({
  variant = "underlined",
  id,
  label,
  hideLabel,
  labelClassName,
  inputClassName,
  error,
  subtext,
  register,
  ...inputProps
}: InputProps<T>) => {
  const labelClasses = clsx(labelClassName, {
    "block text-primary mb-2 text-sm": true,
    "sr-only": hideLabel,
  });

  const inputClasses = clsx(inputClassName, {
    [styles.input]: true,
    [styles.outlined]: variant === "outlined",
    [styles.underlined]: variant === "underlined",
  });

  const { maxLength, minLength, required } = inputProps;

  return (
    <>
      <RadixLabel.Root className={labelClasses} htmlFor={id}>
        {id}
      </RadixLabel.Root>
      <div className="relative">
        <input
          className={inputClasses}
          id={id}
          {...register(label, {
            maxLength,
            minLength,
            required,
          })}
          {...inputProps}
        />
        {error && (
          <Icon name="error" className="absolute right-0 top-1 fill-error" />
        )}
      </div>
      {error && (
        <Text size="xs" className="mt-2 text-error">
          {error}
        </Text>
      )}
      {!error && subtext && (
        <Text className="mt-2" color="secondary" size="small">
          {subtext}
        </Text>
      )}
    </>
  );
};
