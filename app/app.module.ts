import './rxjs-extensions';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule }    from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }   from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { FestivalsComponent }   from './festivals.component';
import { FestivalDetailComponent } from './festival-detail.component';
import { FestivalService }   from './festival.service';
import { FestivalSearchComponent }   from './festival-search.component';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    FestivalsComponent,
    FestivalDetailComponent,
    FestivalSearchComponent
  ],
  providers: [
    FestivalService
  ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
