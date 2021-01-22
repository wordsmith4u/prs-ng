import { Component, OnInit, ɵConsole } from '@angular/core';
import { Vendor } from 'src/app/model/vendor.class';
import { VendorService } from 'src/app/service/vendor.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']

})
export class VendorEditComponent implements OnInit {
  title = "Vendor Edit";
  vendor: Vendor = null;
  vendorId: number = 0;
  submitBtnTitle = "Save";

  constructor(private vendorSvc: VendorService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    //get the id from the url
    this.route.params.subscribe(
      parms => {
        this.vendorId = parms['id'];
        console.log("VendorID = " + this.vendorId);
      }
    );
    //get vendor by id
    this.vendorSvc.getById(this.vendorId).subscribe(
      resp => {
        this.vendor = resp as Vendor;
        console.log('Vendor', this.vendor);
      },
      err => {
        console.log(err);
      }
    );
  }
  save() {
    // save the vendor to the DB
    this.vendorSvc.update(this.vendor).subscribe(
      resp => {
        this.vendor = resp as Vendor;
        console.log('Vendor updated',this.vendor);
        // forward to the vendor list component
        this.router.navigateByUrl("/vendor-list");
      },
      err => {
        console.log(err);
      }

    );
  }

}