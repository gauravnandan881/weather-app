import { Component, OnInit } from '@angular/core';
import { WEATHERITEMS } from '../weather-data';
@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent implements OnInit {
  cityName = "";
  constructor() { }

  ngOnInit(): void {
  }
  onSearchLocation(cityName: string){
    this.cityName = cityName;
    console.log(cityName)
  }
}
