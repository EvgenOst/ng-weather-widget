import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PlacesService } from '@appCommon/services/places.service';
import { Place } from '@appCommon/models/place.model';

@Component({
  selector: 'app-hotels-list-widget',
  templateUrl: './hotels-list-widget.component.html',
  styleUrls: ['./hotels-list-widget.component.scss']
})
export class HotelsListWidgetComponent {
  public selectType: string;

  constructor(private placesService: PlacesService) {}

  public get placesList(): Observable<Place[]> {
    return this.placesService.getPlacesList();
  }

  public get currentPlace(): Observable<Place> {
    return this.placesService.getSelectedPlace();
  }

  public selectPlace(place: Place): void {
    this.placesService.selectPlace(place);
  }
}
