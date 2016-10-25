export class Queue {
name: string;
reason: string;
bankId: string;
concluded: boolean;
branchId: string;
queueId: string;
constructor(name: string, reason: string, bankId?: string, concluded?: boolean, branchId?: string, queueId?: string){
  this.name = name;
  this.reason = reason;
  this.bankId = bankId;
  this.branchId = branchId;
  this.concluded = concluded;
  this.queueId = queueId;
}
}
