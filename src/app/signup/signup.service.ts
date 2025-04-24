import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  // constructor() { }
  private apiUrl='https://fakestoreapi.com/users';
     constructor (private http:HttpClient){}
     getUserService(userData:any): Observable<any> {
      //const headers:any= { 'Content-Type': 'application/json' }
      const body:any =JSON.stringify(userData)
      console.log("body",body);
       return this.http.post(this.apiUrl,body);
     }
}
