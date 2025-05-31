import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { RoomDialogComponent, room } from '../../room-dialog/room-dialog.component';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'name', 'type', 'status', 'capacity', 'floor', 'wing', 'actions'
  ];

  dataSource = new MatTableDataSource<room>([
    {
      name: 'Salma',
      type: 'Ben Ali',
      status: 'Pediatrics',
      capacity: '98765432',
      floor: 'salma@room.com',
      wing: 'Neonatology'
    }
  ]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog) {}

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openAddroomDialog(): void {
    const dialogRef = this.dialog.open(RoomDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.dataSource.data = [...this.dataSource.data, result];
      }
    });
  }

  openEditroomDialog(room: room, index: number): void {
    const dialogRef = this.dialog.open(RoomDialogComponent, {
      data: room
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const updatedData = [...this.dataSource.data];
        updatedData[index] = result;
        this.dataSource.data = updatedData;
      }
    });
  }

  deleteroom(index: number): void {
    this.dataSource.data.splice(index, 1);
    this.dataSource.data = [...this.dataSource.data];
  }
}
