import { Component, OnInit, Input } from '@angular/core';
import { Queue} from '../../shared/models/queue';
import { QueueService } from '../../shared/services/queue.service';
import { ErrorService } from '../../shared/services/error.service';
@Component({
  selector: 'app-queue-item',
  templateUrl: './queue-item.component.html',
  styleUrls: ['./queue-item.component.css']
})
export class QueueItemComponent implements OnInit {
@Input()
queueMember: Queue;

branch:string = "Test-Branch";

  constructor(private _queueService: QueueService, private _errorService:ErrorService) { }

  ngOnInit() {
  }
  onDelete(){
    this._queueService.removeMember(this.queueMember).subscribe(
      result=>console.log(result),
      error=>this._errorService.handleError(error)
    );
  }
}
