import { Component, OnInit } from '@angular/core';
import { ElectronicsService } from './electronics.service'
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-electronics',
  imports: [RouterLink],
  templateUrl: './electronics.component.html',
  styleUrl: './electronics.component.css'
})
export class ElectronicsComponent implements OnInit {
  posts:any[]=[];
  data:any;
  constructor(private dataService:ElectronicsService,private route:ActivatedRoute){}
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
