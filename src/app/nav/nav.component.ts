import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
@Component({
  selector: 'nav-bar',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private _authService: AuthService) { }
  logout(){
    return this._authService.logout();
  }
  ngOnInit() {
  }
  isLoggedIn(){
    return this._authService.isLoggedIn();
  }
}
