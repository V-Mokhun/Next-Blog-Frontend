import { axiosInstance } from "@/shared/api";
import { parseJwt } from "@/shared/lib";
import { NextApiRequest, NextApiResponse } from "next";

const REFRESH_URL = "/auth/refreshToken";

export default async function refresh(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { cookies } = req;
  const nowUnix = (+new Date() / 1e3) | 0;

  try {
    const oldToken = cookies["high_token"];

    const {
      data: { token },
    } = await axiosInstance.post<{ token: string }>(REFRESH_URL, {
      token: oldToken,
    });

    const tokenDecoded = parseJwt(token)!;

    res.setHeader("Set-Cookie", [
      `high_token=${token}; Max-Age=${tokenDecoded.exp - nowUnix}; Path=/`,
    ]);

    res.status(200);
    res.send({ token });
  } catch (error) {
    console.log("REFRESH ERROR: ", error);
    // we don't want to send status 401 here.
    res.send(error);
  }
}
