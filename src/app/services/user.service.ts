import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { AuthService, GetTokenSilentlyOptions, GetTokenWithPopupOptions, User } from '@auth0/auth0-angular';
import { map, Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit{

  baseUrl = "https://dev.geotab.auth0app.com/api/v2/users";
  userId: string = '';
  userLoaded = new Subject<boolean>();
  userName = new Subject<string>();

  constructor(private httpClient: HttpClient, private authService: AuthService) {
  }

  ngOnInit(): void {

  }

  loadUserId(){
    this.authService.user$.subscribe(user => {
      this.userId = user?.sub ?? '';
      this.userLoaded.next(true);
      this.userName.next(user?.name ?? '');
    });
  }

  getUsername(){
    return this.authService.user$.subscribe(user => {
      user?.name;
    });
  }

  updateUserMetadataWithToken() {
    const options: GetTokenWithPopupOptions = {
      authorizationParams: {
        audience: 'https://dev.geotab.auth0app.com/api/v2/',
        scope: 'update:users_app_metadata,update:current_user_metadata'
      },
      cacheMode: 'off',
    };
    this.authService.getAccessTokenWithPopup(options)
    .pipe(
      tap(result => console.log(`token retrieved: ${result}`))
    )
    .subscribe((result) => {
      if(result){
        this.updateUserMetadata(result);
      }
    });
  }

  updateUserMetadata(token: string): void{
    const metadata = {
      // if metadata properties already exists => does an update
      // else they will be added
      user_metadata: {hobby: 'football', favorite_color: 'red'}
    };
    const patchOptions = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };

    this.httpClient.patch(this.baseUrl+'/'+this.userId, metadata, patchOptions).subscribe(result => {
      console.log('result after patch: '+ result);
    });
  }

  deleteUserMetadata(){
    const metadata = {
      user_metadata: {hobby: null} // to remove 'hobby' property from user_metadata
    };
    return this.httpClient.patch(this.baseUrl+'/'+this.userId, metadata);
  }

  createUser(){
    const userObject = this.createUserObject();
    return this.httpClient.post(this.baseUrl, userObject);
  }

  createUserObject(){
    const user = {
      "email": "test.user1@gmail.com",
      "phone_number": "+129999999999999",
      "user_metadata": {},
      "blocked": false,
      "email_verified": false,
      "phone_verified": false,
      "app_metadata": {},
      "given_name": "Test",
      "family_name": "User1",
      "name": "Test User1",
      "nickname": "Test",
      "user_id": "abc",
      "connection": "UserCreation",
      "password": "Test@123",
      "verify_email": false,
      "username": "testuser1"
    };
    return user;
  }
}
