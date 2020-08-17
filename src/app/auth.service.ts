import { Injectable } from '@angular/core';
import { Router } from  "@angular/router";
import { auth } from  'firebase/app';
import { AngularFireAuth } from  "@angular/fire/auth";
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from  'firebase';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private eventAuthError = new BehaviorSubject<string>("");
  eventAuthError$ = this.eventAuthError.asObservable();
  user:User;
  newUser: any;
  
  constructor(public au: AngularFireAuth,public db: AngularFirestore, public router: Router ) {
    this.au.authState.subscribe(user => {
      if (user){
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    })
  }
  register(user){
    console.log(user);
    this.au.createUserWithEmailAndPassword( user.email, user.password)
      .then( userCredential => {
        this.newUser = user;
        console.log(userCredential);
        userCredential.user.updateProfile( {
          displayName: user.name
        });

        this.insertUserData(userCredential)
          .then(() => {
            this.router.navigate(['/']);
          });
      })
      .catch( error => {
        this.eventAuthError.next(error);
      });
  }
  insertUserData(userCredential: firebase.auth.UserCredential) {
    return this.db.doc(`Users/${userCredential.user.uid}`).set({
      email: this.newUser.email,
      displayName: this.newUser.name,
      number: this.newUser.number
    })
  }
  login( email: string, password: string) {
    this.au.signInWithEmailAndPassword(email, password)
      .catch(error => {
        this.eventAuthError.next(error);
      })
      .then(userCredential => {
        if(userCredential) {
          console.log(userCredential)
          this.router.navigate(['/list']);
        }
      })
  }
  getUserState() {
    return this.au.authState;
  }
  logout() {
    this.router.navigate(['/']);
    return this.au.signOut(); 
  }
}
