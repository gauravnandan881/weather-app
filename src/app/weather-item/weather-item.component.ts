import { Component, OnInit } from '@angular/core';
import { Weatheritems } from '../weatheritems';

@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.css']
})
export class WeatherItemComponent implements OnInit {
 
  constructor() { }
  cityname :string = "";
  description: string = "";
  temperature: number = 0;
  ngOnInit(): void {
    
  }

}
