import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  signInWithEmail(email: string, password: string): void {
    console.log(email);
    this.auth.emailLogin(email, password).then(() => this.afterSignIn());
  }

  private afterSignIn(): void {
    this.router.navigate(['/']);
  }

}
