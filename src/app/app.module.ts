import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Shared Components
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { HeaderComponent } from './Components/header/header.component';

// Auth & Pages
import { LoginComponent } from './Components/login/login.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';

// Dashboard Sections
import { StatisticsComponent } from './Components/dashboard/statistics/statistics.component';
import { ChartComponent } from './Components/dashboard/chart/chart.component';
import { TableComponent } from './Components/dashboard/table/table.component';
import { CardComponent } from './Components/dashboard/card/card.component';

// Management Components
import { DoctorsComponent } from './Components/doctors/doctors.component';
import { DoctorDialogComponent } from './Components/doctor-dialog/doctor-dialog.component';
import { PatientsComponent } from './Components/patients/patients.component';
import { NursesComponent } from './Components/nurses/nurses.component';
import { ConsultationsComponent } from './Components/consultations/consultations.component';
import { RoomsComponent } from './Components/rooms/rooms.component';
import { ReceptionistsComponent } from './Components/receptionists/receptionists.component';

// Chart Library
import { NgChartsModule } from 'ng2-charts';

// Angular Material Modules
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { NurseDialogComponent } from './Components/nurse-dialog/nurse-dialog.component';
import { ReceptionistDialogComponent } from './Components/receptionist-dialog/receptionist-dialog.component';
import { PatientDialogComponent } from './Components/patient-dialog/patient-dialog.component';
import { RoomDialogComponent } from './room-dialog/room-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SidebarComponent,
    HeaderComponent,
    StatisticsComponent,
    ChartComponent,
    TableComponent,
    CardComponent,
    DoctorsComponent,
    DoctorDialogComponent,
    PatientsComponent,
    NursesComponent,
    ConsultationsComponent,
    RoomsComponent,
    ReceptionistsComponent,
    NurseDialogComponent,
    ReceptionistDialogComponent,
    PatientDialogComponent,
    RoomDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule,
    NgChartsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
