import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errorTitle: string = "An Error Occurred.";
  errorDescription: string = "Please contact your administrator if the error persists";

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.auth.error$.subscribe((result)=>{
      console.log(result);
      this.errorTitle = result.name;
      this.errorDescription = result.message;
    })
  }

  goToLogin(){
    this.router.navigate(['/login']);
  }

}
