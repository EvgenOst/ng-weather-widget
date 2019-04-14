import { Pipe, PipeTransform } from '@angular/core';
import { Place } from '../models/place.model';

@Pipe({
  name: 'placeFilter'
})
export class PlaceFilterPipe implements PipeTransform {

  transform(places: Place[], selectType: string): Place[] {
    if (!places || !selectType) {
      return places;
    }

    return places.filter(p => p.type === selectType);
  }

}
