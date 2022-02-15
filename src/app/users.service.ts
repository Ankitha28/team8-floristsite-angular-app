import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from './user';
import { NewUser } from './newUser';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root' // registered at root module
})

export class UsersService {
    http: HttpClient;
    baseUrl:string = "http://localhost:8081/api";

    constructor(http:HttpClient) { this.http = http; }

    loginGet(){
        console.log("getAllUsers was called");

        return this.http.get(`${this.baseUrl}/users`);
    }

    loginAccount(email: String, password: String, user: User){
        console.log("getUserByCred was called");

        return this.http.post(`${this.baseUrl}/login/${email}/${password}`,user);
    }

    registerAccount(newUser: User): Observable<any>{
        console.log("registerAccount was called");
        console.log(newUser)

        return this.http.post(`${this.baseUrl}/register`, newUser);
    }    

    login(user: User){
        console.log("getUserByCred was called");

        return this.http.post(`${this.baseUrl}/api/users/authenticate`, user);
    }
}

