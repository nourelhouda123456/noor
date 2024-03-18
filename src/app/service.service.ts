import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { User } from './User';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  user : User | undefined;
  // Update the URL with your Spring Boot app's base URL
  baseUrl :String | undefined;
  constructor(private http: HttpClient) {
     this.baseUrl = ' http://localhost:8080/api/v1/auth/';
   }


  test(){
    // Set headers directly in request options
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const user= {
      firstName:"ddd",
      lastName :"fvd",
      login: "efe",
      password: "fe"
    }
    return this.http.post("http://localhost:8080/register", user);

  }
  register(user: User){
    
    
    return this.http.post("http://localhost:8080/api/v1/auth/register", user);
  }

  login(user: User): Observable<boolean> {
    return this.http.post<boolean>(`${this.baseUrl}/authenticate`, user);
  }
}
function throwError(error: any): any {
  throw new Error('Function not implemented.');
}

