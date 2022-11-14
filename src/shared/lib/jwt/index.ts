export type TokenGeneric = {
  exp: number;
  id: number;
};

export function parseJwt(token: string): TokenGeneric | null {
  try {
    return JSON.parse(Buffer.from(token.split(".")[1], "base64").toString());
  } catch (e) {
    return null;
  }
}

export function isTokenValid(token?: string): boolean {
  if (!token) return false;
  const nowUnix = (+new Date() / 1e3) | 0;
  const decodedToken = parseJwt(token);
  if (decodedToken === null) return false;
  return decodedToken.exp > nowUnix;
}
