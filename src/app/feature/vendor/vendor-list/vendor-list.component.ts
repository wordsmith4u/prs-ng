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
  title = "Vendor-List";
  vendors: Vendor[] = [];
  isNotAdmin = false;

  constructor(private vendorSvc: VendorService, private sysSvc: SystemService) { }

  ngOnInit(): void {
    this.sysSvc.checkLogin();
    
     // Checks to see if the logged in user is an admin
     if(!(this.sysSvc.loggedInUser.admin)) {
      this.isNotAdmin = true;
    }
    
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
