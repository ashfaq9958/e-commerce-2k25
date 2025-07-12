import axios from "axios";
import type { LoginPayload, RegisterPayload } from "../types/auth.types";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const loginAPI = async (data: LoginPayload) => {
  const response = await axios.post(`${BASE_URL}/auth/login`, data);
  return response;
};

export const registerAPI = async (data: RegisterPayload) => {
  const response = await axios.post(`${BASE_URL}/auth/register`, data);
  return response;
};
