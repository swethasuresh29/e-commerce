import { Component } from '@angular/core';
import { WomenService } from './women.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-women',
  imports: [RouterLink],
  templateUrl: './women.component.html',
  styleUrl: './women.component.css'
})
export class WomenComponent {
posts:any[]=[];
  data:any;
  constructor(private dataService:WomenService){}
  ngOnInit() {
    this.loadwomendata();
  }
  loadwomendata() {
    this.dataService.getwomenproduct().subscribe((data) => {
      this.posts = data;
      console.log(this.posts);
    });
}
}
