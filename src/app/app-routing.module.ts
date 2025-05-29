// src/app/app-routing.module.ts
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

const routes: Routes = [
  // Redirect to login page by default
  // {
  //   path: '',
  //   redirectTo: '/login',
  //   pathMatch: 'full'
  // },
 
  {
    path: 'receptionists',
    component: ReceptionistsComponent
  },
  {
    path: 'rooms',
    component: RoomsComponent
  },
  {
    path: 'consultations',
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
    component: LoginComponent // You can replace this with a dedicated "Page Not Found" component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }