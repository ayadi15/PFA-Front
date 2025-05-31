import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { ReceptionistDialogComponent, receptionist } from '../receptionist-dialog/receptionist-dialog.component';

@Component({
  selector: 'app-receptionists',
  templateUrl: './receptionists.component.html',
  styleUrls: ['./receptionists.component.css']
})
export class ReceptionistsComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'firstName', 'lastName', 'languages_spoken', 'number', 'email', 'desk_location', 'adress', 'actions'
  ];

  dataSource = new MatTableDataSource<receptionist>([
    {
      firstName: 'Salma',
      lastName: 'Ben Ali',
      languages_spoken: 'Pediatrics',
      number: '98765432',
      email: 'salma@receptionist.com',
      desk_location: 'Neonatology',
      adress: 'Sousse',
     
    }
  ]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog) {}

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openAddreceptionistDialog(): void {
    const dialogRef = this.dialog.open(ReceptionistDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.dataSource.data = [...this.dataSource.data, result];
      }
    });
  }

  openEditreceptionistDialog(receptionist: receptionist, index: number): void {
    const dialogRef = this.dialog.open(ReceptionistDialogComponent, {
      data: receptionist
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const updatedData = [...this.dataSource.data];
        updatedData[index] = result;
        this.dataSource.data = updatedData;
      }
    });
  }

  deletereceptionist(index: number): void {
    this.dataSource.data.splice(index, 1);
    this.dataSource.data = [...this.dataSource.data];
  }
}
