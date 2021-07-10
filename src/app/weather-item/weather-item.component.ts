import { Component, OnInit, Input } from '@angular/core';
import { WEATHERITEMS } from '../weather-data';
import { WeatherItem } from '../weather-item';
// import { Weatheritems } from '../weatheritems';

@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.css']
})
export class WeatherItemComponent implements OnInit {
  // @Input() WeatherItem: WeatherItem;
  // @Input() i: number;

  // constructor() {
  //   this.weatherItem = new WeatherItem ('London','Rainy',32)
  //  }
  @Input('item') weatherItem: WeatherItem;
  ngOnInit(): void {}

}
