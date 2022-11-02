import { AxiosError } from "axios";

export const throwError = (error: unknown) => {
  if (typeof error === "string") {
    throw new Error(error);
  } else if (error instanceof AxiosError) {
    throw new Error(error.message);
  } else {
    throw error;
  }
};
