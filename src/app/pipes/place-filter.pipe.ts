import { Pipe, PipeTransform } from '@angular/core';
import { Place } from '../models/place.model';
import { PlacesTypeEnum } from '../models/places-type.enum';

@Pipe({
  name: 'placeFilterPipe'
})
export class PlaceFilterPipe implements PipeTransform {

  transform(places: Place[], selectType: PlacesTypeEnum): Place[] {
    if (!places || !selectType || selectType === PlacesTypeEnum.weather) {
      return places;
    }

    return places.filter(p => p.type === selectType);
  }

}
