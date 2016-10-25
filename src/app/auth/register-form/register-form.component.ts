import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthService} from '../../shared/services/auth.service';
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  form:FormGroup;
  constructor(private _authService: AuthService, private formBuilder: FormBuilder ) {
    this.form = this.formBuilder.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    })
  }
  isErrorVisible(field:string, error:string){
    return this.form.controls[field].dirty && this.form.controls[field].errors && this.form.controls[field].errors[error];
  }
  ngOnInit() {
  }

}
