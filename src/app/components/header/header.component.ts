import { Component, OnInit } from '@angular/core';
import{UserService} from '../../service/user.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username:string;
  constructor(private userService:UserService){
    this.username=this.userService.getUserName();

  }

  ngOnInit() {
  }

}
