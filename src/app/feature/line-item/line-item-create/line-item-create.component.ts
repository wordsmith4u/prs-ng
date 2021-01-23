import { LineItemService } from './../../../service/line-item.service';
import { Component, OnInit } from '@angular/core';
import { LineItem } from '../../../model/line-item.class';
import { Router } from '@angular/router';

@Component({
  selector: 'app-line-item-create',
  templateUrl: './line-item-create.component.html',
  styleUrls: ['./line-item-create.component.css']
})
export class LineItemCreateComponent implements OnInit {
  title = "Line Item Create";
  lineItem: LineItem = new LineItem();
  submitBtnTitle = "Create";

  constructor(private lineItemSvc: LineItemService,
              private router: Router) { }

  ngOnInit(): void {

  }

  save() {
    // save the line item to the DB
    this.lineItemSvc.create(this.lineItem).subscribe(
      resp => {
        this.lineItem = resp as LineItem;
        console.log('Line Item created',this.lineItem);
        // forward to the line item list component
        this.router.navigateByUrl("/line-item-list");
      },
      err => {
        console.log(err);
      }

    );
  }
}