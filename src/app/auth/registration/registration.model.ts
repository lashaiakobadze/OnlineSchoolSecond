export class Registration {
  public firstName: string;
  public lastName: string;
  public personalNumber: number;
  public phone: string;
  public imgLink: string;
  public group: 'A' | 'B' | 'C' | 'D';
  public email: string;
  
  constructor(
    firstName: string,
    lastName: string,
    personalNumber: number,
    phone: string,
    imgLink: string,
    group: 'A' | 'B' | 'C' | 'D',
    email: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.personalNumber = personalNumber;
    this.phone = phone;
    this.imgLink = imgLink;
    this.group = group;
    this.email = email;
  }
}
