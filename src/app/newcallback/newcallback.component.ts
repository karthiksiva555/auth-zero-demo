import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-newcallback',
  templateUrl: './newcallback.component.html',
  styleUrls: ['./newcallback.component.css']
})
export class NewcallbackComponent implements OnInit {
  private myValue: string | undefined;

  constructor(private auth: AuthService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.auth.appState$.subscribe((appState) => {
      console.log(appState);
    })
  }

}
