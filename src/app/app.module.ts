import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProvaComponent } from './prova/prova.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { DynamiteComponent } from './dynamite/dynamite.component';
import { DragonComponent } from './dragon/dragon.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatIconModule} from '@angular/material/icon';
import { PhiladelphiaComponent } from './philadelphia/philadelphia.component';
import { RainbowComponent } from './rainbow/rainbow.component';
import { ShrimpComponent } from './shrimp/shrimp.component';
import {MatBadgeModule} from '@angular/material/badge';
import { BadgeComponent } from './badge/badge.component';

@NgModule({
  declarations: [
    AppComponent,
    ProvaComponent,
    NavbarComponent,
    DynamiteComponent,
    DragonComponent,
    ToolbarComponent,
    PhiladelphiaComponent,
    RainbowComponent,
    ShrimpComponent,
    BadgeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
