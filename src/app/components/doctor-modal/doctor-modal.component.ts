import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Doctor } from 'src/app/model/doctor';
import{CrudService} from 'src/app/service/crud.service'
import {CustomRequest} from '../../model/customRequest'


@Component({
  selector: 'app-doctor-modal',
  templateUrl: './doctor-modal.component.html',
  styleUrls: ['./doctor-modal.component.css']
})
export class DoctorModalComponent   {
  private doctor:Doctor = new Doctor(0,null,null,null,0,null,null);
  private request:CustomRequest<number>;
  

  constructor(public activeModal: NgbActiveModal,private crudService : CrudService) {}
  
create(doctor:Doctor){
  this.crudService.createDoctor(doctor).subscribe((data)=>{
    this.request = data;
  
    console.log(this.request.object);
 
  })
}

}
