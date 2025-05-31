import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { DoctorsComponent } from './Components/doctors/doctors.component';
import { PatientsComponent } from './Components/patients/patients.component';
import { NursesComponent } from './Components/nurses/nurses.component';
import { ConsultationsComponent } from './Components/consultations/consultations.component';
import { RoomsComponent } from './Components/rooms/rooms.component';
import { ReceptionistsComponent } from './Components/receptionists/receptionists.component';
import { PatientListComponent } from './Components/DoctorSide/patient-list/patient-list.component';
import { DashboardDoctorComponent } from './Components/DoctorSide/dashboard-doctor/dashboard-doctor.component';

const routes: Routes = [
  // Redirect to login page by default
  // {
  //   path: '',
  //   redirectTo: '/login',
  //   pathMatch: 'full'
  // },
  
  {
    path: 'doctor/patientlist',
    component: PatientListComponent
  }, 
  {
    path: 'receptionists',
    component: ReceptionistsComponent
  },
  {
    path: 'doctor/dashboard',
    component: DashboardDoctorComponent
  },
  {
    path: 'rooms',
    component: RoomsComponent
  },
  {
    path: 'doctor/consultations',
    component: ConsultationsComponent
  },
  {
    path: 'nurses',
    component: NursesComponent
  },
  {
    path: 'patients',
    component: PatientsComponent
  },
  {
    path: 'doctors',
    component: DoctorsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  // Dashboard Route
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  // Wildcard Route (404 Page)
  {
    path: '**',
    component: LoginComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }