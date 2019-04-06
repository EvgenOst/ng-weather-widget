import { Component, OnInit } from '@angular/core';
import { Place } from './models/place.model';

import { Places } from './mock/places';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'angular-weather-widget';

  public places: Place[];
  public currentPlace: Place;

  constructor() {}

  ngOnInit(): void {
    this.places = Places;
    this.currentPlace = this.places[0];
  }

  public onSelectPlace(place: Place): void {
    this.currentPlace = place;
  }
}
