import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

patient:boolean=false;
doctor:boolean=false;
  constructor(private route : ActivatedRoute, private router:Router) { }

  ngOnInit() {
  }
displayPatient(){
  this.router.navigate(['patient'],{relativeTo:this.route});

}
displayDoctor(){
  this.router.navigate(['doctor'],{relativeTo:this.route});

}
}
