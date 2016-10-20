import { Component, Input } from '@angular/core';

import { Festival } from './festival';

@Component({
  selector: 'my-festival-detail',
  template: `
    <div *ngIf="festival">
      <h2>{{festival.name}} details!</h2>
      <div><label>id: </label>{{festival.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="festival.name" placeholder="name"/>
      </div>
    </div>
  `
})
export class FestivalDetailComponent {
  @Input()
  festival: Festival;
}
