import { axiosLocalInstance } from "@/shared/api";
import { isTokenValid, parseJwt } from "@/shared/lib";
import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: "/lk/:path*",
};

const REFRESH_URL = "/api/user/refresh";

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  url.pathname = "/";

  const nowUnix = (+new Date() / 1e3) | 0;
  const token = req.cookies?.get("high_token");

  const newResponse = NextResponse.next();

  let tokenIsValid = isTokenValid(token);

  if (!tokenIsValid && !!token) {
    const {
      data: { token },
    } = await axiosLocalInstance.get<{ token: string }>(REFRESH_URL);
    const tokenDecoded = parseJwt(token)!;

    newResponse.cookies.set("high_token", token, {
      path: "/",
      maxAge: tokenDecoded.exp - nowUnix,
    });

    tokenIsValid = true;
  }

  return tokenIsValid ? newResponse : NextResponse.redirect(url);
}
