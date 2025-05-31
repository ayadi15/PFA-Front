import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface room {
  name: string;
  type: string;
  status: string;
  capacity: string;
  floor: string;
  wing: string;
  
}

@Component({
  selector: 'app-room-dialog',
  templateUrl: './room-dialog.component.html',
  styleUrls: ['./room-dialog.component.css']
})
export class RoomDialogComponent {
  roomForm: FormGroup;
  isEditMode = false;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<RoomDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: room | null
  ) {
    this.isEditMode = !!data;

    this.roomForm = this.fb.group({
      name: [data?.name || '', Validators.required],
      type: [data?.type || '', Validators.required],
      status: [data?.status || '', Validators.required],
      capacity: [data?.capacity || '', Validators.required],
      floor: [data?.floor || '', [Validators.required, Validators.required]],
      wing: [data?.wing || '', Validators.required],
    });
  }

  onSave(): void {
    if (this.roomForm.valid) {
      this.dialogRef.close(this.roomForm.value);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
