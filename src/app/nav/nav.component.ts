import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { BranchService } from '../shared/services/branch.service';
import { Router } from '@angular/router';
import { Branch } from '../shared/models/branch';
import { User } from '../shared/models/user';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  user:User;
  subscription: Subscription;
  constructor(private _authService: AuthService, private _branchService: BranchService,private router: Router) {}
  logout(){
    this.router.navigate(['/login']);
    return this._authService.logout();
  }
  ngOnInit() {
    this.subscription = this._authService.user$.subscribe(
      user=>{
        this.user = user;
      },
      error=>{
        console.error(error);
      }
    )
  }
  isLoggedIn(){
    return this._authService.isLoggedIn();
  }

}
