// src/app/dashboard/table/table.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  patients = [
    { name: 'Samir', status: 'Treated', statusColor: 'green', date: '18 Apr 2021', progress: 80, progressBarColor: '#28a745' },
    { name: 'Mounira', status: 'Not Treated Yet', statusColor: 'red', date: '18 Apr 2021', progress: 30, progressBarColor: '#dc3545' },
    { name: 'Samira', status: 'In Progress', statusColor: 'orange', date: '20 May 2021', progress: 60, progressBarColor: '#ffc107' },
    { name: 'Mounir', status: 'Approved', statusColor: 'green', date: '12 Jul 2021', progress: 100, progressBarColor: '#28a745' }
  ];
}