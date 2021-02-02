import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user.class';
import { Location } from '@angular/common';
import { UserService } from 'src/app/service/user.service';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  title = "User Edit";
  user: User = null;
  userId: number = 0;
  submitBtnTitle = "Save";
  isNotAdmin = false;

  constructor(private userSvc: UserService,
              private router: Router,
              private route: ActivatedRoute,
              private loc: Location,
              private sysSvc : SystemService ) { }

  ngOnInit(): void {
    this.sysSvc.checkLogin();

    if(!(this.sysSvc.loggedInUser.admin)) {
      this.isNotAdmin = true;
    }

    this.route.params.subscribe(
      parms => {
        this.userId = parms['id'];
      });

    this.userSvc.getById(this.userId).subscribe(
      resp => {
        this.user = resp as User;
      },
      err => {
        console.log(err);
      }
    );
  }

  save() {
    this.userSvc.update(this.user).subscribe(
      resp => {
        this.user = resp as User;
        this.router.navigateByUrl("/user-list");
      },
      err => {
        console.log(err);
      }
    );
  }

  backClicked() {
    this.loc.back();
  }

}