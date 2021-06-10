export class Slide {
  public id: number;
  public src: string;
  public alt: string;
  public title: string;

  constructor(
    id: number,
    src: string,
    alt: string,
    title: string
  ) {
    this.id = id;
    this.src = src;
    this.alt = alt;
    this.title = title;
  }
}
