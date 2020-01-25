import { Component, SimpleChanges } from '@angular/core';
import{UserService} from './service/user.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LoginTask';
  username:string;
  constructor(private userService:UserService){
    this.username=this.userService.getUserName();

  }
  
}
 