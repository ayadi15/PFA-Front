import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { DoctorDialogComponent, Doctor } from '../doctor-dialog/doctor-dialog.component';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css'],
})
export class DoctorsComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'specialization',
    'number',
    'email',
    'department',
    'adress',
    'license_number',
    'actions'
  ];

  dataSource = new MatTableDataSource<Doctor>([
    {
      firstName: 'Samir',
      lastName: 'Samir',
      specialization: 'Surgeon',
      number: '52780090',
      email: 'Samir@gmail.com',
      department: 'Cardiology',
      adress: 'Sfax',
      license_number: 'DOC-1561',
    },
    {
      firstName: 'Mounira',
      lastName: 'Mounira',
      specialization: 'Surgeon',
      number: '52780090',
      email: 'Mounira@gmail.com',
      department: 'Cardiology',
      adress: 'Tunis',
      license_number: 'DOC-1681',
    },
  ]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog) {}

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  

  openAddDoctorDialog(): void {
    const dialogRef = this.dialog.open(DoctorDialogComponent, {
     
      
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.dataSource.data = [...this.dataSource.data, result];
      }
    });
  }

  openEditDoctorDialog(doctor: Doctor, index: number): void {
    const dialogRef = this.dialog.open(DoctorDialogComponent, {
      
      data: doctor
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const updatedData = [...this.dataSource.data];
        updatedData[index] = result;
        this.dataSource.data = updatedData;
      }
    });
  }
  deleteDoctor(index: number): void {
  this.dataSource.data.splice(index, 1);
  this.dataSource.data = [...this.dataSource.data]; // Refresh table
}
}
