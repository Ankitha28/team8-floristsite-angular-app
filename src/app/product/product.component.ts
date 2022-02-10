import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

    public products: Product[];
    p : number = 1;
  
    card1 ="assets/images/birth.jpg"
    card2 = "assets/images/ann.jpg"
       
constructor( private productService : ProductService) { 
    console.log("Product Component Loaded");
  }

  ngOnInit() {
    this.showProducts();
  }

  public showProducts(){
    this.productService.getProducts().subscribe(
      value => {
        this.products = value;
      }
    )
}


  public searchProducts(key :string) : void {
      const array : Product[] = [];
      for(let prod of this.products){
        if(prod.name.toLowerCase().indexOf(key.toLowerCase()) !== -1 )
        {
          array.push(prod);
        }
       }
       this.products = array;
       if(array.length === 0 || !key){
         console.log("not found");
         this.showProducts();
         
       }
     }
      
   }

