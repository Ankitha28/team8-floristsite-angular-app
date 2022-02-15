import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path :'',  redirectTo:'/home', pathMatch:'full' },
  { path :'home',component:HomeComponent},
  { path :'signin', component:LoginComponent},
  { path :'signup', component:RegisterComponent},
  { path : 'list' , component: ProductComponent},
  { path : 'cart-details' , component : CartDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
