import { User } from "./user";

export interface Nurse {
  nurseID: number;
  user: User;
  department?: string;
  schedule?: string;
  years_of_experience?: string;
  certifications?: string;
}