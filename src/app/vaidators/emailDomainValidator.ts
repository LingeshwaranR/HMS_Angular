import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

export function emailDomainValidator(control: AbstractControl) { 
  let email = control.value; 
  if (email && email.indexOf("@") != -1) { 
    let [_, domain] = email.split("@"); 
    if ( domain !== "gmail.com") { 
      return {
        emailDomain: {
          parsedDomain: domain
        }
      }
    }
  }
  return null; 
}
export function forbiddenPasswordValidator(group: FormGroup){
  if(group){
      var password:string = group.value.password;
      var username:string = group.value.username;
      if(username && password){
          if (password.search(username)!==-1){
              return group.controls["password"].setErrors({passworderror:true});
          }
      } 
      return null;
  }
  return null;
}
