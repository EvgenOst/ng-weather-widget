import { Component, OnInit, Input } from '@angular/core';
import { Weather } from 'src/app/models/place.model';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss']
})
export class WeatherWidgetComponent implements OnInit {
  @Input()
  weather: Weather;

  constructor() { }

  ngOnInit() {
  }

}
