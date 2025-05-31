import { Component, OnInit } from '@angular/core';
import { AdmissionHistory } from 'src/app/Models/admission-history';
import { Patient } from 'src/app/Models/patient';
import { PatientService } from 'src/app/Services/patient.service';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';
import { PatientDetailsComponent } from '../patient-details/patient-details.component';
@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css'],
})
export class PatientListComponent implements OnInit {
  patients: Patient[] = [];
  erPatients: Patient[] = [];
  patientAdmissionHistory: AdmissionHistory[] = [];
  selectedPatient?: Patient;
  constructor(
    private PS: PatientService,
    private dialogref: MatDialog,
    private dial: MatDialog
  ) {}

  //  ngOnInit(): void {
  //   this.loadAllPatients();
  //   setTimeout(() => {
  //     this.onFilterERPatients();
  //   }, 500);
  // }

  ngOnInit(): void {
    this.loadAllPatients();
    this.loadERPatients();
  }
  loadERPatients(): void {
    this.PS.GetERPatients().subscribe((res) => {
      this.erPatients = res;
      console.log('ER Patients:', this.erPatients);
    });
  }

  loadAllPatients(): void {
    this.PS.GetAllPatients().subscribe((res) => {
      this.patients = res;
      console.log('All Patients:', this.patients);
    });
  }

  loadPatientById(id: number): void {
    console.log('Loading patient with ID:', id);

    this.PS.GetPatientById(id).subscribe((patient) => {
      this.selectedPatient = patient;
      console.log('Loaded patient:', this.selectedPatient);
    });
  }

  loadPatientAdmissionHistory(id: number): void {
    this.PS.GetPatientAdmissionHistory(id).subscribe((history) => {
      this.patientAdmissionHistory = history;
      console.log(
        'Admission History for Patient ID',
        id,
        ':',
        this.patientAdmissionHistory
      );
    });
  }
  calculateDays(
    admissionDate: string | Date,
    dischargeDate: string | Date
  ): number {
    const start = new Date(admissionDate);
    const end = new Date(dischargeDate);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }

  onPatientSelect(id: number): void {
    console.log('Selected Patient ID:', id);
    this.loadPatientById(id);
    this.loadPatientAdmissionHistory(id);
  }

  sendselectedtodetails(pid: number): void {
    const x = new MatDialogConfig();
    x.width = '160px';
    x.height = '160px';
    this.PS.GetPatientById(pid).subscribe((response: Patient) => {
      x.data = response;
      this.dial.open(PatientDetailsComponent, x);
    });
  }
}
