import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent }   from './app.component';
import { FestivalsComponent }   from './festivals.component';
import { FestivalDetailComponent } from './festival-detail.component';
import { FestivalService }   from './festival.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'festivals',
        component: FestivalsComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    FestivalsComponent,
    FestivalDetailComponent
  ],
  providers: [
    FestivalService
  ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
