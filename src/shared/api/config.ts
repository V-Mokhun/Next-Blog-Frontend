import axios from "axios";
import { API_URL, SITE_URL } from "../config";

export const axiosInstance = axios.create({
  baseURL: API_URL,
});

export const axiosLocalInstance = axios.create({
  baseURL: SITE_URL,
});
