import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent }   from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { FestivalsComponent }   from './festivals.component';
import { FestivalDetailComponent } from './festival-detail.component';
import { FestivalService }   from './festival.service';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    FestivalsComponent,
    FestivalDetailComponent
  ],
  providers: [
    FestivalService
  ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
