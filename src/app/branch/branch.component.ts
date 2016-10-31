import { Component, OnInit, Input } from '@angular/core';
import { QueueListComponent } from '../queue/queue-list/queue-list.component';
import { QueueItemComponent } from '../queue/queue-item/queue-item.component';
import { Queue } from '../shared/models/queue';
import { Branch } from '../shared/models/branch';
import { BranchService } from '../shared/services/branch.service';
import { QueueService } from '../shared/services/queue.service';
import { ErrorService } from '../shared/services/error.service';
import { BranchFilterPipe } from '../shared/pipes/branch-filter.pipe';
@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {
  @Input()
  branches:Branch[]=[];
  queueMembers:Queue[]=[];
  constructor(private _branchService: BranchService, private _queueService: QueueService, private _errorService: ErrorService) { }

  ngOnInit() {
    console.log("getting the queue");
    this._queueService.getMembers()
    .subscribe(
      members=>{
        console.log(members)

        this._queueService.queueMembers = members;
        this.queueMembers = this._queueService.queueMembers;
      },
      error=> this._errorService.handleError(error)
    );
  }

}
