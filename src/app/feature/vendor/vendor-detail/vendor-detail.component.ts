import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Vendor } from 'src/app/model/vendor.class';
import { VendorService } from 'src/app/service/vendor.service';


@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {
  title = "Vendor Detail";
  vendor: Vendor = null;
  vendorId: number = 0;
  constructor(private vendorSvc: VendorService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
      //get the vendor from the url
      this.route.params.subscribe(
        parms => {this.vendorId = parms['id'];
        console.log("VendorID = "+this.vendorId);
      }
      );
      //get vendor by id
      this.vendorSvc.getById(this.vendorId).subscribe(
        resp => {
          this.vendor = resp as Vendor;
          console.log('Vendor',this.vendor);
        },
        err => {
          console.log(err);
        }
      );

  }
  delete() {
    // save the vendor to the DB
    this.vendorSvc.delete(this.vendor.id).subscribe(
      resp => {
        this.vendor = resp as Vendor;
        console.log('Vendor deleted',this.vendor);
        // forward to the vendor list component
        this.router.navigateByUrl("/vendor-list");
      },
      err => {
        console.log(err);
      }

    );
  }
}