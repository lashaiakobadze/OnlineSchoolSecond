export class News {
  constructor(
    readonly id: string,
    public date: string,
    public title: string,
    public imgPath: string,
    public info: string,
  ) { }
}
