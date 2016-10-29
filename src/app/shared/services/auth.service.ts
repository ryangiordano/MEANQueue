import { Injectable } from '@angular/core';
import { Headers, Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { User } from '../models/user';
@Injectable()
export class AuthService {
  user:User;
  constructor(private _http: Http) { }
  login(user: User):Observable<any>{
    const body = JSON.stringify(user);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this._http.post('/users-api/signin', body, {headers: headers})
    .map((response: Response)=>response.json())   .catch(error=>Observable.throw(error.json()));
  }
  logout(){
    console.log("clearing local storage")
    localStorage.clear();
  }
  registerNewUser(user:User):Observable<any>{
    const body = JSON.stringify(user);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this._http.post('/users-api', body, {headers: headers})
    .map((response: Response)=>response.json())
    .catch(error=>Observable.throw(error.json()));
  }
  isLoggedIn(){
    return localStorage.getItem('token')!== null;
  }
  getUserData(userId){
    const body = JSON.stringify(userId);
    const headers = new Headers({'Content-Type':'application/json'});
  }
}
