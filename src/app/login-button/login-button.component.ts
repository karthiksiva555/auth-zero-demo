import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.css']
})
export class LoginButtonComponent implements OnInit {
  private myValue: string = 'Hello State test';

  constructor(private auth: AuthService) {

  }

  ngOnInit(): void {
  }

  loginWithRedirect(){
    const appState = {
      myValue: this.myValue
    };
    this.auth.loginWithRedirect({ appState });
  }

}
