import { Component, OnInit } from '@angular/core';
import { WEATHERITEMS } from '../weather-data';
import { WeatherItemComponent } from '../weather-item/weather-item.component';
import { WeatherItem } from '../weather-item';
import { WeatherService } from '../weather.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent implements OnInit {

  weatherItems: WeatherItem[]=[];
  constructor(private _weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherItems = this._weatherService.getWeatherItems();
  }
  onUpdateCityName(event: Event){
  //   this.newcityname = (<HTMLInputElement>event.target).value;
  //   console.log(this.newcityname);
  //   // getWeatherItems(this.newcityname);
   }
}
