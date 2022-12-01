import { axiosLocalInstance } from "../config";
import { throwError } from "../lib";
import { LogInValues, SignUpValues, SocialMedia, User } from "./types";

const USER_URL = "/api/user";

const REGISTER_URL = `${USER_URL}/register`;
const LOGIN_URL = `${USER_URL}/login`;
const LOGIN_VIA_SOCIAL_MEDIA_URL = `${USER_URL}/callback/`;

class UserApi {
  public async signUp(values: SignUpValues) {
    try {
      const { data } = await axiosLocalInstance.post<User>(
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
      const { data } = await axiosLocalInstance.post<User>(LOGIN_URL, {
        identifier: values.email,
        password: values.password,
      });

      return data;
    } catch (error) {
      return throwError(error);
    }
  }

  public async loginViaSocialMedia(
    accessToken?: string,
    socialMedia: SocialMedia = "google"
  ) {
    if (!accessToken) throw new Error("No access token provided");

    try {
      const { data } = await axiosLocalInstance.post<User>(
        `${LOGIN_VIA_SOCIAL_MEDIA_URL}${socialMedia}`,
        {
          access_token: accessToken,
        }
      );

      return data;
    } catch (error) {
      return throwError(error);
    }
  }
}

export const userApi = new UserApi();
