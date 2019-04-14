import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInfo } from '@appCommon/models/place.model';
import { PlacesService } from '@appCommon/services/places.service';

@Component({
  selector: 'app-teddy-bear',
  templateUrl: './teddy-bear.component.html',
  styleUrls: ['./teddy-bear.component.scss']
})
export class TeddyBearComponent {

  constructor(private placesService: PlacesService) {}

  public get currentUser(): Observable<UserInfo> {
    return this.placesService.getSelectedUser();
  }
}
