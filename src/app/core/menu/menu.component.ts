import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/model/menu-item.class';
import { User } from 'src/app/model/user.class';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  user: User = new User();
 

  constructor(private sysSvc: SystemService) { }
  
  ngOnInit(): void {
    this.user = this.sysSvc.loggedInUser;

    }
  menuItems : MenuItem[] = [
    new MenuItem("User", "/user-list", "User List"),
    new MenuItem("Vendor", "/vendor-list", "Vendor List"),
    new MenuItem("Product", "/product-list", "Product List"),
    new MenuItem("Request", "/request-list", "Request List"),
    new MenuItem("Review", "/request-review", "Review Review"),
    new MenuItem("Login", "/user-login", "User Login")
  ];
}
