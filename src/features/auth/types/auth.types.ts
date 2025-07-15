export interface LoginPayload {
  identifier: string;
  password: string;
}

export type RegisterPayload = FormData;

export interface AuthState {
  isAuthenticated: boolean;
  user: any;
  isLoading: boolean;
  error: string | null;
}
