import { AxiosError } from "axios";

export const throwError = (error: any) => {
  if (typeof error === "string") {
    throw new Error(error);
  }

  if (typeof error?.message === "string") {
    throw new Error(error.message);
  }

  if (error instanceof AxiosError) {
    if (error.response) {
      throw new Error(error.response.data);
    } else if (error.request) {
      throw new Error("Something went wrong...");
    } else {
      throw new Error(error.message);
    }
  }

  throw new Error("Something went wrong...");
};
