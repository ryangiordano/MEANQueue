import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http, Response} from '@angular/http';
import {Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/Rx';
import { User } from '../models/user';


@Injectable()
export class AuthService {
  private user: User = new User();
  private userSource = new BehaviorSubject<User>(null);

  user$ = this.userSource.asObservable();

  constructor(private _http: Http) { }
  login(user: User): Observable<any> {
    const body = JSON.stringify(user);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this._http.post('/users-api/signin', body, { headers: headers })
      .map((response: Response) => {
        this.user = response.json()._id;
        this.userSource.next(response.json().user);
        return response.json();
      })
      .catch(error => Observable.throw(error.json()));
  }
  logout() {
    console.log("clearing local storage")
    this.userSource.next(this.user);
    localStorage.clear();
  }
  registerNewUser(user: User): Observable<any> {
    const body = JSON.stringify(user);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this._http.post('/users-api', body, { headers: headers })
      .map((response: Response) => response.json())
      .catch(error => Observable.throw(error.json()));
  }
  isLoggedIn() {
    return localStorage.getItem('token') !== null;
  }
  getUserData(userId) {
    const body = JSON.stringify({ 'userId': userId });
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
    return this._http.post('/users-api/findone' + token, body, { headers: headers })
      .map((response: Response) => response.json())
      .catch(error => Observable.throw(error.json()));
  }
}
