import { Pipe, PipeTransform } from '@angular/core';
import { Place } from '@appCommon/models/place.model';

@Pipe({
  name: 'menu'
})
export class MenuPipe implements PipeTransform {

  transform(places: Place[]): string[] {
    const types = places.map(place => place.type);

    return [...new Set(types)];
  }

}
