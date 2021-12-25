import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  title:string = "Login Form";

   data : any = {}

   constructor() { 
    console.log("Login component loaded");
  }
  onSubmit(){
    console.log(this.data);
  }
   

  ngOnInit(): void {
  }

}
