import { axiosInstance, SignUpData } from "@/shared/api";
import { API_FACEBOOK_CALLBACK, parseJwt } from "@/shared/lib";
import { NextApiRequest, NextApiResponse } from "next";

export default async function facebookCallback(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, body } = req;

  if (method !== "POST") {
    return res.status(405).json("Method is not allowed");
  }

  try {
    const { data } = await axiosInstance.get<SignUpData>(
      `${API_FACEBOOK_CALLBACK}?access_token=${body.access_token}`
    );
    console.log("FACEBOOK DATA: ", data);

    const nowUnix = (+new Date() / 1e3) | 0;

    const tokenDecoded = parseJwt(data.jwt)!;

    res.setHeader("Set-Cookie", [
      `high_token=${data.jwt}; Max-Age=${tokenDecoded.exp - nowUnix}; Path=/`,
    ]);

    return res.status(201).json(data.user);
  } catch (error) {
    return res.status(500).json("Something went wrong..");
  }
}
