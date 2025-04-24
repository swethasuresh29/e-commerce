import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductdetailService {

  // // private apiUrl='https://fakestoreapi.com/products/id';
  //   constructor(private http:HttpClient) { }
  //     getproduct(): Observable<any> {
  //       return this.http.get(this.apiUrl);
  //     }

  constructor(private http:HttpClient) { }
getproductbyid(id:string):Observable<any>{
  return this.http.get("https://fakestoreapi.com/products/"+id)
}

}

