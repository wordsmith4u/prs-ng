import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vendor } from '../model/vendor.class';

const URL = 'http://localhost:8080/users';
@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(private http: HttpClient) { }

  // service functions
  // getAll vendors
  getAll(): Observable<Vendor[]> {
    return this.http.get(URL + '/') as Observable<Vendor[]>;
  }

  // get a vendor by id
  getById(id): Observable<Vendor> {
    return this.http.get(URL + '/' + id) as Observable<Vendor>;
  }

  // create vendor
  create(vendor: Vendor): Observable<Vendor> {
    return this.http.post(URL + '/', vendor) as Observable<Vendor>;
  }

  // update vendor
  update(vendor: Vendor): Observable<Vendor> {
    return this.http.put(URL + '/', vendor) as Observable<Vendor>;
  }

  // delete vendor
  delete(id): Observable<Vendor> {
    return this.http.delete(URL + '/'+id) as Observable<Vendor>;
  }

}