import axios from "axios";
import { apiBaseUrl } from "../config/config";
import { LoginFormData, SignupFormData, UpdateFormData } from "../schemas/auth.schema";

const api = axios.create({
    baseURL: apiBaseUrl,
    timeout: 1000 * 60,
    withCredentials: true
});

export interface BaseApiResponse {
  message: string;
}

export interface AuthResponse extends BaseApiResponse {
  token: string;
}

export const loginRequest = async (
  formData: LoginFormData
): Promise<AuthResponse> => {
  const { data } = await api.post("/api/users/login", formData);
  return data;
};

export const signupRequest = async (
 formData: SignupFormData
): Promise<AuthResponse> => {
  const { data } = await api.post("/api/users/signup", {
    email: formData.email,
    name: formData.name,
    password: formData.password,
  });
  return data;
};

export const logoutRequest = async (): Promise<void> =>{
  await api.post("/api/users/logout");
};

export const updateUserRequest = async(data: UpdateFormData): Promise<BaseApiResponse> =>{
  const response = await api.post("/api/users/update", data);
  console.log(response);
  return response.data;
}