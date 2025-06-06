import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private apiUrl='https://fakestoreapi.com/products/categories';
  constructor (private http:HttpClient){}
  getPosts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
