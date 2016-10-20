import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { FESTIVALS } from './mock-festivals';
import { Festival } from './festival';

@Injectable()
export class FestivalService {
  getFestivals(): Promise<Festival[]> {
    return Promise.resolve(FESTIVALS);
  }

  getFestivalssSlowly(): Promise<Festival[]> {
  return new Promise<Festival[]>(resolve =>
    setTimeout(resolve, 2000)) // delay 2 seconds
    .then(() => this.getFestivals());
  }

  getFestival(id: number): Promise<Festival> {
    return this.getFestivals()
               .then(festivals => festivals.find(festival => festival.id === id));
  }

}
