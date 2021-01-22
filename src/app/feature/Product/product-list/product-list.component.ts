import { ProductService } from './../../../service/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.class';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title: string = "Product-List";
  products: Product[] = [];
  
  constructor(private productSvc: ProductService,) {
   }

  ngOnInit(): void {
    // populate the list of products
    this.productSvc.getAll().subscribe(
      resp => {
        this.products = resp as Product[];
        console.log('MProducts',this.products);
      },
      err => {
        console.log(err);
      }
    );
  }

}