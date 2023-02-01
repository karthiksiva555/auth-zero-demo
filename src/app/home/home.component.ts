import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userLoaded: boolean = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.userLoaded.subscribe(isLoaded => {
      console.log('inside user loaded subject');
      this.userLoaded = isLoaded;
    })
  }

  loadUser(){
    console.log('inside load user');
    this.userService.loadUserId();
    console.log('inside load user end');
  }

  updateUserMetadata(){
    this.userService.updateUserMetadata().subscribe(()=> {
      console.log('metadata updated');
    });
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
