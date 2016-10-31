import { Injectable, EventEmitter} from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Branch} from '../models/branch';
@Injectable()
export class BranchService {
  branches: Branch[] = [];
  constructor(private _http: Http) {

  }
  addBranch(branch:Branch){
    const body = JSON.stringify(branch);
    const headers = new Headers({'Content-Type':'application/json'});
    const token = localStorage.getItem('token') ? '?token='+ localStorage.getItem('token') : '';
    return this._http.post('/branch-api'+token, body, {headers: headers})
    .map(response=>response.json())
    .catch(error=>Observable.throw(error.json()))
  };
  getBranches(){
    return this._http.get('/branch-api').map(response=>{
      const data = response.json().obj;
      let objs: any[] =[];
      for(let i = 0; i<data.length; i++){
        let branch = new Branch(data[i].name,null, null, null, data[i]._id);
        this.branches.push(branch);
        objs.push(branch);
      };

      return objs;
    }).catch(error=>Observable.throw(error.json()));
  }


}
