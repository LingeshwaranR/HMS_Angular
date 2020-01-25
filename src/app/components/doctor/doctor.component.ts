import { Component, OnInit,Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CrudService } from '../../service/crud.service';
import{Doctor} from '../../model/doctor';
import {CustomRequest} from '../../model/customRequest'
import { DoctorModalComponent } from '../doctor-modal/doctor-modal.component';
import { DoctorUpdateModalComponent } from '../doctor-update-modal/doctor-update-modal.component';


@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title"style={text-align:center}>Doctor Details</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <ul>
      <li>Name  : {{name}}</li>
      <li>Email : {{email}}</li>
      <li>Specialist : {{specialist}}</li>
      </ul>
    </div>
    <div class="modal-footer">
    <button type="button" class="btn btn-primary" (click)="update()">Edit</button>
    <button type="button" class="btn btn-danger" (click)="delete()">Delete</button>

      <button type="button" class="btn btn-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgbdModalContent {
  @Input() name;
  @Input() email;
  @Input() specialist;
  @Input () id;
  private request:CustomRequest<Number>;
  private doctor:Doctor = new Doctor(0,null,null,null,0,null,null);
    


  constructor(public activeModal: NgbActiveModal,private modalService: NgbModal,private crudService : CrudService) {}
  update(){
    const modalRef = this.modalService.open(DoctorUpdateModalComponent);


  }
  delete(){
    this.doctor.pkUserId=this.id;
    this.crudService.deleteDoctor(this.doctor).subscribe((data)=>{
      this.request = data;
      console.log(this.request);
    })

  }
}


@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
// doctors=["Dr.John Doe","selva","lingesh","sena","aravind","kiran"]
private doctors:Doctor[];
private request:CustomRequest<Doctor>;
private isPageLoaded = false;

constructor(private modalService: NgbModal,private crudService : CrudService) {}

open(doctor:Doctor) {
  const modalRef = this.modalService.open(NgbdModalContent);

    modalRef.componentInstance.name = doctor.username ;
    modalRef.componentInstance.email=doctor.email;
    modalRef.componentInstance.specialist=doctor.specialist;
    modalRef.componentInstance.id=doctor.pkUserId;
  
}
create(){
  this.modalService.open(DoctorModalComponent);
}



ngOnInit() {
  this.crudService.getAllDoctors().subscribe((data)=>{
    this.request = data;
    this.doctors=this.request.object;
    console.log(this.request);
    this.isPageLoaded = true;
  })
}

}
