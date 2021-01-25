import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LineItem } from 'src/app/model/line-item.class';
import { Product } from 'src/app/model/product.class';
import { Request } from 'src/app/model/request.class';
import { LineItemService } from 'src/app/service/line-item.service';
import { ProductService } from 'src/app/service/product.service';
import { RequestService } from 'src/app/service/request.service';

@Component({
  selector: 'app-line-item-create',
  templateUrl: './line-item-create.component.html',
  styleUrls: ['./line-item-create.component.css']
})
export class LineItemCreateComponent implements OnInit {
  title = "PurchaseRequest Line Items Create - PR ID: ";
  submitBtnTitle = "Create";
  lineItem: LineItem = new LineItem();
  products: Product[] = [];
  request: Request = new Request();
  requestId = 0;

  constructor(private lineItemSvc: LineItemService,
              private productSvc: ProductService,
              private requestSvc: RequestService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    // get the id from the url
    this.route.params.subscribe(
      parms => {
        this.requestId = parms['id'];
      });

    // get the request by the request id
    this.requestSvc.getById(this.requestId).subscribe(
      resp => {
        this.request = resp as Request;
      },
      err => {
        console.log(err);
      }
    )

    // get list of products due to FK constraint
    this.productSvc.getAll().subscribe(
      resp => {
        this.products = resp as Product[];
      },
      err => {
        console.log(err);
      }
    );
  }

  save() {
    this.lineItem.request = this.request;
    // save the line item to the DB
    this.lineItemSvc.create(this.lineItem).subscribe(
      resp => {
        this.lineItem = resp as LineItem;
        // forward to the request lines component
        this.router.navigateByUrl("/request-lines/"+this.requestId)
      },
      err => {
        console.log(err);
      }
    );
  }

}