import { Injectable } from '@angular/core';
import { WEATHERITEMS } from './weather-data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherItem } from './weather-item';
import { map } from 'rxjs/Operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http : HttpClient) { }
  getWeatherItems(){
      return WEATHERITEMS;
  }
  addWeatherItems( weatherItem : WeatherItem){
    WEATHERITEMS.push(weatherItem);
  }
  searchWeatherData(cityName:string): Observable<any>{
    return this.http
    .get('http://api.openweathermap.org/data/2.5/weather?q='+ cityName +'&appid={fde9c7af959670357dc9d2161d99d3fc}')
    .pipe(map(response=> console.log(response)))
  }
}
