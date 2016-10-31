import { Component, OnInit, Input} from '@angular/core';
import { Queue } from '../../shared/models/queue';
import { QueueItemComponent } from '../queue-item/queue-item.component';
import {QueueService }  from '../../shared/services/queue.service';
import { ErrorService } from '../../shared/services/error.service';
import { BranchComponent } from '../../branch/branch.component';
import { BranchService} from '../../shared/services/branch.service';
import { Branch } from '../../shared/models/branch';
@Component({
  selector: 'app-queue-list',
  templateUrl: './queue-list.component.html',
  styleUrls: ['./queue-list.component.css']
})
export class QueueListComponent implements OnInit {
branches: Branch[]=[];
  constructor(private _queueService: QueueService, private _errorService: ErrorService, private _branchService: BranchService) { }

  ngOnInit() {
    console.log("getting branches, yo")
    this._branchService.getBranches()
    .subscribe(
      branches=>{

        this.branches = branches;
        this._branchService.branches = branches;
                console.log(this.branches);
      },
      error=> this._errorService.handleError(error)
    );
  }

}
