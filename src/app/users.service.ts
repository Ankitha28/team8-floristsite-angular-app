import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from './user';
import { NewUser } from './newUser';


@Injectable({
  providedIn: 'root' // registered at root module
})

export class UsersService {
    http: HttpClient;
    baseUrl:string = "http://localhost:3000";

    constructor(http:HttpClient) { 
        this.http = http;
    }

    loginGet(){
        console.log("getAllUsers was called");

        return this.http.get(`${this.baseUrl}/api/users`);
    }

    addNewUser(newUser: User){
        console.log("addNewUsers was called");

        return this.http.post(`${this.baseUrl}/api/users/create`, newUser);
    }

    login(user: User){
        console.log("getUserByCred was called");

        return this.http.post(`${this.baseUrl}/api/users/authenticate`, user);
    }
}

