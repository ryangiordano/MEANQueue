export class Branch{
  constructor(public name:string, public address?:string,public employees?:string[],public queueMembers?:string[]  ){
    this.name = name;
    this.address = address;
    this.employees = employees;
    this.queueMembers = queueMembers;
  };
}
