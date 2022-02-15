import { Component, OnChanges, OnInit } from '@angular/core';
import { EmailValidator, NgForm } from '@angular/forms';

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
    submitted = false;

    pass1= "";
    pass2= "";
    number = "";


    allowButton = false;    
    
    constructor(service: UsersService) {
        this.service = service;
        console.log("Register component loaded");
        setInterval(()=> { this.checkValues() }, 100);
    }

    
    passMatchCheck(){
        if(this.pass1 == this.pass2){
            return true;
        } else {return false}
    }

    
    passLengthCheck() {
        if(this.pass1.length >= 8){
            return true;
        } else {return false}
    }

    numberCheck(){
        if (this.number.length >= 8){
            return true;
        } else {
            return false;
        }
    }


    checkValues() : void{
        if(this.passMatchCheck() && this.passLengthCheck() && this.numberCheck()){
            this.allowButton = true;
        } else {
            this.allowButton = false;
        }
    }
    
 
    createAccount(form: NgForm) {
        console.log("Ran createAccount with " + this.data + "data");

        const newUser: NewUser={
            first_name: form.value.first_name,
            last_name: form.value.last_name,
            email: form.value.email, 
            contact_no: form.value.contact_no,
            address: form.value.address,
            password: form.value.password
        };
        
        this.service.registerAccount(newUser)
            .subscribe((response) =>{
                console.log(response);
                if(response == null){
                    alert("Email is in use. Please use another one!")
                } else {
                    alert("Account created!");
                    this.submitted = true;    
                }
            });
  
        // this.service.getAllUsers().subscribe((response:any) => { 
        //     this.users = response;
            
        //     console.log(this.users);
        // });
    }

    ngOnInit(): void {
    }
  
}