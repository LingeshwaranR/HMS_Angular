import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Doctor } from 'src/app/model/doctor';
import{CrudService} from 'src/app/service/crud.service'
import {CustomRequest} from '../../model/customRequest'
import { DoctorComponent } from '../doctor/doctor.component';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { emailDomainValidator } from 'src/app/vaidators/emailDomainValidator';



@Component({
  selector: 'app-doctor-modal',
  templateUrl: './doctor-update-modal.component.html',
  styleUrls: ['./doctor-update-modal.component.css']
})
export class DoctorUpdateModalComponent implements OnInit   {
  ngOnInit(): void {
    this.DoctorForm=this.formBuilder.group({
      pkUserId: [''],

      username: ['',[Validators.required,
        Validators.minLength(2),
      Validators.maxLength(12)]],
       email: ['', [Validators.required, Validators.email,Validators.pattern("[^ @]*@[^ @]*"),emailDomainValidator]],
        password: ['',[Validators.required, Validators.minLength(6)]],
        specialist: ['',[Validators.required]]
  
    })
    this.DoctorForm.patchValue(this.doctor);

  }
  private request:CustomRequest<number>;
  public homeComponent:HomeComponent;
  updateStatus:Boolean=false;
  submitted:Boolean=true;


  @Input () doctor:Doctor;
  DoctorForm :FormGroup;
 

  constructor(public activeModal: NgbActiveModal,private crudService : CrudService, public router : Router,private formBuilder: FormBuilder) {}
  // convenience getter for easy access to form fields
get f() { return this.DoctorForm.controls; }
update(){
  this.submitted = true;

  // stop here if form is invalid
  if (this.DoctorForm.invalid) {
      return;
  }
this.doctor=this.DoctorForm.value;
console.log(this.doctor);
  this.crudService.updateDoctor(this.doctor).subscribe((data)=>{
    this.request = data;
    this.updateStatus=true;
    console.log(this.request.object);
    this.activeModal.close();
 
  })
}

}
