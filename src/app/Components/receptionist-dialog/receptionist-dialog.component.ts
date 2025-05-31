import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface receptionist {
  firstName: string;
  lastName: string;
  languages_spoken: string;
  number: string;
  email: string;
  desk_location: string;
  adress: string;
}

@Component({
  selector: 'app-receptionist-dialog',
  templateUrl: './receptionist-dialog.component.html',
  styleUrls: ['./receptionist-dialog.component.css']
})
export class ReceptionistDialogComponent {
  receptionistForm: FormGroup;
  isEditMode = false;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ReceptionistDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: receptionist | null
  ) {
    this.isEditMode = !!data;

    this.receptionistForm = this.fb.group({
      firstName: [data?.firstName || '', Validators.required],
      lastName: [data?.lastName || '', Validators.required],
      languages_spoken: [data?.languages_spoken || '', Validators.required],
      number: [data?.number || '', Validators.required],
      email: [data?.email || '', [Validators.required, Validators.email]],
      desk_location: [data?.desk_location || '', Validators.required],
      adress: [data?.adress || '', Validators.required],
    });
  }

  onSave(): void {
    if (this.receptionistForm.valid) {
      this.dialogRef.close(this.receptionistForm.value);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
