import { Component, OnInit } from '@angular/core';
import { WeatherProvider } from "../logic/weatherApi";
import { Weather } from "../logic/weather";
import { WeatherService } from '../weatherService/weather.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'weather',
  templateUrl: './weather.html',
  styleUrls: ['./weather.css']
})
export class WeatherComponent implements OnInit {
  weatherx: WeatherProvider;
  weather: Weather;

  chart = [];

  constructor(private _weather: WeatherService) {
    this.weatherx = new WeatherProvider();
  }

  ngOnInit() {
    this.weather = this.weatherx.getWeather();

    this._weather.dailyForecast()
      .subscribe(res => {
        let hum = parseInt(this.weather.humidity);
        let clou = parseInt(this.weather.clouds);
        let restHum = 100 - hum;
        let restClou = 100 - clou;
        this.chart = new Chart('humidity', {
          type: 'doughnut',
          data: {
            labels: ['Humid', 'Dry'],
            datasets: [
              {
                data: [hum, restHum],
                backgroundColor: ['#00506D', 'rgba(255, 255, 255, 0.3)']
              }
            ]
          },
          options: {
            legend: {
              display: false
            }
          }
        });
        this.chart = new Chart('clouds', {
          type: 'doughnut',
          data: {
            labels: ['Clouds', 'Clear'],
            datasets: [
              {
                data: [clou, restClou],
                backgroundColor: ['#00506D', 'rgba(255, 255, 255, 0.3)']
              }
            ]
          },
          options: {
            legend: {
              display: false
            }
          }
        });
      })
  }
}

@Component({
  selector: 'date-pipe',
  template: `<span>{{today|date:'dd.MM.yyyy'}}</span>`

})
export class DatePipeComponent {
  today = Date.now();
}
