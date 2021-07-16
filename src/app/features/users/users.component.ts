import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserServiceService } from "src/app/services/users/user-service.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UsersComponent implements OnInit {
  showAddUserForm: boolean;
  userDetails: any;
  showDetails: boolean;

  constructor(private userService:UserServiceService) { }
  users:any;
  ngOnInit(): void {
    this.users=this.userService.getUsers();
  }
  deleteUser(user,index){
    console.log(index);
    this.users.splice(index,1);
  }
  viewDetails(user){
    this.showDetails=true;
    this.showAddUserForm=false;
    this.userDetails=user;
    //this.users.splice(index,1);
  }
  hideDetails(event){
    console.log(event);
    this.showDetails=false;
  }
  addUser(event){
    this.users.push(event);
  }
  showAddUser(){
    this.showAddUserForm=true;
    this.showDetails=false;
  }

}
