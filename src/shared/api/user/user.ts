import { axiosLocalInstance } from "../config";
import { throwError } from "../lib";
import { LogInValues, SignUpData, SignUpValues } from "./types";

const USER_URL = "/api/user";

const REGISTER_URL = `${USER_URL}/register`;
const LOGIN_URL = `${USER_URL}/login`;

class UserApi {
  public async signUp(values: SignUpValues) {
    try {
      const { data } = await axiosLocalInstance.post<SignUpData["user"]>(
        REGISTER_URL,
        values
      );

      return data;
    } catch (error) {
      return throwError(error);
    }
  }

  public async login(values: LogInValues) {
    try {
      const { data } = await axiosLocalInstance.post<SignUpData["user"]>(
        LOGIN_URL,
        {
          identifier: values.email,
          password: values.password,
        }
      );

      return data;
    } catch (error) {
      return throwError(error);
    }
  }
}

export const userApi = new UserApi();
