import * as $ from 'jquery';
import { Weather } from "./weather";

export class WeatherProvider {
  readonly MAIN_URL = "https://api.openweathermap.org/data/2.5/"
  readonly ENDPOINT = "weather"
  warsawId = "756135"
  krakowId = "3094802"
  cityId = "?id="+this.krakowId
  metricUnits = "&units=metric"
  langPl = "&lang=en"
  readonly APIKEY = "&APPID=e7aa07ccc31d9b3a6b07d4e7e5ed9349"

  //day weather icons
  img01d = "assets/01d.png"
  img02d = "assets/02d.png"
  img03d = "assets/03d.png"
  img04d = "assets/04d.png"
  img09d = "assets/09d.png"
  img10d = "assets/10d.png"
  img11d = "assets/11d.png"
  img13d = "assets/13d.png"
  img50d = "assets/50d.png"

  //night weather icons
  img01n = "assets/01n.png"
  img02n = "assets/02n.png"
  img03n = "assets/03n.png"
  img04n = "assets/04n.png"
  img09n = "assets/09n.png"
  img10n = "assets/10n.png"
  img11n = "assets/11n.png"
  img13n = "assets/13n.png"
  img50n = "assets/50n.png"

  tempx: string;
  namex: string;
  windSpeedx: number;
  pressurex: string;
  humidityx: string;
  descriptionx: string;
  iconx: string;
  cloudsx: string;
  timex: string;

  getWeather():Weather {
    let tempxx, namexx, speedxx, pressxx, humxx, descxx, iconxx, cloudsxx, timexx;
    $.ajaxSetup({'async': false});
    $.getJSON(this.MAIN_URL+this.ENDPOINT+this.cityId+this.metricUnits+this.langPl+this.APIKEY, (data) => {
      if(data.main.temp !== null && data.name !== null && data.wind.speed !== null
          && data.main.pressure !== null && data.main.humidity !== null && data.weather[0].description !== null
          && data.weather[0].icon !== null && data.clouds.all !== null && data.dt !== null) {
        this.tempx = data.main.temp
        this.namex = data.name
        this.windSpeedx = parseInt(data.wind.speed) * 3.6
        this.pressurex = data.main.pressure
        this.humidityx = data.main.humidity
        this.descriptionx = data.weather[0].description
        this.cloudsx = data.clouds.all
        let jsdate = new Date(data.dt * 1000)
        this.timex = jsdate.toLocaleTimeString('pl', { hour:'numeric', minute:'numeric' })

        switch(data.weather[0].icon) {
          //day
          case '01d':
            this.iconx = this.img01d;
            break;
          case '02d':
            this.iconx = this.img02d;
            break;
          case '03d':
            this.iconx = this.img03d;
            break;
          case '04d':
            this.iconx = this.img04d;
            break;
          case '09d':
            this.iconx = this.img09d;
            break;
          case '10d':
            this.iconx = this.img10d;
            break;
          case '11d':
            this.iconx = this.img11d;
            break;
          case '13d':
            this.iconx = this.img13d;
            break;
          case '50d':
            this.iconx = this.img50d;
            break;
          //night
          case '01n':
            this.iconx = this.img01n;
            break;
          case '02n':
            this.iconx = this.img02n;
            break;
          case '03n':
            this.iconx = this.img03n;
            break;
          case '04n':
            this.iconx = this.img04n;
            break;
          case '09n':
            this.iconx = this.img09n;
            break;
          case '10n':
            this.iconx = this.img10n;
            break;
          case '11n':
            this.iconx = this.img11n;
            break;
          case '13n':
            this.iconx = this.img13n;
            break;
          case '50n':
            this.iconx = this.img50n;
            break;
          //default - full_sun.png
          default:
            this.iconx = "assets/full_sun.png";
        }
      }
      tempxx = this.tempx;
      namexx = this.namex;
      speedxx = this.windSpeedx;
      pressxx = this.pressurex;
      humxx = this.humidityx;
      descxx = this.descriptionx;
      iconxx = this.iconx;
      cloudsxx = this.cloudsx;
      timexx = this.timex;
    });

    return new Weather(tempxx, namexx, speedxx, pressxx, humxx, descxx, iconxx, cloudsxx, timexx);
  }
}
