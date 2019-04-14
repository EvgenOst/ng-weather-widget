import { Component, Input } from '@angular/core';
import { Place } from '@appCommon/models/place.model';

@Component({
  selector: 'app-hotel-item',
  templateUrl: './hotel-item.component.html',
  styleUrls: ['./hotel-item.component.scss']
})
export class HotelItemComponent {
  @Input()
  place: Place;
}
