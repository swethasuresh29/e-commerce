import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenService {
private apiUrl="https://fakestoreapi.com/products/category/men's clothing";
  constructor(private http:HttpClient) { }
    getmenproduct(): Observable<any> {
      return this.http.get(this.apiUrl);
    }
}

