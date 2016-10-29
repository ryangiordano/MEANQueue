export class Branch{
  constructor(public name:string, public address?:string,public employees?:string[],public queueMembers?:string[], public branchId?:string){
    this.name = name;
    this.address = address;
    this.employees = employees;
    this.queueMembers = queueMembers;
    this.branchId = branchId;
  };
}
