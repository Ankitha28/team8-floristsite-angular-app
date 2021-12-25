import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

       photo = "assets/images/dahlia.png";

  constructor() { 
    console.log("Navbar Loaded");
  }

  ngOnInit(): void {
  }

}
