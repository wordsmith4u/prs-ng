import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.class';
import { ProductService } from 'src/app/service/product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  title: string = "Product Create";
  product: Product = new Product();
  submitBtnTitle = "Create";
  

  constructor(private productSvc: ProductService,
    private router: Router) {}

    ngOnInit(): void {

    }
  
    save() {
      // save the product to the DB
      this.productSvc.create(this.product).subscribe(
        resp => {
          this.product = resp as Product;
          console.log('Product created',this.product);
          // forward to the product list component
          this.router.navigateByUrl("/product-list");
        },
        err => {
          console.log(err);
        }
  
      );
    }
  }