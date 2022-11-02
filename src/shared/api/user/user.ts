import { axiosInstance } from "../config";
import { throwError } from "../lib";
import { SignUpValues } from "./types";

const REGISTER_URL = "/api/auth/local/register";

class UserApi {
  public async signUp(values: SignUpValues) {
    try {
      const response = await axiosInstance.post(REGISTER_URL, values);
      return response.data;
    } catch (error) {
      return throwError(error);
    }
  }
}

export const userApi = new UserApi();
