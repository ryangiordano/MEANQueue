import { Pipe, PipeTransform } from '@angular/core';
import { Queue } from '../models/queue';
@Pipe({
  name: 'branchFilter',
  pure: false
})
export class BranchFilterPipe implements PipeTransform {

  transform(queueMembers: Queue[], args: any): any {
    return queueMembers.filter(queueMember=>{
      if(queueMember.branchId===args){
        console.log(`Checking if ${queueMember.branchId} is equal to ${args}`);
        return queueMember;
      }
      // console.log(`Checking if ${queueMember.branchId} is equal to ${args}`);

    });
  }

}
