import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {

  constructor(private _http: HttpClient) { }

  dailyForecast() {
    return this._http.get("https://api.openweathermap.org/data/2.5/weather?id=3094802&units=metric&lang=en&APPID=e7aa07ccc31d9b3a6b07d4e7e5ed9349")
      .map(result => result);
  }

}
