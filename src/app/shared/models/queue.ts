export class Queue {
name: string;
reason: string;
bankId: string;
concluded: boolean;
constructor(name: string, reason: string, bankId?: string, concluded?: boolean){
  this.name = name;
  this.reason = reason;
  this.bankId = bankId;
  this.concluded = concluded;
}
}
