import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthService} from '../../shared/services/auth.service';
import { User } from '../../shared/models/user';
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  user:User;
  form:FormGroup;
  constructor(private _authService: AuthService, private formBuilder: FormBuilder ) {
    this.form = this.formBuilder.group({
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    })
  }
  submit(){
    return this._authService.registerNewUser();
  }
  isErrorVisible(field:string, error:string){
    return this.form.controls[field].dirty && this.form.controls[field].errors && this.form.controls[field].errors[error];
  }
  ngOnInit() {
  }

}
