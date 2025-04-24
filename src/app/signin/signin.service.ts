import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SigninService {

  private apiUrl='https://fakestoreapi.com/auth/login';
       constructor (private http:HttpClient){}
       getUserService(userData:any): Observable<any> {
        //const headers:any= { 'Content-Type': 'application/json' }
        const body:any =JSON.stringify(userData)
         return this.http.post(this.apiUrl,body);
       }
       isAuthenticated(): boolean {
        if (window.localStorage.getItem('user')) {
          return false;
        }
        return true;
      }
}
