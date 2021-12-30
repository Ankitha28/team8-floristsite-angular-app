import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UsersService } from './users.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent{
    title:string = "Login Form";
    users:any = [];
    service: UsersService;
        

    data : any = {}

    constructor(service: UsersService){
        this.service = service;
        console.log("Login component loaded");
    }

    loginAccount(form: NgForm){
        console.log(this.data);
        this.service.getAllUsers().subscribe((response:any) => { 
            this.users = response;
        
            console.log(this.users)
        });
    }
   

    ngOnInit(): void {
    }

}
