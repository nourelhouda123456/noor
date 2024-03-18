import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { User } from '../User';

import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  newUser: User = {
    firstName: "",
      lastName :"",
      login:  "",
      password:  ""
  };

  constructor(private userService: ServiceService) {}

  registerUser(newUser: User): void {
    console.log(newUser);

    this.userService.register(newUser).subscribe(Response =>{
      console.log("resp",Response);
      
    });
    
      
      
  }
}