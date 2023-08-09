import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userLoaded: boolean = false;
  constructor(private userService: UserService, public auth: AuthService) { }
  username: string = '';

  ngOnInit(): void {
    this.loadUser();
    this.userService.userLoaded.subscribe(isLoaded => {
      console.log('inside user loaded subject');
      this.userLoaded = isLoaded;
    });
    this.userService.userName.subscribe(name => this.username = name);
  }

  loadUser(){
    console.log('inside load user');
    this.userService.loadUserId();
    console.log('inside load user end');
  }

  updateUserMetadata(){
    this.userService.updateUserMetadataWithToken();
  }

  deleteUserMetadata(){
    this.userService.deleteUserMetadata().subscribe(()=> {
      console.log('metadata deleted');
    });
  }

  createUser(){
    this.userService.createUser().subscribe((result)=>{
      console.log('User created, result: '+ result);
    },
    error => {
      console.log(error);
    })
  }

}
