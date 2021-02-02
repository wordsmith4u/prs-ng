import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from 'src/app/model/vendor.class';
import { VendorService } from 'src/app/service/vendor.service';
import { SystemService } from 'src/app/service/system.service';

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
    private sysSvc: SystemService,
    private router: Router,
    private route: ActivatedRoute,
    private loc: Location) { }

  ngOnInit(): void {
    this.sysSvc.checkLogin();

    this.route.params.subscribe(
      parms => {
        this.vendorId = parms['id'];
      });
 
    this.vendorSvc.getById(this.vendorId).subscribe(
      resp => {
        this.vendor = resp as Vendor;
      },
      err => {
        console.log(err);
      }
    );
  }

  save() {
    this.vendorSvc.update(this.vendor).subscribe(
      resp => {
        this.vendor = resp as Vendor;
        this.router.navigateByUrl("/vendor-list");
      },
      err => {
        console.log(err);
      }
    );
  }

  backClicked() {
    this.loc.back();
  }
}
