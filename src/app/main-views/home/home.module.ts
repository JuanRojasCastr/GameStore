import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './../../app.component';

import { HomeRoutingModule } from './home-routing.module';
import { CardsGamesComponent } from '@components/cards-games/cards-games.component'
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    CardsGamesComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    HomeRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class HomeModule { }
