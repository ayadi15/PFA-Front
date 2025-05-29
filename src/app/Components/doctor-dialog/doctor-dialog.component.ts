import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface Doctor {
  firstName: string;
  lastName: string;
  specialization: string;
  number: string;
  email: string;
  department: string;
  adress: string;
  license_number: string;
}

@Component({
  selector: 'app-doctor-dialog',
  templateUrl: './doctor-dialog.component.html',
  styleUrls: ['./doctor-dialog.component.css']
})
export class DoctorDialogComponent {
  doctorForm: FormGroup;
  isEditMode = false;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DoctorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Doctor | null
  ) {
    this.isEditMode = !!data;

    this.doctorForm = this.fb.group({
      firstName: [data?.firstName || '', Validators.required],
      lastName: [data?.lastName || '', Validators.required],
      specialization: [data?.specialization || '', Validators.required],
      number: [data?.number || '', Validators.required],
      email: [data?.email || '', [Validators.required, Validators.email]],
      department: [data?.department || '', Validators.required],
      adress: [data?.adress || '', Validators.required],
      license_number: [data?.license_number || '', Validators.required]
    });
  }

  onSave(): void {
    if (this.doctorForm.valid) {
      this.dialogRef.close(this.doctorForm.value);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
