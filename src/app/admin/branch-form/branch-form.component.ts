import { Component, OnInit } from '@angular/core';
import {Branch} from '../../shared/models/branch';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray} from '@angular/forms';
import { Observable } from 'rxjs';
import { QueueService } from '../../shared/services/queue.service';
import { ErrorService} from '../../shared/services/error.service';
import { BranchService} from '../../shared/services/branch.service';

@Component({
  selector: 'branch-form',
  templateUrl: './branch-form.component.html',
  styleUrls: ['./branch-form.component.css']
})
export class BranchFormComponent implements OnInit {
  form:FormGroup;
  constructor(private _errorService: ErrorService, private _branchService: BranchService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      'name': ['', Validators.required]
    });
  }
  isErrorVisible(field:string, error: string){
    return this.form.controls[field].dirty && this.form.controls[field].errors && this.form.controls[field].errors[error];
  }
  onSubmit(){
    const branch = new Branch(this.form.value.name);
    this._branchService.addBranch(branch).subscribe(
      data=>{
        console.log(data);
        this.form.reset();
      },
      error=>this._errorService.handleError(error)
    );
  }
}
