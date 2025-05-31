import { User } from "./user";

export interface Doctor {
  doctorID: number;
  user: User;
  department?: string;
  schedule?: string;
  specialization?: string;
  license_number?: string;
  years_of_experience?: string;
}