import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Request } from '../model/request.class';

const URL = 'http://localhost:8080/users';
@Injectable({
  providedIn: 'root'
})
export class RequestService {
  approve(request: Request) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  // service functions
  // getAll requests
  getAll(): Observable<Request[]> {
    return this.http.get(URL + '/') as Observable<Request[]>;
  }

  // get a request by id
  getById(id): Observable<Request> {
    return this.http.get(URL + '/' + id) as Observable<Request>;
  }

  // create request
  create(request: Request): Observable<Request> {
    return this.http.post(URL + '/', request) as Observable<Request>;
  }

  // update request
  update(request: Request): Observable<Request> {
    return this.http.put(URL + '/', request) as Observable<Request>;
  }

  // delete request
  delete(id): Observable<Request> {
    return this.http.delete(URL + '/'+id) as Observable<Request>;
  }

}