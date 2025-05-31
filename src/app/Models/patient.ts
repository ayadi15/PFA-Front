import { AdmissionHistory } from "./admission-history";

export interface Patient {
  patientID: number;
  firstname: string;
  lastname: string;
  gender?: string;
  date_of_birth?: string;
  medicalHistory: AdmissionHistory[];
  currentStatus?: 'admitted' | 'discharged' | 'under observation';
  admission_date?: string | Date;
  discharge_date?: string | Date;
  room_id?: number;
  emergency_contact?: string;
  insurance_provider?: string;
  waitingTime?: number;
}
