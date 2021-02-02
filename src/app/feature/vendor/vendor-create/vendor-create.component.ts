import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from 'src/app/model/vendor.class';
import { Location } from '@angular/common';
import { VendorService } from 'src/app/service/vendor.service';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {
  title = "Vendor Create";
  submitBtnTitle = "Create";
  vendor: Vendor = new Vendor();

  constructor(private vendorSvc: VendorService,
              private sysSvc: SystemService,
              private router: Router,
              private loc: Location) { }

  ngOnInit(): void {
    this.sysSvc.checkLogin();
  }

  save() {
    this.vendorSvc.create(this.vendor).subscribe(
      resp => {
        this.vendor = resp as Vendor;
        this.router.navigateByUrl("/vendor-list");
      },
      err => {
        console.log(err);
      }
    )
  }

  backClicked() {
    this.loc.back();
  }

}