import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { UserService } from './service/user.service';
import { HeaderComponent } from './components/header/header.component';
import { DoctorComponent,NgbdModalContent } from './components/doctor/doctor.component';
import { PatientComponent } from './components/patient/patient.component';
import {HttpClientModule,HTTP_INTERCEPTORS,HttpHeaders} from '@angular/common/http';
import { DoctorModalComponent } from './components/doctor-modal/doctor-modal.component';
import { DoctorUpdateModalComponent } from './components/doctor-update-modal/doctor-update-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    DoctorComponent,
    PatientComponent,
    NgbdModalContent,
    DoctorModalComponent,
    DoctorUpdateModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule

  ],
  providers: [UserService],
  entryComponents: [NgbdModalContent,DoctorModalComponent,DoctorUpdateModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
