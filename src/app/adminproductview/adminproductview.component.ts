import { Component, OnInit } from '@angular/core';
import { AdminproductviewService } from './adminproductview.service';

@Component({
  selector: 'app-adminproductview',
  imports: [],
  templateUrl: './adminproductview.component.html',
  styleUrl: './adminproductview.component.css'
})
export class AdminproductviewComponent implements OnInit {
 posts:any[]=[];
 data:any;
 constructor(private dataService:AdminproductviewService){}
  ngOnInit(): void {
    this.loadproduct();
  }
  loadproduct() {
    this.dataService.getproduct().subscribe((data) => {
      this.posts = data;
      console.log(this.posts);
    });
}
}

