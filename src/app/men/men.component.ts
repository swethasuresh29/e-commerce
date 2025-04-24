import { Component, OnInit } from '@angular/core';
import { MenService } from './men.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-men',
  imports: [RouterLink],
  templateUrl: './men.component.html',
  styleUrl: './men.component.css'
})
export class MenComponent  implements OnInit{
posts:any[]=[];
  data:any;
  constructor(private dataService:MenService){}
  ngOnInit() {
    this.loadmendata();
  }
  loadmendata() {
    this.dataService.getmenproduct().subscribe((data) => {
      this.posts = data;
      console.log(this.posts);
    });
}
}
