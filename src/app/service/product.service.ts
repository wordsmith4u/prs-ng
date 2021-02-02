import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product.class';

const URL = "http://localhost:8080/products";
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAll() : Observable<Product[]> {
    return this.http.get(URL+'/') as Observable<Product[]>;
  }

  getById(id) : Observable<Product> {
    return this.http.get(URL+'/'+id) as Observable<Product>;
  }

  create(product: Product) : Observable<Product> {
    return this.http.post(URL+'/', product) as Observable<Product>;
  }

  update(product: Product) : Observable<Product> {
    return this.http.put(URL+'/', product) as Observable<Product>;
  }

  delete(id) : Observable<Product> {
    return this.http.delete(URL+'/'+id) as Observable<Product>;
  }
}
