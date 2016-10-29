import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'nav-bar',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  userData;
  constructor(private _authService: AuthService, private router: Router) { }
  logout(){
    this.router.navigate(['/login'])
    return this._authService.logout();
  }
  ngOnInit() {
  }
  isLoggedIn(){
    return this._authService.isLoggedIn();
  }

}
