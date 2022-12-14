import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { AuthService, User } from '@auth0/auth0-angular';
import { map, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit{

  baseUrl = "https://geotab-test.eu.auth0.com/api/v2/users";
  userId: string = ''; 
  userLoaded = new Subject<boolean>(); 
  constructor(private httpClient: HttpClient, private authService: AuthService) {     
  }

  ngOnInit(): void {
    
  }

  loadUserId(){
    let userAuth; 
    this.authService.user$.subscribe(user => {
      userAuth = user;
      this.userId = userAuth?.sub ?? '';
      this.userLoaded.next(true);
    });
  }

  updateUserMetadata(): Observable<any>{
    const metadata = {
      user_metadata: {hobby: 'not surfing and writing'}
    };
    return this.httpClient.patch(this.baseUrl+'/'+this.userId, metadata);
  }
}
