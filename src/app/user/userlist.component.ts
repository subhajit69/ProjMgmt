import { Component, OnInit } from '@angular/core';
import { Users } from '../data/usersdata';
import { UsermgmtService } from '../service/usermgmt.service';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  users :Users[];

  constructor(private userService :UsermgmtService){

  }
  ngOnInit() {
    this.ListAllUsers();
  }

  ListAllUsers(){
     this.userService.GetAllUsersData().subscribe(
      data =>{ this.users = data; console.log(data)},
      error => console.log(error)
    );
    console.log(this.users);
  }
}
