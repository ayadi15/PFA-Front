import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Patient } from '../Models/patient';
import { AdmissionHistory } from '../Models/admission-history';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  constructor(private http: HttpClient) {}

  GetAllPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>('http://localhost:3000/patients');
  }

  GetPatientByIdOne(id: number): Observable<Patient> {
    // return this.http.get<Patient>(`http://localhost:3000/patients/${id}`);
    return this.http.get<Patient>(`http://localhost:3000/patients?patientID=${id}`);
  }

  GetPatientById(id: number): Observable<Patient> {
  return this.http.get<Patient[]>(`http://localhost:3000/patients?patientID=${id}`)
    .pipe(
      map(patients => patients[0]) // Extract the first (and only) patient
    );
}

  GetPatientAdmissionHistory(id : number): Observable<AdmissionHistory[]> {
    return this.http.get<AdmissionHistory[]>(`http://localhost:3000/patients?patientID=${id}/admission-history`);
    
  }

  GetERPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>('http://localhost:3000/patients?currentStatus=admitted');
  }
  GetDischargedPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>('http://localhost:3000/patients?currentStatus=discharged');
  }
  GetPatientsUnderObservation(): Observable<Patient[]> {
    return this.http.get<Patient[]>('http://localhost:3000/patients?currentStatus=under observation');
  }
  GetPatientsByRoomId(roomId: number): Observable<Patient[]> {
    return this.http.get<Patient[]>(`http://localhost:3000/patients?room_id=${roomId}`);
  }

}
