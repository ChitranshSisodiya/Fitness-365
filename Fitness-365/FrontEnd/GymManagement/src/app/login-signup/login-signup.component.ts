import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router, UrlSerializer } from '@angular/router';
import { Admin } from '../class/Admin';
import { Service } from '../services/Services';



@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {
  loginConform= false;
  loginForm = new FormGroup({
    userId : new FormControl(),
    password : new FormControl(),
  });
  user : Admin=new Admin();
  hide = true;
  // UserId =new FormControl('',[Validators.required,Validators.maxLength(6),Validators.minLength(6)]);
  // password =new FormControl('',[Validators.required]);
  constructor(private service : Service,private route : Router) { }

  ngOnInit(): void {
  }

  login(){
    this.user.adminId=this.loginForm.value.userId;
    this.user.password=this.loginForm.value.password;
    this.service.login(this.user).subscribe({
      next:(res) => {
        console.log(res);
        if(res==true){
        alert("Login Successfull \n Welcome");
        this.route.navigate(['/dashboard']);
        }
        else{
        alert("Login Failed \n Something went wrong.");
        }
      },
      error:(res) => {
        console.log(res);
        alert("Code Problem :- "+res);
      }
    });
  }
}
