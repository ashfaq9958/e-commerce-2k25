export interface LoginPayload {
  identifier: string;
  password: string;
}

export interface RegisterPayload {
  fullname: string;
  username: string;
  email: string;
  password: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: any;
  loading: boolean;
  error: string | null;
}
