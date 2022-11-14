import { axiosLocalInstance } from "../config";
import { throwError } from "../lib";
import { SignUpData, SignUpValues } from "./types";

const USER_URL = "/api/user";

const REGISTER_URL = `${USER_URL}/register`;

class UserApi {
  public async signUp(values: SignUpValues) {
    try {
      const { data } = await axiosLocalInstance.post<SignUpData["user"]>(
        REGISTER_URL,
        values
      );

      console.log(data);

      return data;
    } catch (error) {
      return throwError(error);
    }
  }
}

export const userApi = new UserApi();
