import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {Router} from "@angular/router";
import {User} from "firebase";
import * as firebase from 'firebase/app';
import Persistence = firebase.auth.Auth.Persistence;
import {map} from "rxjs/operators";
import {Observable} from "rxjs/internal/Observable";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState: User = null;

  constructor(
    private afa: AngularFireAuth,
    private router: Router
  ) {
    this.afa.auth.onAuthStateChanged((user) => {
      console.log(user);
      this.authState = user;
    });
  }

  emailLogin(email: string, password: string) {
    return this.afa.auth.setPersistence(Persistence.SESSION).then(() => {
      return this.afa.auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('Logged in!');
      })
      .catch(error => console.log(error));
    });
  }

  // Returns true if user is logged in
  get authenticated(): Observable<boolean> {
    return this.afa.authState.pipe(
      map(user => !!user)
    );
  }

  // Returns current user
  get currentUser(): any {
    return this.authenticated ? this.authState : null;
  }

  // Returns current user UID
  get currentUserId(): string {
    return this.authenticated ? this.authState.uid : '';
  }

  signOut(): void {
    this.afa.auth.signOut();
    this.router.navigate(['/'])
  }


}
