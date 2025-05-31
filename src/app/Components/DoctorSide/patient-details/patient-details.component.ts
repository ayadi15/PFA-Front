import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AdmissionHistory } from 'src/app/Models/admission-history';
import { Patient } from 'src/app/Models/patient';
import { PatientService } from 'src/app/Services/patient.service';
@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {
  admissions : AdmissionHistory[] = [];
  constructor(
    public dialogref: MatDialogRef<PatientDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Patient, 
    private PS: PatientService
  ) {

    this.PS.GetPatientAdmissionHistory(data.patientID).subscribe((res) => {
      this.admissions = res;
      console.log('Patient Admissions:', this.admissions);
    });
  }

  ngOnInit(): void {}
}