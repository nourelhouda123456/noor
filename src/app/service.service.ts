import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { User } from './User';
import { HttpHeaders } from '@angular/common/http';
import { credentials } from './models/Credentials';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  user : User | undefined;
  // Update the URL with your Spring Boot app's base URL
  baseUrl :String | undefined;
  constructor(private http: HttpClient) {
     this.baseUrl = 'http://localhost:8080';
   }


  test(){
    // Set headers directly in request options
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const user= {
      firstName:" ",
      lastName :" ",
      login: " ",
      password: " "
    }
    return this.http.post("http://localhost:8080/register", user);

  }
  register(user: User){
    
    
    return this.http.post(`${this.baseUrl}/register`, user);
  }

  login(user: credentials){
    return this.http.post(`${this.baseUrl}/login`, user);
  }
}
function throwError(error: any): any {
  throw new Error('Function not implemented.');
}

