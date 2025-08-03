export type UserRole = "user" | "admin";

export interface User {
  name: string;
  role: UserRole;
}
