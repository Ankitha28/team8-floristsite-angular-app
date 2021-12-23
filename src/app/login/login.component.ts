import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { 
    console.log("Login component loaded");
  }

  title:string = "Login Form";

 // onSubmit(){
  //  console.log("Submitted");
 // } 
  


  ngOnInit(): void {
  }

}
