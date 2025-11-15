import { Document } from "mongoose";

export interface UserInterface extends Document {
  userName: string;
  email: string;
  password: string;
  role: "user" | "admin" | "seller";
  provider: "credentials" | 'google'
}
