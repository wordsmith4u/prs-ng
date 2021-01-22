import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/service/request.service';
import { Router } from '@angular/router';
import { Request } from '../../../model/request.class';
import { SystemService } from 'src/app/service/system.service';


@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {
  title = "Request Create";
  request: Request = new Request();
  submitBtnTitle = "Create";

  constructor(private requestSvc: RequestService,
              private router: Router, private sysSvc: SystemService) { }

  ngOnInit() {
     this.sysSvc.checkLogin();
     this.request.user = this.sysSvc.loggedInUser;
  }

  save() {
    // save the request to the DB
    this.requestSvc.create(this.request).subscribe(
      resp => {
        this.request = resp as Request;
        console.log('Request created',this.request);
        // forward to the request list component
        this.router.navigateByUrl("/request-list");
      },
      err => {
        console.log(err);
      }

    );
  }
}