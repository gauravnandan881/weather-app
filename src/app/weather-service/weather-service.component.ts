import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-weather-service',
  templateUrl: './weather-service.component.html',
  styleUrls: ['./weather-service.component.css']
})
export class WeatherServiceComponent implements OnInit {
  constructor(private http:HttpClient) {}
  ngOnInit(): void {
  }
  // getWeatherItems(){
  //   return WEATHER_ITEMS;
  // }
  // searchWeatherData(cityName : string) : Observable<any> {
  //   // return this.http.
  // }
}
