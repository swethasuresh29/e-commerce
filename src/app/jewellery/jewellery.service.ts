import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JewelleryService {
private apiUrl='https://fakestoreapi.com/products/category/jewelery';
  constructor(private http:HttpClient) { }
    getjeweleryproduct(): Observable<any> {
      return this.http.get(this.apiUrl);
    }
}
