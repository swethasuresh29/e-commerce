import { Component, OnInit } from '@angular/core';
import { JewelleryService } from './jewellery.service';

@Component({
  selector: 'app-jewellery',
  imports: [],
  templateUrl: './jewellery.component.html',
  styleUrl: './jewellery.component.css'
})
export class JewelleryComponent  implements OnInit {
posts:any[]=[];
  data:any;
  constructor(private dataService:JewelleryService){}
  ngOnInit() {
    this.loadjeweldata();
  }
  loadjeweldata() {
    this.dataService.getjeweleryproduct().subscribe((data) => {
      this.posts = data;
      console.log(this.posts);
    });
}
}