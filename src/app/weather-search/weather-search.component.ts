import { Component, OnInit } from '@angular/core';
import { WEATHERITEMS } from '../weather-data';
import { WeatherItem } from '../weather-item';
import { WeatherService } from '../weather.service';
import { map } from 'rxjs/Operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent implements OnInit {
  newCity : WeatherItem;
  constructor(private _weatherService: WeatherService) { }

  ngOnInit(): void {
  }
  onSearchLocation(cityName: string){
    console.log(cityName);
  }
  onSubmit(){
    console.log (this.newCity);
    const weatherItem = new WeatherItem(
      this.newCity.cityName,
      this.newCity.description,
      this.newCity.temperature
    );
    this._weatherService.searchWeatherData(this.newCity.cityName)
    .subscribe(
      data => {
        const weatherItem = new WeatherItem(data.name, data.weather[0].description, data.main.temp);
      }
    )
  }
}
