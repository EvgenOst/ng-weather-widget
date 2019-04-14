import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TeddyBearComponent } from './teddy-bear/teddy-bear.component';
import { HotelsListWidgetComponent } from './hotels-list-widget/hotels-list-widget.component';
import { WeatherWidgetComponent } from './weather-widget/weather-widget.component';
import { PlaceFilterPipe } from '@appCommon/pipes/place-filter.pipe';
import { PhonePipe } from '@appCommon/pipes/phone.pipe';
import { HotelItemComponent } from './hotels-list-widget/hotel-item/hotel-item.component';
import { MenuPipe } from '@appCommon/pipes/menu.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TeddyBearComponent,
    HotelsListWidgetComponent,
    WeatherWidgetComponent,
    PlaceFilterPipe,
    PhonePipe,
    HotelItemComponent,
    MenuPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
