import { Injectable } from '@angular/core';
import { of, Observable, BehaviorSubject } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Place, Weather, UserInfo } from '@appCommon/models/place.model';
import { Places } from '../../mock/places';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private selectedPlace: BehaviorSubject<Place> = new BehaviorSubject(Places[0]);

  constructor() {}

  public selectPlace(place: Place): void {
    this.selectedPlace.next(place);
  }

  public getPlacesList(): Observable<Place[]> {
    return of(Places);
  }

  public getSelectedPlace(): Observable<Place> {
    return this.selectedPlace;
  }

  public getSelectedWeather(): Observable<Weather> {
    return this.selectedPlace.pipe(
      filter(i => !!i),
      map(place => place.weather)
    );
  }

  public getSelectedUser(): Observable<UserInfo> {
    return this.selectedPlace.pipe(
      filter(i => !!i),
      map(place => place.socialInfo)
    );
  }
}
