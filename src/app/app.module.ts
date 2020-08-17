import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ListComponent } from './list/list.component';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

var firebaseConfig = {
  apiKey: "AIzaSyDGTvEwZ7uBYu2HRI2e3NYdjUsNNwWPxBU",
  authDomain: "authentication-27032.firebaseapp.com",
  databaseURL: "https://authentication-27032.firebaseio.com",
  projectId: "authentication-27032",
  storageBucket: "authentication-27032.appspot.com",
  messagingSenderId: "416687592818",
  appId: "1:416687592818:web:614f077cae76788606f9eb",
  measurementId: "G-9NCB7TMV8C"
};
@NgModule({
  
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
