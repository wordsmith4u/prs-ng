import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from 'src/app/model/vendor.class';
import { SystemService } from 'src/app/service/system.service';
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
              private sysSvc: SystemService,
              private router: Router,
              private route: ActivatedRoute) { }

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

  delete() {
    this.vendorSvc.delete(this.vendor.id).subscribe(
      resp => {
        this.vendor = resp as Vendor;
        this.router.navigateByUrl("/vendor-list");
      },
      err => {
        console.log(err);
      }
    );
  }

}