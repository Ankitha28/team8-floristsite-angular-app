import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  card1 ="assets/images/card1.jpg";
  card2 ="assets/images/card2.jpg";
  card3 ="assets/images/card3.jpg";
  
  constructor() { }

  ngOnInit(): void {
  }

}
