import { Component, OnInit } from '@angular/core';
import { ProductdetailService } from './productdetail.service';
import { ActivatedRoute } from '@angular/router';
import {Productmode} from './productmode';

@Component({
  selector: 'app-productdetail',
  imports: [],
  templateUrl: './productdetail.component.html',
  styleUrl: './productdetail.component.css'
})
export class ProductdetailComponent implements OnInit {
  productdata:any[]=[];
  localAgents :Productmode[]= [];
   
  response:any;
  constructor(private dataService:ProductdetailService,private activeRoute:ActivatedRoute){}
  ngOnInit() {

// productId && this.dataService.getproductbyid('productId').subscribe((response)=>{
// this.productdata=response;
    this.loadproductdata();
  }
  loadproductdata() {
  let productId1 = JSON.parse(this.activeRoute.snapshot.paramMap.get('productId')!);
  this.dataService.getproductbyid(productId1).subscribe((response) => {
    console.log(this.response);
    //this.productdata=response;
    this.localAgents.push(response);
    console.log(this.localAgents);
  });
}

}

