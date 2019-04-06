import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TeddyBearComponent } from './components/teddy-bear/teddy-bear.component';
import { HotelsListWidgetComponent } from './components/hotels-list-widget/hotels-list-widget.component';
import { WeatherWidgetComponent } from './components/weather-widget/weather-widget.component';
import { PlaceFilterPipe } from './pipes/place-filter.pipe';
import { PhonePipe } from './pipes/phone.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TeddyBearComponent,
    HotelsListWidgetComponent,
    WeatherWidgetComponent,
    PlaceFilterPipe,
    PhonePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
