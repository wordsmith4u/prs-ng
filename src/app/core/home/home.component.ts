import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/user.class';
import { SystemService } from 'src/app/service/system.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = "Welcome, ";
  user: User = new User();
  userId: number = 0;

  constructor(private userSvc: UserService,
              private sysSvc: SystemService ) { }

  ngOnInit(): void {
    // Check to see if there is a logged in user
    this.sysSvc.checkLogin();

    // get user by user id
    this.userSvc.getById(this.sysSvc.loggedInUser.id).subscribe(
      resp => {
        this.user = resp as User;
      },
      err => {
        console.log(err);
      }
    );
  }

}