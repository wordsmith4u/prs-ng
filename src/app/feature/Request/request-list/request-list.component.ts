import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/service/request.service';
import { Request } from 'src/app/model/request.class';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})

export class RequestListComponent implements OnInit {
  title: string = "Request-List";
  requests: Request[] = [];
 
  constructor(private requestSvc: RequestService, private sysSvc: SystemService) { }

  ngOnInit(): void {
    // populate list of requests
    this.requestSvc.getAll().subscribe(
      resp => {
        this.requests = resp as Request[];
        console.log('Requests',this.requests);
      },
      err => {
        console.log(err);
      }
    );
  }

}