import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user.service'
import{Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {'username': 'lingeshwaran001@gmail.com','password':'12345'}

  showSuccess : boolean = false;
  showError : boolean = false;
  flag : boolean = false;

  validUsers= [ 
		{'username':'lingeshwaran001@gmail.com', 'password':'12345'},
		{'username':'ross@friends.com', 'password':'1234'},
		{'username':'joey@friends.com', 'password':'1234'},
		{'username':'rechal@friends.com', 'password':'1234'}
	];

  constructor(private userService :UserService ,private router : Router) { }

  ngOnInit() {
  }


  authenticate(){
    for(var i in this.validUsers){ // loop on users array
			if(this.user.username == this.validUsers[i].username && this.user.password == this.validUsers[i].password){
				this.flag = true;
				this.userService.setUserName(this.user.username);
				this.router.navigate(['home']);
				break;
			}
			else{
				this.flag = false;
			}				
		}

		//-------- set error or success flags
		if(this.flag){
			this.showError = false;
      this.showSuccess = true;
      console.log(this.showSuccess);
		}
		else{
			this.showError = true;
      this.showSuccess = false;
      console.log(this.showSuccess);
		}

  }

}
