import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminproductviewService {


   private apiUrl='https://fakestoreapi.com/products/id';
    constructor(private http:HttpClient) { }
     getproduct(): Observable<any> {
      return this.http.get(this.apiUrl);
}
}