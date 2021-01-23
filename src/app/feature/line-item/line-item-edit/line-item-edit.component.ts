import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LineItem } from 'src/app/model/line-item.class';
import { LineItemService } from 'src/app/service/line-item.service';

@Component({
  selector: 'app-line-item-edit',
  templateUrl: './line-item-edit.component.html',
  styleUrls: ['./line-item-edit.component.css']
})
export class LineItemEditComponent implements OnInit {
  title = "Line Item Edit";
  lineItem: LineItem = null;
  lineItemId: number = 0;
  submitBtnTitle = "Save";

  constructor(private lineItemSvc: LineItemService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    //get the id from the url
    this.route.params.subscribe(
      parms => {
        this.lineItemId = parms['id'];
        console.log("LineItemID = " + this.lineItemId);
      }
    );
    //get lineItem by id
    this.lineItemSvc.getById(this.lineItemId).subscribe(
      resp => {
        this.lineItem = resp as LineItem;
        console.log('LineItem', this.lineItem);
      },
      err => {
        console.log(err);
      }
    );
  }
  save() {
    // save the lineItem to the DB
    this.lineItemSvc.update(this.lineItem).subscribe(
      resp => {
        this.lineItem = resp as LineItem;
        console.log('LineItem updated',this.lineItem);
        // forward to the line item list component
        this.router.navigateByUrl("/line-item-list");
      },
      err => {
        console.log(err);
      }

    );
  }

}
