import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product.class';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  title = "Product Edit";
  product: Product = null;
  productId: number = 0;
  submitBtnTitle = "Save";
  
  constructor(private productSvc: ProductService,
              private router: Router,
              private route: ActivatedRoute) {}
             
              ngOnInit(): void {
                //get the product from the url
                this.route.params.subscribe(
                  parms => {
                    this.productId = parms['id'];
                    console.log("ProductID = " + this.productId);
                  }
                );
                //get product by id
                this.productSvc.getById(this.productId).subscribe(
                  resp => {
                    this.product = resp as Product;
                    console.log('Product', this.product);
                  },
                  err => {
                    console.log(err);
                  }
                );
              }
              save() {
                // save the product to the DB
                this.productSvc.update(this.product).subscribe(
                  resp => {
                    this.product = resp as Product;
                    console.log('Product updated',this.product);
                    // forward to the product list component
                    this.router.navigateByUrl("/product-list");
                  },
                  err => {
                    console.log(err);
                  }
            
                );
              }
            
            }