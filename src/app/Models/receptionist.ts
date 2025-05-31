import { User } from "./user";

export interface Receptionist {
  receptionistID: number;
  user: User;
  desk_location?: string;
  languages_spoken?: string; // e.g., "English, Spanish"
}