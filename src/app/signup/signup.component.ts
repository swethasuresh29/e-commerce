import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent  implements OnInit {
SignupForm = new FormGroup({
FirstName : new FormControl(''),
LastName: new FormControl(''),
Emailid:new FormControl(''),
Password:new FormControl(''),
Confirm :new FormControl(''),
})
ngOnInit(): void {
}
constructor(private dataService:SignupService){}
handleSubmit(){
  console.log(this.SignupForm.value);
    //const user = { username: 'john_doe', email: 'john@example.com', password: 'pass123' };
    const user = { username: this.SignupForm.value.FirstName, email: this.SignupForm.value.Emailid, password: this.SignupForm.value.Password }
    console.log("user",user);
    this.dataService.getUserService(user).subscribe((data) => {
    console.log("userData",data);
  })
}
}