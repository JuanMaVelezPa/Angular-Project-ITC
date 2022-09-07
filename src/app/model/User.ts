export class User {
  public firstName: string;
  public lastName: string;
  public email: string;
  public phone: String;
  public job: string;

  constructor(
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    job: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
    this.job = job;
  }
}
