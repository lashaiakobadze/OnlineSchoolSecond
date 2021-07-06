export class Registration {
  static CURRENT_REGISTRATION: any;

  constructor(
    public firstName: string,
    public lastName: string,
    public personalNumber: number,
    public phone: string,
    public group: 'A' | 'B' | 'C' | 'D',
    public email: string,
    public userId: string
  ) { }
}
