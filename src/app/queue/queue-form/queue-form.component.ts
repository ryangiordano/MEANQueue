import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray} from '@angular/forms';
import { Observable } from 'rxjs';
import {Queue } from '../../shared/models/queue';
import { QueueService } from '../../shared/services/queue.service';
import { ErrorService} from '../../shared/services/error.service';
@Component({
  selector: 'app-queue-form',
  templateUrl: './queue-form.component.html',
  styleUrls: ['./queue-form.component.css']
})
export class QueueFormComponent implements OnInit {
  queue:Queue = null;

  form: FormGroup;
  formOptions =[
  {
    name: "Reason One"
  },
  {
    name: "Reason Two"
  },
  {
    name: "Reason Three"
  },
  {
    name: "Reason Four"
  }
]
  constructor(private formBuilder: FormBuilder, private _queueService: QueueService, private _errorService: ErrorService) {
    this.form = this.formBuilder.group({
      'name':['', Validators.required],
      'reason':['', Validators.required],
      'bankId': ['BANK'],
      'concluded': [false],
      'branchId': ['BRANCH']
    })
  }

  ngOnInit() {

  }
  onSubmit(){
    const queueMember: Queue = new Queue(this.form.value.name, this.form.value.reason, this.form.value.bankId, this.form.value.concluded, this.form.value.branchId, null);
    this._queueService.addMember(queueMember)
    .subscribe(
      data=>{
        this._queueService.queueMembers.push(data)
      },
      error=>this._errorService.handleError(error)
    );
  }
  isErrorVisible(field:string, error:string){
    return this.form.controls[field].dirty && this.form.controls[field].errors && this.form.controls[field].errors[error];
  }
  reset(){
  this.form.reset();
}
get valid(){
  return this.form.valid;
}
get value(){
  return this.form.value;
}

}
