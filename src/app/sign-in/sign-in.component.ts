import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { User } from '../User';
import { credentials } from '../models/Credentials';
import { fromJSON } from 'postcss';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  newUser: credentials = {
    login: "",
    password: ""
  };

   
 
  constructor(private userService: ServiceService) {}
   
  loginUser(newUser: credentials): void {
    console.log(newUser);
    
    this.userService.login(newUser).subscribe((resp :any)=>{
      
          var token = resp.token;
            document.cookie = `token=${token}; path=/; expires=`;
    });
    
  }

}
