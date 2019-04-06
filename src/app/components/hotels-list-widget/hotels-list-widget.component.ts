import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Place } from 'src/app/models/place.model';
import { PlacesTypeEnum } from 'src/app/models/places-type.enum';

@Component({
  selector: 'app-hotels-list-widget',
  templateUrl: './hotels-list-widget.component.html',
  styleUrls: ['./hotels-list-widget.component.scss']
})
export class HotelsListWidgetComponent implements OnInit {
  @Input()
  placesList: Place[];

  @Input()
  currentPlace: Place;

  @Output()
  selectPlace = new EventEmitter<Place>();

  public placesTypeEnum = PlacesTypeEnum;
  public placesTypes = Object.keys(PlacesTypeEnum);
  public selectType: PlacesTypeEnum;

  constructor() { }

  ngOnInit() {
  }

}
