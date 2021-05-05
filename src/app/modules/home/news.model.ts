export class News {
  public title: string;
  public imgPath: string;
  public info: string;

  constructor(
    title: string,
    imgPath: string,
    info: string
    ) {
      this.title = title;
      this.imgPath = imgPath;
      this.info = info;
    }
}
