export class Weather{
  private _temp: string;
  private _name: string;
  private _speed: string;
  private _pressure: string;
  private _humidity: string;
  private _description: string;
  private _icon: string;
  private _clouds: string;
  private _time: string;

  constructor(temp, name, windSpeed, pressure, humidity, description, icon, clouds, time){
    this._temp = temp;
    this._name = name;
    this._speed = windSpeed;
    this._pressure = pressure;
    this._humidity = humidity;
    this._description = description;
    this._icon = icon;
    this._clouds = clouds;
    this._time = time;
  }

  get temp(): string {
    return this._temp;
  }
  get name(): string {
    return this._name;
  }
  get speed(): string {
    return this._speed;
  }
  get pressure(): string {
    return this._pressure;
  }
  get humidity(): string {
    return this._humidity;
  }
  get description(): string {
    return this._description;
  }
  get icon(): string {
    return this._icon;
  }
  get clouds(): string {
    return this._clouds;
  }
  get time(): string {
    return this._time;
  }
}
