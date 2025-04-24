import { Component, OnInit } from '@angular/core';
import { ArticleService } from './article.service';
import { Router } from "@angular/router";
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-article',
  imports: [RouterLink],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})

export class ArticleComponent  implements OnInit{
  posts:any[]=[];
  data:any;
  
 newarray : Array<{category: string, Url: string, direct:string}> = [];
 

  imgarr: any[] = [
    'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg',
    'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
    'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
    'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg',
  ] 
  patharray: any[]=[
    '/electronics',
    '/jewelery',
    "/men's clothing",
    "/women's clothing"
  ]
  constructor(private dataService:ArticleService,private router:Router){}
  ngOnInit() {
    this.loadPosts();
  }
  loadPosts() {
    this.dataService.getPosts().subscribe((data) => {
      this.posts = data;
    
   for(let i in this.posts) {   
       this. newarray.push({ category: this.posts[i], Url: this.imgarr[i],direct:this.patharray[i] });
    }  
      console.log(this. newarray);
    });



  }

}


