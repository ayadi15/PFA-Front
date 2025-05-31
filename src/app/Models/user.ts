export interface User {
  userID: number;
  username: string;
  firstname: string;
  lastname: string;
  role: 'doctor' | 'nurse' | 'admin' | 'receptionist';
  number?: string; // phone number
  email?: string;
  hashed_password: string; // Not used in frontend directly, but included for full data
  address?: string;
  gender?: 'male' | 'female' | 'other';
  date_of_birth?: string; // ISO date string
  hire_date?: string; // ISO date string
  is_archived: 'yes' | 'no'; // Assuming this is how it's stored
  is_available?: 'yes' | 'no';
}