import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user.class';

const URL = "http://localhost:8080/users";
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAll() : Observable<User[]> {
    return this.http.get(URL+'/') as Observable<User[]>;
  }

  getById(id) : Observable<User> {
    return this.http.get(URL+'/'+id) as Observable<User>;
  }

  create(user: User) : Observable<User> {
    return this.http.post(URL+'/', user) as Observable<User>;
  }

  update(user: User) : Observable<User> {
    return this.http.put(URL+'/', user) as Observable<User>;
  }

  delete(id) : Observable<User> {
    return this.http.delete(URL+'/'+id) as Observable<User>;
  }

  login(user: User) : Observable<User> {
    return this.http.post(URL+'/login', user) as Observable<User>;
  }
}