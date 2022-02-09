import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { User } from '../user';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent{
    title:string = "Login Form"; 
    
    users:any = []; 
    service: UsersService; 
    data : any = {}; 
    accepted = false;

    constructor(service: UsersService) {
        this.service = service;
        console.log("Login component loaded");
    }

   
    loginAccount(form: NgForm) {
        console.log("Ran loginAccount with " + this.data + "data");

        const user: User={email: form.value.email, password: form.value.password};
        // this.service.loginGet().subscribe((response:any) => { 
        this.service.login(user).subscribe((response:any) => { 
            if (response.length) { 
                console.log(true)
             }
            console.log(this.users);
        });
    }

    ngOnInit(): void {
    }
}

