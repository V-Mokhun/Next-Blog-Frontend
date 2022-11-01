import { axiosInstance } from "../config";
import { SignUpValues } from "./types";

const REGISTER_URL = "/api/auth/local/register";

class UserApi {
  public async signUp(values: SignUpValues) {
    try {
      const response = await axiosInstance.post(REGISTER_URL, values);
      console.log("RESPONSE REGISTER: ", response);
    } catch (error) {
      console.log("ERROR REGISTER: ", error);
    }
  }
}

export const userApi = new UserApi();
