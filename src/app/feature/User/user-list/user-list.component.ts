import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/service/system.service';
import { User } from '../../../model/user.class';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  title = "User List";
  users: User[] = [];
  isNotAdmin = false;

  constructor(private userSvc : UserService,
              private sysSvc : SystemService) { }

  ngOnInit(): void {
    this.sysSvc.checkLogin();

    if(!(this.sysSvc.loggedInUser.admin)) {
      this.isNotAdmin = true;
    }
    
    this.userSvc.getAll().subscribe(
      resp => {
        this.users = resp as User[];
      },
      err => {
        console.log(err);
      }
    )
  }

}