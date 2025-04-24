import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  getUrl(){
    return "url('https://www.google.com/imgres?q=ecommerce%20website%20images&imgurl=https%3A%2F%2Fwoovina.com%2Fimages%2F2020%2F07%2F25%2Fbest-ecommerce-website-templates.jpg&imgrefurl=https%3A%2F%2Fwoovina.com%2Fecommerce-website-templates&docid=RoFSEaQCT67-PM&tbnid=0GQS3IBXj_PMHM&vet=12ahUKEwijx6nnjvyLAxU_d2wGHekQHAsQM3oECGUQAA..i&w=1200&h=804&hcb=2&ved=2ahUKEwijx6nnjvyLAxU_d2wGHekQHAsQM3oECGUQAA')";
  }
}
