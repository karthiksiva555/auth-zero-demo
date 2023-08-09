import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {

  private myValue: string | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.route.queryParams.subscribe(params => {
    //   const state = params['state'];
    //   const key = params['key'];
    //   // Use the state parameter as needed
    //   console.log('Received state:', state);
    //   console.log('Key:', key);
    // });

    this.route.queryParams.subscribe((params) => {
      const appState = params['appState'];
      if (appState) {
        this.myValue = appState.myValue; // Retrieve the value from appState
      }

      // Handle the authentication response and use the value as needed
      console.log('My Value:', this.myValue);
    });
  }

}
