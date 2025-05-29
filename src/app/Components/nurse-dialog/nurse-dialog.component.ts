import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nurse-dialog',
  templateUrl: './nurse-dialog.component.html',
  styleUrls: ['./nurse-dialog.component.css']
})
export class NurseDialogComponent {
  nurseForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<NurseDialogComponent>
  ) {
    this.nurseForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      years_of_experience: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      department: ['', Validators.required],
      status: ['Active', Validators.required]
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
