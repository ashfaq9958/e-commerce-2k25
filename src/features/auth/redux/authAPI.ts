import type { LoginPayload, RegisterPayload } from "../types/auth.types";
import { post } from "@/utils/http";

export const loginAPI = async (data: LoginPayload) => {
  const response = await post(`/auth/login`, data);
  return response?.data;
};

export const registerAPI = async (data: RegisterPayload) => {
  const response = await post(`/auth/register`, data);
  console.log("authAPI.ts ", response);
  return response.data;
};
