export interface AdmissionHistory {
  admission_id: number;
  reason: string;
  admission_date: string | Date;
  discharge_date: string | Date;
  diagnosis: string;
  treatment?: string; // Optional field
  attending_physician?: string; // Optional field
  notes?: string;
}
