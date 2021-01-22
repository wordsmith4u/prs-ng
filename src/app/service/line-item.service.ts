import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LineItem } from '../model/line-item.class';

const URL = 'http://localhost:8080/users';
@Injectable({
  providedIn: 'root'
})
export class LineItemService {
  listLineItemById(id: number) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  // service functions
  // getAll line items
  getAll(): Observable<LineItem[]> {
    return this.http.get(URL + '/') as Observable<LineItem[]>;
  }

  // get a LineItem by id
  getById(id): Observable<LineItem> {
    return this.http.get(URL + '/' + id) as Observable<LineItem>;
  }

  // create LineItem
  create(lineItem: LineItem): Observable<LineItem> {
    return this.http.post(URL + '/', lineItem) as Observable<LineItem>;
  }

  // update LineItem
  update(lineItem: LineItem): Observable<LineItem> {
    return this.http.put(URL + '/', lineItem) as Observable<LineItem>;
  }

  // delete LineItem
  delete(id): Observable<LineItem> {
    return this.http.delete(URL + '/'+id) as Observable<LineItem>;
  }

}