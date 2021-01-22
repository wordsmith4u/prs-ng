import { Component, OnInit } from '@angular/core';
import { Vendor } from 'src/app/model/vendor.class';
import { VendorService } from 'src/app/service/vendor.service';
import { SystemService } from './../../../service/system.service';


@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {
  title: string = "Vendor-List";
  vendors: Vendor[] = [];

  constructor(private vendorSvc: VendorService, private sysSvc: SystemService) { }

  ngOnInit(): void {
    // populate list of vendors
    this.vendorSvc.getAll().subscribe(
      resp => {
        this.vendors = resp as Vendor[];
        console.log('Vendors',this.vendors);
      },
      err => {
        console.log(err);
      }
    );
  }

}