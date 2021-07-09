import { Component, OnInit } from '@angular/core';
import { Weatheritems } from '../weatheritems';
@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent implements OnInit {
  WEATHERITEMS: Weatheritems[] = [ 
    {
      cityname : "City1",
      description : "Description1",
      temperature : 40
    }
  ];
  newcityname = "";
  constructor() { }

  ngOnInit(): void {
  }
  onUpdateCityName(event: Event){
    this.newcityname = (<HTMLInputElement>event.target).value;
    console.log(this.newcityname);
    // getWeatherItems(this.newcityname);
  }
}
