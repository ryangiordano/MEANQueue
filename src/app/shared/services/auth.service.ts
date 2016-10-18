import { Injectable } from '@angular/core';
import { Headers, Http} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { User } from '../models/user';
@Injectable()
export class AuthService {

  constructor(private _http: Http) { }
  login(user: User){
    const body = JSON.stringify(user);
    const headers = new Headers({'Content-Type': 'application/json'});
    this._http.post('/user/signin', body, {headers: headers})
    .map(response=>{
      console.log(response.json());
      response.json()
    })
    .catch(error=>Observable.throw(error.json()));
  }
  logout(){
    localStorage.clear();
  }
  registerNewUser(user:User){
    const body = JSON.stringify(user);
    const headers = new Headers({'Content-Type': 'application/json'});
    this._http.post('/user', body, {headers: headers})
    .map(response=>{
      response.json()
    })
    .catch(error=>Observable.throw(error.json()));
  }
  isLoggedIn(){
    return localStorage.getItem('token')!== null;
  }
}
