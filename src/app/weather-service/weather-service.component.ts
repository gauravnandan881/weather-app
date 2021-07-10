import { Component, Injectable } from '@angular/core';
// import { WEATHER_ITEMS } from './weather.data';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable';
// import { WeatherItem } from './weather-item';
import { map } from 'rxjs/Operators';

@Component({
  selector: 'app-weather-service',
  templateUrl: './weather-service.component.html',
  styleUrls: ['./weather-service.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class WeatherServiceComponent {
  constructor(private http: HttpClient) { }
    // getWeatherItems() {
    //   return WEATHER_ITEMS;
    // }
    // addWeatherItem(weatherItem: WeatherItem) {
    //   WEATHER_ITEMS.push(weatherItem)
    // }
    // clearWeatherItems() {
    //   WEATHER_ITEMS.splice(0);
    // }
    searchWeatherData(cityName: string): Observable<any> {
    return this.http
      .get('http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=a5090bb223459ed6646f79796aa72d9b')
      .pipe(map(response => console.log(response)))
    }
}
