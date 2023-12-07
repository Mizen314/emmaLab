import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FeaturedContentComponent } from './components/featured-content/featured-content.component';
import { PlayerGridComponent } from './components/player-grid/player-grid.component';
import { FormsModule } from '@angular/forms';
import { ButtonEventComponent } from './components/button-event/button-event.component';


@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    NavbarComponent,
    FeaturedContentComponent,
    PlayerGridComponent,
    ButtonEventComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
