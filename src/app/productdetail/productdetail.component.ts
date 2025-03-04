import { Component, OnInit } from '@angular/core';
import { ProductdetailService } from './productdetail.service';

@Component({
  selector: 'app-productdetail',
  imports: [],
  templateUrl: './productdetail.component.html',
  styleUrl: './productdetail.component.css'
})
export class ProductdetailComponent implements OnInit {
posts:any[]=[];
  data:any;
  constructor(private dataService:ProductdetailService){}
  ngOnInit() {
    this.loadproductdata();
  }
  loadproductdata() {
    this.dataService.getproduct().subscribe((responce) => {
      this.posts = responce;
      console.log(this.posts);
    });
}
}
