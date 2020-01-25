import { Observable } from 'rxjs';
import {User} from '../model/user'
 
 
export class UserService{
  username: string;
 
    public getUserName() {
        return this.username;               
    }
 
 
    public setUserName(username: string ) {
    this.username=username;
    }
 
 
}