import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Doctor } from 'src/app/model/doctor';
import{CrudService} from 'src/app/service/crud.service'
import {CustomRequest} from '../../model/customRequest'
import { DoctorComponent } from '../doctor/doctor.component';
import {FormBuilder, FormGroup, Validators,FormControl, EmailValidator} from '@angular/forms';
import {emailDomainValidator} from '../../vaidators/emailDomainValidator'
import{forbiddenPasswordValidator} from '../../vaidators/emailDomainValidator'




@Component({
  selector: 'app-doctor-modal',
  templateUrl: './doctor-modal.component.html',
  styleUrls: ['./doctor-modal.component.css']
})
export class DoctorModalComponent implements OnInit  {
  private doctor:Doctor = new Doctor(0,null,null,null,0,null,null);
  private request:CustomRequest<number>;
  public doctorComponent:DoctorComponent;
  submitted:boolean=false;
  
  DoctorForm : FormGroup;
  constructor(public activeModal: NgbActiveModal,private crudService : CrudService,private formBuilder: FormBuilder) {}
  
create(){
  this.submitted = true;

  // stop here if form is invalid
  if (this.DoctorForm.invalid) {
      return;
  }
  this.doctor=this.DoctorForm.value;
  this.crudService.createDoctor(this.doctor).subscribe((data)=>{
    this.request = data;
    

    console.log(this.request.object);

    this.activeModal.close(this.doctor);

 })
}
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.DoctorForm=this.formBuilder.group({
    username: ['',[Validators.required,
      Validators.minLength(2),
    Validators.maxLength(12)]],
     email: ['', [Validators.required, Validators.email,Validators.pattern("[^ @]*@[^ @]*"),emailDomainValidator]],
      password: ['',[Validators.required, Validators.minLength(6)]],
      specialist: ['',[Validators.required]]

  },      { validator: forbiddenPasswordValidator }
  )
}
// convenience getter for easy access to form fields
get f() { return this.DoctorForm.controls; }

}
