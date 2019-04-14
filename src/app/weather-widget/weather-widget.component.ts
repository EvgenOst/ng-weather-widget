import { Component} from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from '@appCommon/models/place.model';
import { PlacesService } from '@appCommon/services/places.service';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss']
})
export class WeatherWidgetComponent {
  constructor(private placesService: PlacesService) {}

  public get currentWeather(): Observable<Weather> {
    return this.placesService.getSelectedWeather();
  }
}
