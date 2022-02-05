import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NewUser } from '../newUser';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
    title: string = "Register Form"; 
    users: any = []; 
    service: UsersService; 
    data: any = {}; 

    constructor(service: UsersService) {
        this.service = service;
        console.log("Register component loaded");
    }

    createAccount(form: NgForm) {
        console.log("Ran createAccount with " + this.data + "data");

        const newUser: NewUser={
            first_name: form.value.first_name,
            last_name: form.value.last_name,
            contact_no: form.value.contact_no,
            address: form.value.address,
            email: form.value.email, 
            password: form.value.password,
        };
        this.service.addNewUser(newUser).subscribe((response) =>{
            console.log(response);
        });

        // this.service.getAllUsers().subscribe((response:any) => { 
        //     this.users = response;
            
        //     console.log(this.users);
        // });
    }

    ngOnInit(): void {
    }
  
}