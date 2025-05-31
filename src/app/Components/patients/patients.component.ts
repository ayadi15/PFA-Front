import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { PatientDialogComponent, patient } from '../patient-dialog/patient-dialog.component';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'firstName', 'lastName', 'gender', 'currentStatus', 'admission_date', 'discharge_date', 'emergency_contact','insurance_provider', 'actions'
  ];

  dataSource = new MatTableDataSource<patient>([
    {
      firstName: 'Salma',
      lastName: 'Ben Ali',
      gender: 'Pediatrics',
      currentStatus: '98765432',
      admission_date: 'salma@patient.com',
      discharge_date: 'Neonatology',
      emergency_contact: 'Sousse',
      insurance_provider: 'Sousse'
     
    }
  ]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog) {}

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openAddpatientDialog(): void {
    const dialogRef = this.dialog.open(PatientDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.dataSource.data = [...this.dataSource.data, result];
      }
    });
  }

  openEditpatientDialog(patient: patient, index: number): void {
    const dialogRef = this.dialog.open(PatientDialogComponent, {
      data: patient
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const updatedData = [...this.dataSource.data];
        updatedData[index] = result;
        this.dataSource.data = updatedData;
      }
    });
  }

  deletepatient(index: number): void {
    this.dataSource.data.splice(index, 1);
    this.dataSource.data = [...this.dataSource.data];
  }
}
