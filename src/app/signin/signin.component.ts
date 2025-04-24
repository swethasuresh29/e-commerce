import { Component, OnInit } from '@angular/core';
import {ReactiveFormsModule, FormControl,FormBuilder, FormGroup } from '@angular/forms';
// import { RouterLink } from '@angular/router';
// import { Router } from '@angular/router';
import { SigninService } from './signin.service';
@Component({
  selector: 'app-signin',
  imports: [ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent  implements OnInit{
SigninForm= new FormGroup({
  Emailid: new FormControl(''),
  Password:new FormControl(''),
})
ngOnInit(): void {}
constructor(private dataService:SigninService){}
handleSubmit(){
  console.log(this.SigninForm.value);
    const user = { username: 'john_doe', email: 'john@example.com', password: 'pass123' };
    //const user = { username: this.SigninForm.value.Emailid, password: this.SigninForm.value.Password }
    this.dataService.getUserService(user).subscribe((data) => {
    console.log("userData",data);
    if(data){
      this.setData(data);
    }
  })
}
setData(data:any){
  localStorage.setItem('user', JSON.stringify(data));
}
}
