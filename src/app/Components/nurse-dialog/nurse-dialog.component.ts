import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface Nurse {
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
  selector: 'app-nurse-dialog',
  templateUrl: './nurse-dialog.component.html',
  styleUrls: ['./nurse-dialog.component.css']
})
export class NurseDialogComponent {
  nurseForm: FormGroup;
  isEditMode = false;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<NurseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Nurse | null
  ) {
    this.isEditMode = !!data;

    this.nurseForm = this.fb.group({
      firstName: [data?.firstName || '', Validators.required],
      lastName: [data?.lastName || '', Validators.required],
      specialization: [data?.specialization || '', Validators.required],
      number: [data?.number || '', Validators.required],
      email: [data?.email || '', [Validators.required, Validators.email]],
      department: [data?.department || '', Validators.required],
      adress: [data?.adress || '', Validators.required],
      license_number: [data?.license_number || '', Validators.required],
    });
  }

  onSave(): void {
    if (this.nurseForm.valid) {
      this.dialogRef.close(this.nurseForm.value);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
