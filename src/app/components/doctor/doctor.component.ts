import { Component, OnInit,Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CrudService } from '../../service/crud.service';
import{Doctor} from '../../model/doctor';
import {CustomRequest} from '../../model/customRequest'
import { DoctorModalComponent } from '../doctor-modal/doctor-modal.component';
import { DoctorUpdateModalComponent } from '../doctor-update-modal/doctor-update-modal.component';
import { NavigationEnd, Router } from '@angular/router';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';


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
      <li>Name  : {{doctor.username}}</li>
      <li>Email : {{doctor.email}}</li>
      <li>Specialist : {{doctor.specialist}}</li>
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

  @Input() doctor:Doctor;
  private request:CustomRequest<Number>;
    


  constructor(public activeModal: NgbActiveModal,private modalService: NgbModal,private crudService : CrudService) {}
  update(){
    const modalRef = this.modalService.open(DoctorUpdateModalComponent);

    modalRef.componentInstance.doctor=this.doctor;
    modalRef.result.then((result) => {
      this.activeModal.close("Updated");
      });


  }
  delete(){

    this.crudService.deleteDoctor(this.doctor).subscribe((data)=>{
      this.request = data;
      console.log(this.request);
      this.activeModal.close("Deleted");

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
mySubscription: any;
private alertStatus:Boolean=false;
private _success = new Subject<string>();
successMessage: string;


constructor(private modalService: NgbModal,private crudService : CrudService,public router:Router) {}

open(doctor:Doctor) {
  const modalRef = this.modalService.open(NgbdModalContent);
  
    modalRef.componentInstance.doctor=doctor;
    modalRef.result.then((result) => {
      this.changeSuccessMessage(result);
      this.getAllDoctors();
  
      });

    
this.router.routeReuseStrategy.shouldReuseRoute = function () {
  return false;
};
this.mySubscription = this.router.events.subscribe((event) => {
  if (event instanceof NavigationEnd) {
    // Trick the Router into believing it's last link wasn't previously loaded
    this.router.navigated = false;
  }
});
  
}

create(){
  
  const modalRef = this.modalService.open(DoctorModalComponent);

  modalRef.result.then((result) => {
    if (result) {
    console.log(result);
    }
    this.changeSuccessMessage("Added");

    this.getAllDoctors();
    });
}

getAllDoctors = () =>{
  this.crudService.getAllDoctors().subscribe((data)=>{
    this.request = data;
    this.doctors=this.request.object;
    console.log(this.request);
    this.isPageLoaded = true;
  })
}

public changeSuccessMessage(message:string) {
  this._success.next("Doctor Successfully "+ message);
}

ngOnInit() {
  this.getAllDoctors();
  setTimeout(() => this.alertStatus = true, 20000);

  this._success.subscribe((message) => this.successMessage = message);
  this._success.pipe(
    debounceTime(5000)
  ).subscribe(() => this.successMessage = null);
}

ngOnDestroy() {
  if (this.mySubscription) {
    this.mySubscription.unsubscribe();
  }
}

}
