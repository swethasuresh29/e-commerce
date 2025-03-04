import { Component, OnInit } from '@angular/core';
import { ElectronicsService } from './electronics.service'
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-electronics',
  imports: [],
  templateUrl: './electronics.component.html',
  styleUrl: './electronics.component.css'
})
export class ElectronicsComponent implements OnInit {
  posts:any[]=[];
  data:any;
  constructor(private dataService:ElectronicsService){}
  ngOnInit() {
    this.loadelectronicsdata();
  }
  loadelectronicsdata() {
    this.dataService.getelectronicsproduct().subscribe((data) => {
      this.posts = data;
      console.log(this.posts);
    });
  }

}
