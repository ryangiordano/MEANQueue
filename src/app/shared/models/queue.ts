export class Queue {
name: string;
reason: string;
bankId: string;
concluded: boolean;
branchId: string;
constructor(name: string, reason: string, bankId?: string, concluded?: boolean, branchId?: string){
  this.name = name;
  this.reason = reason;
  this.bankId = bankId;
  this.branchId = branchId;
  this.concluded = concluded;
}
}
