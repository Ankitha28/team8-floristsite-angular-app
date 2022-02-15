import { Component, OnInit } from '@angular/core';
import { CartItem } from '../cart-status/cart-item';
import { Product } from '../product/product';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

    public products: Product[];
    p : number = 1;
  
    
       
constructor( private productService : ProductService , private cartService : CartService) { 
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

     addtoCart(selectedproduct:Product){
   console.log(`add to cart: ${selectedproduct.name},${selectedproduct.price} ,${selectedproduct.description}`);
   const theCartItem= new CartItem(selectedproduct);
   this.cartService.addToCart(theCartItem);

     }
      
   }

