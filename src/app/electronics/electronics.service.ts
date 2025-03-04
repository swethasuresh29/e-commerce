import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ElectronicsService {
private apiUrl='https://fakestoreapi.com/products/category/electronics'
  constructor(private http:HttpClient) { }
    getelectronicsproduct(): Observable<any> {
      return this.http.get(this.apiUrl);
    }
}
