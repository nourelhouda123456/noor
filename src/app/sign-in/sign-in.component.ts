import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { User } from '../User';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  newUser: User = {
    username: "",
    email: "",
    password: ""
  };

   
 
  constructor(private userService: ServiceService) {}
   
  loginUser(newUser: User): void {
    console.log(newUser);
    
    console.log(this.userService.login(newUser));
    
  }

}
