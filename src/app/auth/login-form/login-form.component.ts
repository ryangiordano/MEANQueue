import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { User } from '../../shared/models/user';
import { Router } from '@angular/router';
@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  form: FormGroup;
  constructor(private _authService: AuthService, private formBuilder: FormBuilder, private router: Router) {
    this.form = this.formBuilder.group({
      'email': ['',[Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]],
      'password': ['', Validators.required]
    })
  }

  onSubmit(){
    const user = new User(null, null,this.form.value.email, this.form.value.password,null, null);
    this._authService.login(user)
    .subscribe(
      data=>{
        console.log(data);
        localStorage.setItem('token', data.token);
        localStorage.setItem('userId', data.userId);

        this.router.navigate(['/queue']);
      },
      error=>{
        console.error(error);
      }
    );
  }
  isErrorVisible(field: string, error: string) {
    return this.form.controls[field].dirty && this.form.controls[field].errors && this.form.controls[field].errors[error];
  }
  ngOnInit() {
  }


}
