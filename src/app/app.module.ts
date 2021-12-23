import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
<<<<<<< Updated upstream
import { NavbarComponent } from './navbar/navbar.component';
=======
import { FormsModule } from '@angular/forms';
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< Updated upstream
    LoginComponent,
    NavbarComponent
=======
    LoginComponent

>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(){
    console.log("App Component Loaded..");
  }
 }
