import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

    products: Product[];
    card1 ="assets/images/birth.jpg"
    card2 = "assets/images/ann.jpg"
       
constructor( private productService : ProductService) { 
    console.log("Product Component Loaded");
  }

  ngOnInit() {
    this.showProducts();
  }

   showProducts(){
    this.productService.getProducts().subscribe(
      value => {
        this.products = value;
      }
    )
       
     }
   }

