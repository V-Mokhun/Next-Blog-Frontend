import { SITE_URL } from "@/shared/config";
import { isTokenValid, parseJwt } from "@/shared/lib";
import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: "/lk/:path*",
};

const REFRESH_URL = "/api/user/refresh";

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  url.pathname = "/logout";

  const nowUnix = (+new Date() / 1e3) | 0;
  const token = req.cookies?.get("high_token");

  const newResponse = NextResponse.next();

  let tokenIsValid = isTokenValid(token);

  if (!tokenIsValid && !!token) {
    const response = await fetch(`${SITE_URL}${REFRESH_URL}`);

    const { token }: { token: string } = await response.json();

    const tokenDecoded = parseJwt(token)!;

    newResponse.cookies.set("high_token", token, {
      path: "/",
      maxAge: tokenDecoded.exp - nowUnix,
    });

    tokenIsValid = true;
  }

  return tokenIsValid ? newResponse : NextResponse.redirect(url);
}
