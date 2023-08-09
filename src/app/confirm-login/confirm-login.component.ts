import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-confirm-login',
  templateUrl: './confirm-login.component.html',
  styleUrls: ['./confirm-login.component.css']
})
export class ConfirmLoginComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.loginWithCallback();
  }

  loginWithCallback(){
    const key="abc123";
    //const redirectUrl = `http://localhost:4200/link-accounts/callback?key=${key}`;
    this.auth.loginWithRedirect({ appState: { key: key}}).subscribe(result => {
      console.log(`Result after login: ${result}`);
    });
  }

}
