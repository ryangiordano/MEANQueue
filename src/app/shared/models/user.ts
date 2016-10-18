export class User{
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  bankId: string;
  branchId: string;
  constructor(firstName: string, lastName: string,email:string, password:string, bankId:string, branchId:string){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.bankId = bankId;
    this.branchId = branchId;
  }
}
