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

    })
  }

  ngOnInit() {
  }

}
