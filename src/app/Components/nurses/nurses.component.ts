import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { NurseDialogComponent, Nurse } from '../nurse-dialog/nurse-dialog.component';

@Component({
  selector: 'app-nurses',
  templateUrl: './nurses.component.html',
  styleUrls: ['./nurses.component.css']
})
export class NursesComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'firstName', 'lastName', 'specialization', 'number', 'email', 'department', 'adress', 'license_number', 'actions'
  ];

  dataSource = new MatTableDataSource<Nurse>([
    {
      firstName: 'Salma',
      lastName: 'Ben Ali',
      specialization: 'Pediatrics',
      number: '98765432',
      email: 'salma@nurse.com',
      department: 'Neonatology',
      adress: 'Sousse',
      license_number: 'NUR-3214'
    }
  ]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog) {}

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openAddNurseDialog(): void {
    const dialogRef = this.dialog.open(NurseDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.dataSource.data = [...this.dataSource.data, result];
      }
    });
  }

  openEditNurseDialog(nurse: Nurse, index: number): void {
    const dialogRef = this.dialog.open(NurseDialogComponent, {
      data: nurse
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const updatedData = [...this.dataSource.data];
        updatedData[index] = result;
        this.dataSource.data = updatedData;
      }
    });
  }

  deleteNurse(index: number): void {
    this.dataSource.data.splice(index, 1);
    this.dataSource.data = [...this.dataSource.data];
  }
}
