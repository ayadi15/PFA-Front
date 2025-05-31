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

// Dashboard Components
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
import {MatSelectModule} from '@angular/material/select';
import { PatientDetailsComponent } from './Components/DoctorSide/patient-details/patient-details.component';
import { SendReportToAdminModalComponent } from './Components/DoctorSide/send-report-to-admin-modal/send-report-to-admin-modal.component';
import { SeePatientAdmissionHistoryComponent } from './Components/DoctorSide/see-patient-admission-history/see-patient-admission-history.component';
import { DashboardDoctorComponent } from './Components/DoctorSide/dashboard-doctor/dashboard-doctor.component';
import { PatientListComponent } from './Components/DoctorSide/patient-list/patient-list.component';
import { NurseDialogComponent } from './Components/nurse-dialog/nurse-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { SchedulesBigComponent } from './Components/schedules-big/schedules-big.component';
import { DoctorScheduleComponent } from './Components/DoctorSide/doctor-schedule/doctor-schedule.component';



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
    PatientListComponent,
    DashboardDoctorComponent,
    SeePatientAdmissionHistoryComponent,
    SendReportToAdminModalComponent,
    PatientDetailsComponent,
    DashboardDoctorComponent,
    SchedulesBigComponent,
    DoctorScheduleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
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
