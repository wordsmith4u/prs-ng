import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/model/menu-item.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems: MenuItem[] = [
    new MenuItem("Login", "/user-login", "User Login"),
    new MenuItem("User", "/users-list", "Users List"),
    new MenuItem("Vendor", "/vendors-list", "Vendors List"),
    new MenuItem("Product", "/products-list", "Products List"),
    new MenuItem("Request", "/requests-list", "Requests List"),
    new MenuItem("Line Item", "/line-item-list", "Line Items List"),
  ];

  constructor() { }

  ngOnInit(): void {

  }

}
