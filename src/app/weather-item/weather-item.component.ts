import { Component, OnInit, Input } from '@angular/core';
import { WeatherItem } from '../weather-item';
// import { Weatheritems } from '../weatheritems';

@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.css']
})
export class WeatherItemComponent implements OnInit {
  @Input() WeatherItem: WeatherItem;
  @Input() i: number;
  constructor() { }
  cityname :string = "";
  description: string = "";
  temperature: number = 0;
  ngOnInit(): void {
  }

}
