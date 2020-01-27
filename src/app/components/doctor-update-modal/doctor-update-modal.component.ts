import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Doctor } from 'src/app/model/doctor';
import{CrudService} from 'src/app/service/crud.service'
import {CustomRequest} from '../../model/customRequest'
import { DoctorComponent } from '../doctor/doctor.component';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';


@Component({
  selector: 'app-doctor-modal',
  templateUrl: './doctor-update-modal.component.html',
  styleUrls: ['./doctor-update-modal.component.css']
})
export class DoctorUpdateModalComponent   {
  private request:CustomRequest<number>;
  public homeComponent:HomeComponent;
  updateStatus:Boolean=false;

  @Input () doctor:Doctor;
  
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

  constructor(public activeModal: NgbActiveModal,private crudService : CrudService, public router : Router) {}
  
update(doctor:Doctor){
  this.crudService.updateDoctor(doctor).subscribe((data)=>{
    this.request = data;
    this.updateStatus=true;
    console.log(this.request.object);
    this.activeModal.close();
 
  })
}

}
