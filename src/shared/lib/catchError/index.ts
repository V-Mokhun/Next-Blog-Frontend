import { AxiosError } from "axios";
import React, { SetStateAction } from "react";

export const catchError = (
  err: unknown,
  setError: React.Dispatch<SetStateAction<string>>
) => {
  if (typeof err === "string") {
    setError(err);
  } else if (err instanceof AxiosError || err instanceof Error) {
    setError(err.message);
  } else {
    setError("Something went wrong!");
  }
};
