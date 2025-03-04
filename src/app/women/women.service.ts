import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WomenService {

  private apiUrl="https://fakestoreapi.com/products/category/women's clothing";
    constructor(private http:HttpClient) { }
      getwomenproduct(): Observable<any> {
        return this.http.get(this.apiUrl);
      }
}
