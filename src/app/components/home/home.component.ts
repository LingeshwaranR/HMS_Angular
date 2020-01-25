import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

patient:boolean=false;
doctor:boolean=false;
  constructor() { }

  ngOnInit() {
  }
displayPatient(){
  this.doctor = false
this.patient=true;
}
displayDoctor(){
  this.patient = false;
this.doctor=true;
}
}
