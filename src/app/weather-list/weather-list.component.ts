import { Component, OnInit } from '@angular/core';
import { WEATHERITEMS } from '../weather-data';
import { WeatherItemComponent } from '../weather-item/weather-item.component';
import { WeatherItem } from '../weather-item';
@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent implements OnInit {

  constructor() {}
  weatherItems: WeatherItem[];

  ngOnInit(): void {
    this.weatherItems = WEATHERITEMS;
  }
  onUpdateCityName(event: Event){
  //   this.newcityname = (<HTMLInputElement>event.target).value;
  //   console.log(this.newcityname);
  //   // getWeatherItems(this.newcityname);
   }
}
