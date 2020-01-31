import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component'
import{HomeComponent} from './components/home/home.component'
import { DoctorComponent } from './components/doctor/doctor.component';
import { PatientComponent } from './components/patient/patient.component';



const routes: Routes = [
  { path: '', component: LoginComponent },
  {path:'home',component:HomeComponent,
children:[  { path: 'doctor', component: DoctorComponent },
{ path: 'patient', component: PatientComponent }

]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
