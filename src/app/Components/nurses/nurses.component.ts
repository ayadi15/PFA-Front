import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { NurseDialogComponent } from '../nurse-dialog/nurse-dialog.component';

export interface Nurse {
  firstName: string;
  lastName: string;
  shift: string;
  phone: string;
  email: string;
  department: string;
  status: 'Active' | 'On leave' | 'Retired';
}

@Component({
  selector: 'app-nurses',
  templateUrl: './nurses.component.html',
  styleUrls: ['./nurses.component.css']
})
export class NursesComponent implements AfterViewInit {
  displayedColumns: string[] = ['firstName', 'lastName', 'shift', 'phone', 'email', 'department', 'status', 'actions'];
  dataSource = new MatTableDataSource<Nurse>([
    {
      firstName: 'Fatima',
      lastName: 'Zahra',
      shift: 'Night',
      phone: '12345678',
      email: 'fatima@nurse.com',
      department: 'Pediatrics',
      status: 'Active'
    },
    {
      firstName: 'Ahmed',
      lastName: 'Ali',
      shift: 'Morning',
      phone: '87654321',
      email: 'ahmed@nurse.com',
      department: 'Emergency',
      status: 'On leave'
    }
  ]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog) {}

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'Active':
        return 'status-active';
      case 'On leave':
        return 'status-on-leave';
      case 'Retired':
        return 'status-retired';
      default:
        return '';
    }
  }

  openAddNurseDialog(): void {
    const dialogRef = this.dialog.open(NurseDialogComponent, {
      width: '400px',
      panelClass: 'custom-modal-container'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataSource.data = [...this.dataSource.data, result];
      }
    });
  }
}
