import { ConfirmationResult } from "firebase/auth";

export interface IUser {
  _id?: string;
  username: string;
  email: string;
  phoneNumber: string;
  password: string;
  role?: "admin" | "user";
}
export interface IUserInitial {
  loading: boolean;
  verificationCheck: ConfirmationResult | null;
  isVerified: boolean;
  user: IUser | null;
  err: string | boolean;
}
