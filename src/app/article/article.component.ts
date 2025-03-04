import { Component, OnInit } from '@angular/core';
//  import { RouterOutlet } from '@angular/router';
//  import { RouterLink } from '@angular/router';
import { ArticleService } from './article.service';
@Component({
  selector: 'app-article',
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent  implements OnInit{
  posts:any[]=[];
  data:any;
  // cards:[]=[];
  constructor(private dataService:ArticleService){}
  ngOnInit() {
    this.loadPosts();
  }
  loadPosts() {
    this.dataService.getPosts().subscribe((data) => {
      this.posts = data;
      console.log(this.posts);
    });
  }
}
