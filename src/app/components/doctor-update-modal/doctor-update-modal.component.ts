import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Doctor } from 'src/app/model/doctor';
import{CrudService} from 'src/app/service/crud.service'
import {CustomRequest} from '../../model/customRequest'


@Component({
  selector: 'app-doctor-modal',
  templateUrl: './doctor-update-modal.component.html',
  styleUrls: ['./doctor-update-modal.component.css']
})
export class DoctorUpdateModalComponent   {
  private doctor:Doctor = new Doctor(0,null,null,null,0,null,null);
  private request:CustomRequest<number>;
  

  constructor(public activeModal: NgbActiveModal,private crudService : CrudService) {}
  
update(doctor:Doctor){
  this.crudService.updateDoctor(doctor).subscribe((data)=>{
    this.request = data;
  
    console.log(this.request.object);
 
  })
}

}
