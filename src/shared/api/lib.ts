export const throwError = (error: unknown) => {
  if (typeof error === "string") {
    throw new Error(error);
  }

  throw error;
};
