import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface patient {
  firstName: string;
  lastName: string;
  gender: string;
  currentStatus: string;
  admission_date: string;
  discharge_date: string;
  emergency_contact: string;
  insurance_provider:string;
}

@Component({
  selector: 'app-patient-dialog',
  templateUrl: './patient-dialog.component.html',
  styleUrls: ['./patient-dialog.component.css']
})
export class PatientDialogComponent {
  patientForm: FormGroup;
  isEditMode = false;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<PatientDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: patient | null
  ) {
    this.isEditMode = !!data;

    this.patientForm = this.fb.group({
      firstName: [data?.firstName || '', Validators.required],
      lastName: [data?.lastName || '', Validators.required],
      gender: [data?.gender || '', Validators.required],
      currentStatus: [data?.currentStatus || '', Validators.required],
      admission_date: [data?.admission_date || '', [Validators.required, Validators.required]],
      discharge_date: [data?.discharge_date || '', Validators.required],
      emergency_contact: [data?.emergency_contact || '', Validators.required],
      insurance_provider: [data?.insurance_provider || '', Validators.required],
    });
  }

  onSave(): void {
    if (this.patientForm.valid) {
      this.dialogRef.close(this.patientForm.value);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
