import { Component, OnInit, Input} from '@angular/core';
import { Queue } from '../../shared/models/queue';
import { QueueItemComponent } from '../queue-item/queue-item.component';
import {QueueService }  from '../../shared/services/queue.service';
import { ErrorService } from '../../shared/services/error.service';
@Component({
  selector: 'app-queue-list',
  templateUrl: './queue-list.component.html',
  styleUrls: ['./queue-list.component.css']
})
export class QueueListComponent implements OnInit {
queueMembers: Queue[]=[];

  constructor(private _queueService: QueueService, private _errorService: ErrorService) { }

  ngOnInit() {
    console.log("getting the queue");
    this._queueService.getMembers()
    .subscribe(
      members=>{
        this.queueMembers = members;
        this._queueService.queueMembers = members;
      },
      error=> this._errorService.handleError(error)
    );
  }

}
