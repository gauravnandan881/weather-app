import { Injectable } from '@angular/core';
import { WEATHERITEMS } from './weather-data';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor() { }
  getWeatherItems(){
      return WEATHERITEMS;
  }

}
