export class Contact {
  constructor(
    public email: string,
    public message: string,
    public uId: string = 'visitor'
  ) { }
}
