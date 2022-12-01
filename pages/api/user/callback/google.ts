import { axiosInstance, SignUpData } from "@/shared/api";
import { API_GOOGLE_CALLBACK, parseJwt } from "@/shared/lib";
import { NextApiRequest, NextApiResponse } from "next";

export default async function googleCallback(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, body } = req;

  if (method !== "POST") {
    return res.status(405).json("Method is not allowed");
  }

  try {
    const { data } = await axiosInstance.get<SignUpData>(
      `${API_GOOGLE_CALLBACK}?access_token=123${body.access_token}`
    );
    const nowUnix = (+new Date() / 1e3) | 0;

    const tokenDecoded = parseJwt(data.jwt)!;

    res.setHeader("Set-Cookie", [
      `high_token=${data.jwt}; Max-Age=${tokenDecoded.exp - nowUnix}; Path=/`,
    ]);

    return res.status(201).json(data.user);
  } catch (error: any) {
    return res.status(500).json("Something went wrong..");
  }
}
