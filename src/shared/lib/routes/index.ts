import { API_URL } from "@/shared/config";

export const HOME_ROUTE = "/";
export const ABOUT_ROUTE = "/about";
export const CREATORS_ROUTE = "/creators";
export const MEMBERSHIP_ROUTE = "/membership";

export const AUTH_ROUTE = "/lk";
export const AUTH_HOME_ROUTE = `${AUTH_ROUTE}`;
export const PROFILE_ROUTE = `${AUTH_ROUTE}/profile`;

export const REDIRECT_GOOGLE_ROUTE = `${API_URL}/api/connect/google`;
export const REDIRECT_FACEBOOK_ROUTE = `${API_URL}/api/connect/facebook`;

export const API_GOOGLE_CALLBACK = `${API_URL}/api/auth/google/callback`;
export const API_FACEBOOK_CALLBACK = `${API_URL}/api/auth/facebook/callback`;
