import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {
  // Line Chart Data
  lineChartData = [
    { data: [700, 650, 750, 800, 780, 820], label: 'Urgent Cases' }
  ];
  lineChartLabels = ['SEP', 'OCT', 'NOV', 'DEC', 'JAN', 'FEB'];
  lineChartOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  // Bar Chart Data
  barChartData = [
    { data: [17, 18, 19, 20, 21], label: 'Cases Treated' }
  ];
  barChartLabels = ['17', '18', '19', '20', '21'];
  barChartOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };
}