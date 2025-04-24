import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SidenavService } from './sidenav.service';

@Component({
  selector: 'app-sidenav',
  imports: [RouterLink],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
  public selectedIndex: any = null;
posts:any[]=[];
  data:any;
  sidenavarray : Array<{ category: string, Url: string}> = [];
patharray:any=[
  "./electronics",
  "./jewelery",
  "./men's clothing",
  "./women's clothing",
]
  constructor(private dataService:SidenavService){}
  ngOnInit() {
    this.loadPosts();
  }

   setIndex(index: number) {
      this.selectedIndex = index;
   }
  loadPosts() {
    this.dataService.getPosts().subscribe((data) => {
      this.posts = data;
      for(let i in this.posts) {   
          this.sidenavarray.push({ category: this.posts[i], Url: this.patharray[i] });
       }  
         console.log(this. sidenavarray);
       });
    };
// activepage(){
//   const activePage = window.location.pathname;
//   const navlinks=document.querySelectorAll('nav a')
  
//   // forEach(link =>{
//   //   if(link.href.includes ,('${activePage}')){
//   //     // console.log('${activePage}');
//   //     link.classList.add('active');
//     }
//   })
}
    
  
  


