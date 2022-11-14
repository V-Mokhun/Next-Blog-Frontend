import { axiosInstance, SignUpData } from "@/shared/api";
import { parseJwt } from "@/shared/lib";
import { NextApiRequest, NextApiResponse } from "next";

const REGISTER_URL = "/api/auth/local/register";

export default async function register(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, body } = req;

  if (method !== "POST") {
    return res.status(405).json("Method is not allowed");
  }

  try {
    const { data } = await axiosInstance.post<SignUpData>(REGISTER_URL, body);
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
