export class Article{
  private _title: string;
  private _description: string;
  private _urlToImg: string;
  private _urlOutside: string;
  constructor(title,description, url, urlO){
    this._title=title;
    this._description=description;
    this._urlToImg=url;
    this._urlOutside=urlO;
  }
  get title(): string {
    return this._title;
  }
  get description(): string {
    return this._description;
  }
  get urlToImg(): string {
    return this._urlToImg;
  }
  get urlOutside(): string {
    return this._urlOutside;
  }
}
